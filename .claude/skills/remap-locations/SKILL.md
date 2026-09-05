---
name: remap-locations
description: Redo an already-onboarded game's map/location data — stitching new maps, restitching existing ones, repositioning or adding battles, and reordering locations/splits. Use when asked to "remap" a game or region, redo/re-capture a location's map, or reorder a game's splits/locations — as opposed to onboard-new-game, which is for a game that isn't in the tracker yet.
---

# Remapping a game

This is maintenance work on a game already registered in `GAMES`
(`src/lib/data/games.ts`) — not the onboard-new-game flow. Reference prior
run: `git show 73cf9772` ("Remap diamond-pearl"), one commit per location.

Remapping a location is one unit of work with up to four parts, done in
this order, one location at a time — don't batch multiple locations'
questions together, and don't move to the next location until the current
one's map, markers, and battles.ts are all consistent:

1. Stitch or restitch the map (`dspre-map-stitch` skill).
2. If the location (or subarea) already has `battles`, get updated x/y for
   every marker.
3. Add any new battles the user calls out.
4. Reorder locations/subareas if the user says the order changed.

Every "ask, never assume" rule in `onboard-new-game` applies here
identically for anything battle- or metadata-shaped (x/y, `BattleMetadata`,
gender, IVs, trainer identity/order, split placement) — this skill only
adds what's specific to _redoing_ data that already exists. Don't re-derive
those rules here; go read that skill's "Ask, never assume" section if
unsure.

## 0. Default to restitching every touched location

**Any location you touch during a remap session — including one only
being reordered, not itself the subject of "restitch X" — gets its map(s)
restitched by default, unless the user says otherwise for that location.**
Don't restrict restitching to only the location named in "remap X"; a
location moved as a side effect of another task (e.g. "move Y after X")
is touched too, so check for fresh chunks on the source dir for it before
considering that location's part of the task done. This is the opposite
default from onboard-new-game (where nothing is redone unless asked) —
in a remap session, assume redo-everything-touched and let the user opt a
specific location out, rather than assuming a location is unchanged and
waiting to be told to redo it.

## 1. Map stitching

Run the `dspre-map-stitch` skill as normal. Two things specific to a remap:

- **Tell that skill explicitly whether this is a new map or a redo** — it
  asks for this anyway, but in a remap session a redo is the common case,
  not the exception.
- A redo **always overwrites the existing `<slug>.png` in place** — the
  file path and barrel export in `maps/index.ts` don't change, so no
  `index.ts` edit is needed for a redo (only for a genuinely new map).
- **Don't sanity-check the chunk images before stitching** — no checking
  for window chrome, dead space, black borders, or any other visual
  artifact, on either the raw chunks or the final stitched image. Just run
  the stitch and wire it in. This overrides `dspre-map-stitch`'s own
  chunk-checking steps for a remap session specifically.

## 1.5. State the location's battle list before asking for anything

As soon as a location is the current one being worked (restitch requested,
or just moved to via "next is X"), state its existing `battles` array as a
plain numbered list of `battleKey`s in on-file order — before asking for
x/y or anything else. Don't wait for the user to ask for this or to
already know the order; they're supplying coordinates against that list
and need it in front of them every time, not just the first time a
location comes up.

## 2. Restitched maps invalidate existing battle markers — always ask

`Battle.x`/`Battle.y` are pixel coordinates against that specific map
image's own intrinsic dimensions (marker sizing itself divides a fixed
pixel constant by the image's width/height — see `onboard-new-game`'s
"Never rescale a map image..." section). A restitch almost always changes
the image at the pixel level, even when the in-game layout looks
identical: different crop bounds, a chunk recaptured at a slightly
different scroll offset, a dead-space trim landing a pixel or two
differently. **Never assume old `x`/`y` values still line up just because
the map "looks the same" or the location's `battles` array didn't need any
other edit.**

So: after restitching a map, before touching anything else, check whether
that `Location` or any of its `subareas` has a `battles` array. If it
does, that location isn't done until updated x/y is confirmed:

- **State exactly what needs re-confirming as plain text, one line per
  marker** (`battleKey` + old x/y), not via `AskUserQuestion` — the user
  fills these in free-form against the new image, same convention as
  onboarding.
- **Don't ask before the new map is actually in place and wired.** The
  location file already points at the map by import, so once the restitch
  overwrites `<slug>.png` the location is already rendering against the
  new image — there's nothing further to "wire" before asking, unlike a
  brand-new location (see `onboard-new-game`'s wire-before-asking-anchor
  ordering, which is about a location that doesn't exist in the app yet).
- Apply the user's corrected values directly to the existing `Battle`
  entries in the location file — don't regenerate the entries via
  `gen:battle`, since the `battleKey`/`metadata`/`fieldCondition`/
  `customWidth`/`customHeight` on each one are unchanged, only position
  moved.
- If the user says positions are unchanged and confirms no update is
  needed for a specific marker (e.g. it's a same-resolution recapture with
  no crop change), that's an explicit answer like any other — don't infer
  "probably fine" yourself and skip asking.

**Exception: a bare "restitch this location" with no other context is a
correction, not a new capture.** It means the user gave the wrong source
images for the location currently being worked on (e.g. answered a
"clean?" check against a bad chunk, or a chunk got overwritten) and is
re-running the stitch against corrected images of the same crop/frame —
not recapturing at a new scroll offset or zoom. The coordinate system is
unaffected by this operation, so don't re-ask for x/y afterward; only ask
again if the user says the new image is a different capture, or gives new
coordinates unprompted.

## 3. Adding new battles during a remap

Same collaborative, per-location loop as `onboard-new-game` step 5
(trainer names/order from the user, map to the external trainer-data
source for team/ability/nature/moves/AI, ask for IVs only per that game's
own IV-sourcing rule, never guess x/y/gender/metadata). The only
difference from onboarding is that the location file already exists, so
this is an edit to its `battles: []` array (and a new `battles.ts` entry
keyed by the usual `battleKey` convention) rather than a fresh scaffold.

**Wire the location into its split before asking for x/y/metadata**, same
as `onboard-new-game`'s wire-before-asking-anchor ordering — this applies
here too, including for a location that already existed for another split
(a brand-new `gen:location` scaffold, or an existing `Location` newly
added to this split's `locations: []` array) but wasn't rendering in
_this_ split until now. The location isn't visible in-app to check markers
against until it's actually in a split's array, so add it there first,
then ask.

If the new battle is on a location that's also being restitched this pass,
do the map first, then fold this battle's x/y into the same "state exactly
what's needed" question as the existing markers' updated positions — one
combined ask per location, not two separate rounds.

## 4. Reordering locations and subareas

A reorder is only ever done on the user's explicit instruction for that
specific location/split — never inferred from geography, in-game order,
or "this looks more sensible." Two distinct things can be reordered,
per `split-location-wiring.md`:

- **A split's `locations: []` array** (in `src/lib/data/<game>/splits/*.ts`)
  — the order locations appear within one gym's split.
- **A `Location`'s `subareas` order**, via
  `LocationHelpers.withSubareaOrder(LOCATION, [...])` at the split call
  site — relevance-to-this-split order, not geographic order, and it can
  legitimately differ per split for the same location (see existing
  `splits/*.ts` files for examples of the same location reordered
  differently between two split files).

If the user says a location or split's order changed without specifying
the full new order, ask for the explicit new order rather than guessing
which direction/pattern they mean.

## Landing the change

Leave changes unstaged per `CLAUDE.md` — staging/committing is the user's
call. A remap session's natural commit boundary is one location (map +
markers + any new battles.ts entries) at a time, matching the reference
`73cf9772` history, but only stage/commit when the user actually asks.
