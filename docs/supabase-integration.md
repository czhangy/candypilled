# Supabase integration (removed)

This documents the Supabase-backed auth/DB layer that was removed from the
app so local dev didn't have to eat a network round-trip on every
navigation (see git history around the removal commit for the specific
perf complaint — middleware calling `supabase.auth.getUser()`/`getClaims()`
on every request was adding real latency to tab switches and route
changes). The app now runs entirely on `localStorage` (see `RunHelpers`,
`SettingsHelpers`, `NotesHelpers`, `HallOfFameHelpers` in `src/lib/utils/`)
with no auth at all. This doc is here so the integration can be rebuilt
later without re-deriving the shape from scratch.

## What existed

**Packages:** `@supabase/ssr`, `@supabase/supabase-js`.

**Env vars** (still present in `.env.local`, unused by code now):
`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

**Auth:** Google OAuth via Supabase Auth.

- `HomePage` had a "SIGN IN" button (shown when signed out) that called
  `supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo:
'${origin}/auth/callback' } })`, and a "RUNS" link (shown when signed in)
  in place of it.
- `src/app/auth/callback/route.ts` — a Route Handler that exchanged the
  OAuth `code` query param for a session via
  `supabase.auth.exchangeCodeForSession(code)`, then redirected to `/runs`.
- `src/proxy.ts` (Next.js middleware) called
  `SupabaseMiddlewareHelpers.updateSession(request)` on every request
  matching `/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)`.
  It refreshed the session cookie and redirected signed-out requests to `/`
  for any non-public route (public routes: `/`, `/auth/callback`, `/types`,
  `/natures`, `/credits`).
- `Navbar` had a "Sign Out" button (shown when signed in) calling
  `supabase.auth.signOut()`.
- `SessionHelpers` (`src/lib/utils/SessionHelpers.ts`) held the current
  `Session | null` in a module-level cache exposed via
  `useSyncExternalStore` (subscribe/getSnapshot/getServerSnapshot), updated
  by `AuthProvider` from `supabase.auth.getSession()` and
  `supabase.auth.onAuthStateChange`.

**Supabase clients** (three, per Supabase's Next.js SSR guidance):

- `SupabaseBrowserHelpers.createClient()` — `createBrowserClient` from
  `@supabase/ssr`, for Client Components.
- `SupabaseServerHelpers.createClient()` — `createServerClient` from
  `@supabase/ssr`, reading/writing cookies via `next/headers`, for Server
  Components/Route Handlers.
- `SupabaseMiddlewareHelpers.updateSession()` — `createServerClient` reading
  request cookies directly, for `src/proxy.ts`.

All three read `process.env.NEXT_PUBLIC_SUPABASE_URL!` and
`process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!`.

**Database schema** (Postgres via Supabase), one row per authenticated
user per item, RLS presumably scoped by `user_id = auth.uid()` (not
re-verified here — re-derive the actual policies from the Supabase project
if it still exists, don't assume):

| Table                  | Columns                                                             |
| ---------------------- | ------------------------------------------------------------------- |
| `runs`                 | `user_id`, `game_slug`, `data` (jsonb `Run`)                        |
| `settings`             | `user_id`, `setting_id`, `value` (bool)                             |
| `notes`                | `user_id`, `game_slug`, `battle_key`, `note` (text)                 |
| `hall_of_fame_entries` | `user_id`, `game_slug`, `attempt`, `team` (jsonb `CaughtPokemon[]`) |

This mirrors exactly what's now stored in `localStorage`:

| localStorage key       | Shape                                         |
| ---------------------- | --------------------------------------------- |
| `runs`                 | `Record<gameSlug, Run>`                       |
| `settings`             | `Record<settingId, boolean>`                  |
| `notes`                | `Record<`${gameSlug}::${battleKey}`, string>` |
| `hall-of-fame-entries` | `HallOfFameEntry[]`                           |

**Data helpers:** `RunHelpers`, `SettingsHelpers`, `NotesHelpers`,
`HallOfFameHelpers` each followed the same pattern: a module-level cache +
`subscribe`/`getSnapshot`/`getServerSnapshot` for `useSyncExternalStore`,
a `hydrate()` that fetched everything for the current user on
sign-in/mount, and mutation methods (`saveRun`, `saveSetting`, `saveNote`,
`addEntry`, etc.) that wrote to Supabase then updated the local cache.
Each had a private `getUserId()` that called
`supabase.auth.getUser()` and threw if there was no session.

**Provider:** `AuthProvider` (`src/components/layout/AuthProvider/`) ran on
mount in the root layout: fetched the initial session, subscribed to
`onAuthStateChange`, and called `hydrateAll()` (all four helpers'
`hydrate()`) whenever a session existed. There is no equivalent provider
now — the current `localStorage`-only helpers read synchronously
(memoized against the raw stored string, recomputed only when it changes),
so there's no async fetch step to kick off on mount at all. This is also
the original pre-Supabase shape of the app (see "What this replaced"
below), not something new invented for the removal.

## What this replaced

Before PR #387 ("Implement DB+Auth"), the app was already localStorage-only
— Supabase wasn't introduced to replace a working sync layer, it was
introduced to add one where none existed. The pre-#387 shape (see git log
around commit `53a38ab^`) is worth knowing since it's what the app was
reverted back toward:

- One combined `LocalStorageHelpers` class owned run persistence directly
  (`RunHelpers` was pure domain logic — just `getUsedLocations`).
  `SettingsHelpers`/`NotesHelpers`/`HallOfFameHelpers` each owned their own
  persistence directly, same as now.
- `getSnapshot()` read straight from `localStorage` synchronously on every
  call, memoized against a raw string (`cachedRaw`) so repeated calls in
  one render pass didn't re-parse — no `hydrate()`, no provider, no
  loading state needed anywhere, because there was no async gap between
  mount and data being available.
- `subscribe()` also listened for the native browser `storage` event (in
  addition to the in-memory listener `Set`), so edits in one browser tab
  showed up live in another open tab of the same origin. The current
  localStorage-only helpers do **not** do this — same-tab writes notify
  listeners, but a second open tab won't see a change until it re-reads
  (e.g. next navigation). Worth restoring if that cross-tab behavior is
  wanted back.
- Storage layout used one top-level key per game/setting (e.g.
  `localStorage['diamond']`, `localStorage['show-dupes']`) rather than the
  single consolidated `runs`/`settings` keys used now.

## Problems to solve for the next attempt

The underlying goal Supabase was brought in for — data that survives a
cleared browser, syncs across devices, and isn't lost if `localStorage` is
wiped — is still real and still unsolved by the current localStorage-only
setup. Whatever replaces Supabase should solve that goal without
reintroducing these specific problems, which is why they're written down
rather than just "try Supabase again":

1. **Middleware ran a network call on every navigation.** The proxy
   (`src/proxy.ts` → `SupabaseMiddlewareHelpers.updateSession`) called
   `supabase.auth.getUser()` — a real round-trip to Supabase's Auth server
   — on every request matched by its matcher, which included client-side
   tab switches within `/runs` (search-param-only navigations still hit
   the proxy). That added ~300ms–1s of latency to actions that should be
   instant. Switching to `getClaims()` (local JWT verification via cached
   JWKS) helped, but only because this project's Supabase instance already
   used asymmetric (ECC) signing keys — a project still on the legacy
   symmetric secret would get zero benefit from that swap.
2. **`getClaims()`'s JWKS cache is per-process, not per-request.** It's
   cached in a module-level map (`GLOBAL_JWKS` in `@supabase/auth-js`)
   scoped to the Node process, not to Supabase itself. On a long-running
   dev server this is fine after the first request. On serverless/edge
   deployment (Vercel) with cold or low-traffic instances, each cold start
   is a fresh process with an empty cache, so the "local verification, no
   network call" benefit may not actually materialize in production nearly
   as often as it does in local dev. Whatever's next should be evaluated
   under realistic serverless cold-start conditions, not just a warm dev
   server.
3. **Auth added a real user-facing gate for a tool that doesn't need one.**
   Every route except `/`, `/auth/callback`, `/types`, `/natures`, and
   `/credits` required a signed-in Google account before this removal.
   That's a meaningful barrier (an OAuth redirect round-trip, a Google
   account requirement) for what's fundamentally a single-player local
   tool. If the next attempt still wants auth (e.g. to scope synced data to
   a person), consider whether it needs to gate the whole app or just the
   sync action itself — e.g. work fully anonymously/locally by default,
   and only prompt for auth when the user explicitly opts into sync.
4. **No offline story.** The Supabase-backed helpers threw
   (`used without a session`) if there was no session, so the app was
   unusable without both a signed-in user and a live connection to
   Supabase. A sync layer built on top of localStorage-as-source-of-truth
   (write local first, sync in the background, tolerate being offline)
   would avoid this without giving up the "survives a cleared browser"
   goal.
5. **No conflict/merge story either.** The Supabase helpers did a blind
   `upsert`/`update` per write; if the same run was edited from two tabs or
   two devices before either synced, the later write silently won with no
   merge. Fine for a single device, but a real risk once multi-device sync
   is the whole point. Worth designing for explicitly rather than
   discovering it in production.

## Restoring it

1. `npm install @supabase/ssr @supabase/supabase-js`.
2. Recreate `SupabaseBrowserHelpers`, `SupabaseServerHelpers`,
   `SupabaseMiddlewareHelpers` per the shapes above (git history has the
   exact prior implementations if this repo's history goes back far
   enough — check before the removal commit).
3. Recreate `src/proxy.ts` and `src/app/auth/callback/route.ts` — but see
   "Problems to solve for the next attempt" above before just
   reintroducing the same middleware-on-every-navigation shape.
4. Recreate `SessionHelpers` and a provider component (there's no
   `AuthProvider`/`DataProvider` in the tree at all right now — see "What
   this replaced" above) to hold session state and trigger hydration.
   Restore the sign-in/sign-out UI in `HomePage`/`Navbar`.
5. Swap each data helper's `localStorage` calls back for the equivalent
   Supabase queries — the localStorage key shapes above map directly onto
   the table columns, so this is a mechanical swap, not a redesign. Note
   that the current helpers read synchronously with no cache-populating
   step — reintroducing Supabase means reintroducing an async `hydrate()`/
   loading-state step too, since a network fetch can't be synchronous the
   way a localStorage read is.
6. Decide what to do with any data users have accumulated in
   `localStorage` in the meantime — there's no migration path from
   localStorage back to Supabase built here; that'll need to be written
   fresh based on what's actually in use at restoration time.
7. Confirm the Supabase project (tables, RLS policies, Google OAuth
   provider config) still exists and matches — this doc doesn't guarantee
   it does.
