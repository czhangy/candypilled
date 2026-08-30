## Architecture

**Stack:** Next.js 16 (App Router), React 19, TypeScript 5 (strict), SCSS modules, Axios

**Path aliases** (defined in `tsconfig.json`, respected by Turbopack for all module types including SCSS):

- `@/*` → `src/*`
- `@/styles/*` → `src/lib/styles/*`

**Routing:** File-based in `src/app/` using App Router. Root layout (`src/app/layout.tsx`) loads the JetBrains Mono font and imports `src/lib/styles/globals.scss` for global styles.

**Global styles** live in `src/lib/styles/`:

- `globals.scss` — body defaults and font-smoothing
- `_constants.scss` — SCSS variables (`$accent`, `$background`, `$foreground`, `$font-mono`, `$border-subtle`, `$text-dim`, `$text-mid`, `$max-content-width`)
- `_mixins.scss` — reusable declaration blocks (`full-height`, `mono-label`)
- `index.scss` — barrel that forwards constants and mixins

### Components

**Components** live in `src/components/`. Each component requires two co-located files:

- `ComponentName/ComponentName.tsx`
- `ComponentName/ComponentName.module.scss`

Shared UI primitives live in `src/components/common/` (Modal, Dropdown, Accordion, Spinner, etc.).

**Page components** always live directly under `src/components/` in a lowercase directory named after the route segment — regardless of route depth:

```
src/components/
  archives/               ← page for /status/archives
    ArchivesPage.tsx
    ArchivesPage.module.scss
    ArchivesContent/      ← child component, co-located here
      ...
  library/                ← page for /status/library
    LibraryPage.tsx
    LibraryPage.module.scss
```

**Domain directories** (`src/components/status/`, `src/components/career/`, etc.) exist only for shared child components used by pages in that feature area. They never contain page components.

**Component co-location**: If a child component is only used by a single parent component, place its directory inside the parent's directory rather than as a sibling. Components used by multiple parents live at the nearest shared ancestor level.

**Component reuse**: When two components share the same markup structure and styles with only content differing, extract a shared component with props rather than duplicating. Thin wrapper components that only pass fixed props to a shared component do not need a `.module.scss` file.

**Page-level padding**: All full-page components must include `padding: 1.5rem` on their outermost element. The site does not support screen sizes below `$max-content-width` (1260px) — `globals.scss` shows a small-screen message instead of the site shell below that width — so components must not contain mobile-specific (`width <= 768px` or similar) breakpoints.

**Icons** live in `src/lib/icons/` (flat, no subdirectories) and must be named with the `Icon` suffix (e.g., `ChevronIcon`).

### Classes and shared utilities

`src/lib/utils/` contains:

- **PascalCase `.ts` class files** — utility classes
- **`types.ts`** — shared TypeScript types used across multiple components
- **`constants.ts`** — shared runtime constants (e.g. site nav items)

**Every public export in `src/lib/utils/` (public static class methods, exported functions, exported constants) must have a JSDoc comment** (`/** ... */`) describing what it returns/represents. Private/internal members are exempt — regular `//` comments are fine for those, and only where the WHY isn't obvious.

**All definitions belong inside the component function** in the appropriate section — including static constants that do not depend on state or props. The only things permitted at module level are imports, the component function declaration itself, and the default export.

**Functions:** Always use arrow functions (`const fn = () => ...`). Never use the `function` keyword — this applies to component helpers, callbacks, and module-level functions.

**Event handlers** are prefixed with `handle`, named after event + subject: `handleClick`, `handleKeyDown`, `handleMenuSelect`. Callback parameters are always explicitly typed even when TypeScript can infer them.

**Inline styles** are only used for values that are dynamic at runtime (e.g. user-defined colors). CSS custom properties set via inline style use the `as React.CSSProperties` cast:

```tsx
style={{ '--color': value } as React.CSSProperties}
```

**Avoid `setState` inside `useEffect` bodies.** If multiple state values transition together, use `useReducer` and dispatch from the effect instead. If a value must persist after a nullable prop clears (e.g. during a close animation), split into a non-nullable data prop + a separate `open: boolean` controlled by the parent.
