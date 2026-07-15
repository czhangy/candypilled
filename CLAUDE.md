# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Note: If I repeat an instruction more than once, suggest adding it to this file.

> If a code style change is requested multiple times, recommend writing a new ESLint rule in `.eslint-rules/` to enforce the convention automatically, if appropriate.

> Build verification is not necessary for any change.

> Never start a dev server (`npm run dev`) to perform end-to-end verification, especially when implementing or changing API routes. Rely on type-checking, linting, and static review instead. If live/browser verification is genuinely needed, ask the user to run it themselves rather than starting a server directly.

> Never run `git add` / stage changes on your own. Leave changes unstaged and let the user stage and commit them.

> ALWAYS ALWAYS ALWAYS prefer making props or params required. NEVER assume future use cases for making something optional. Only make something optional if it needs to be optional right now.

## Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run lint       # Run ESLint
npm run format     # Run Prettier
```

Code generators (TypeScript, run via `tsx` from project root):

```bash
npm run gen:component   # Scaffold a new React component
npm run gen:icon        # Scaffold a new icon component
npm run gen:class       # Scaffold a new utility class
```

Pre-commit hooks via Husky/lint-staged automatically run ESLint, Prettier, and Stylelint on staged files.

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

**Components** live in `src/components/`. Each component requires three co-located files:

- `ComponentName/ComponentName.tsx`
- `ComponentName/ComponentName.module.scss`
- `ComponentName/ComponentName.md`

Shared UI primitives live in `src/components/common/` (Modal, Dropdown, Accordion, Spinner, etc.).

**Page components** always live directly under `src/components/` in a lowercase directory named after the route segment — regardless of route depth:

```
src/components/
  archives/               ← page for /status/archives
    ArchivesPage.tsx
    ArchivesPage.module.scss
    ArchivesPage.md
    ArchivesContent/      ← child component, co-located here
      ...
  library/                ← page for /status/library
    LibraryPage.tsx
    LibraryPage.module.scss
    LibraryPage.md
```

**Domain directories** (`src/components/status/`, `src/components/career/`, etc.) exist only for shared child components used by pages in that feature area. They never contain page components.

**Component co-location**: If a child component is only used by a single parent component, place its directory inside the parent's directory rather than as a sibling. Components used by multiple parents live at the nearest shared ancestor level.

**Component reuse**: When two components share the same markup structure and styles with only content differing, extract a shared component with props rather than duplicating. Thin wrapper components that only pass fixed props to a shared component do not need a `.module.scss` file.

**Page-level padding**: All full-page components must include `padding: 1.5rem` on their outermost element. The site does not support screen sizes below `$max-content-width` (1260px) — `globals.scss` shows a small-screen message instead of the site shell below that width — so components must not contain mobile-specific (`width <= 768px` or similar) breakpoints.

Each component directory contains a `ComponentName.md` documentation file co-located with the `.tsx` and `.module.scss` files. Whenever a component is modified, its documentation file must be updated to reflect the changes.

Documentation files follow this structure (omit any section that does not apply):

```
# ComponentName

A brief description of what the component is — no implementation details, prop names, or behavior specifics.

## Props

| Prop       | Type   | Required | Default   | Description |
| ---------- | ------ | -------- | --------- | ----------- |
| `propName` | `type` | Yes/No   | `default` | Description |

## State

| State       | Type   | Initial value  | Description |
| ----------- | ------ | -------------- | ----------- |
| `stateName` | `type` | `initialValue` | Description |

## Effects

- **On [trigger]** — description of the effect's purpose

## Computations

- `variableName` — description of what it represents and why it is computed

## SCSS Variable Dependencies

- `--variable-name` — description of where it is expected to be set by a parent

Only list variables that this component consumes but does not define. Do not list variables that this component defines and passes down to its children.
```

**Icons** live in `src/lib/icons/` (flat, no subdirectories) and must be named with the `Icon` suffix (e.g., `ChevronIcon`).

### Classes and shared utilities

`src/lib/utils/` contains:

- **PascalCase `.ts` class files** — utility classes
- **`types.ts`** — shared TypeScript types used across multiple components
- **`constants.ts`** — shared runtime constants (e.g. site nav items)

**All definitions belong inside the component function** in the appropriate section — including static constants that do not depend on state or props. The only things permitted at module level are imports, the component function declaration itself, and the default export.

**Functions:** Always use arrow functions (`const fn = () => ...`). Never use the `function` keyword — this applies to component helpers, callbacks, and module-level functions.

**Event handlers** are prefixed with `handle`, named after event + subject: `handleClick`, `handleKeyDown`, `handleMenuSelect`. Callback parameters are always explicitly typed even when TypeScript can infer them.

**Inline styles** are only used for values that are dynamic at runtime (e.g. user-defined colors). CSS custom properties set via inline style use the `as React.CSSProperties` cast:

```tsx
style={{ '--color': value } as React.CSSProperties}
```

**Avoid `setState` inside `useEffect` bodies.** If multiple state values transition together, use `useReducer` and dispatch from the effect instead. If a value must persist after a nullable prop clears (e.g. during a close animation), split into a non-nullable data prop + a separate `open: boolean` controlled by the parent.

## Code Style

- **Formatting:** 4-space indentation, 80-char line width, single quotes, trailing commas (ES5)
- **SCSS constants:** `$accent`, `$background`, `$foreground` defined in `_constants.scss` — use these in component SCSS files, not CSS `var()` calls. CSS variables are only used where runtime values are unavoidable (e.g. `var(--font-mono)` set by Next.js at runtime).
- **CSS Modules access:** Use `styles.className` for single-word class names, `styles['hyphenated-name']` for names containing hyphens

### SCSS mixins and constants

Before writing a raw CSS value in a component SCSS file, check whether it belongs in `_constants.scss` (a reusable token like a color or font) or `_mixins.scss` (a reusable block of declarations like `fill-parent`). When the same property+value combination appears in two or more places, extract it. Mixins live in `src/lib/styles/_mixins.scss` and are imported with `@use '@/styles/mixins' as *`.

**Color tokens** — use named tokens instead of raw `rgba()` calls:

- `$border-subtle` — `rgba($foreground, 0.15)`, for subtle container borders
- `$text-dim` — `rgba($foreground, 0.4)`, for inactive interactive text (e.g. buttons)
- `$text-mid` — `rgba($foreground, 0.5)`, for secondary/subtext

**Available mixins:**

- `full-height` — `flex: 1`, fills the remaining height in the page flex column (`body → .page-main → page component`); use on the outermost element of every full-page component
- `mono-label` — `font-family: $font-mono; font-weight: 700` — use for all bold monospace text (titles, nav items, button labels)
- `uppercase-label` — bold mono text in `$text-mid` with `0.05em` letter-spacing and uppercase transform — use for section/column label text (card labels, table headers)

Add new mixins here only once they're actually used by a component — don't pre-declare mixins for hypothetical future UI.

### SCSS nesting

Nest selectors in `.module.scss` files to mirror the JSX structure of the component. A class that wraps another class in the markup should wrap it in SCSS too:

```scss
// JSX: <div className="card"><span className="card__label" /></div>
.card {
    .card__label {
    }
}
```

Modifier classes (`&--variant`) nest inside their base class. **Base styles must appear before the modifier block** — at equal specificity, source order determines which rule wins, so the modifier must come last to override correctly:

```scss
.card {
    .card__label {
        opacity: 0;
    } // base first
    &--active {
        .card__label {
            opacity: 1;
        } // modifier after
    }
}
```

**This cannot be lint-enforced.** Stylelint only sees the `.module.scss` file in isolation — it has no way to check the nesting against the component's actual JSX tree in the `.tsx` file. There is no automated check for this convention, so after editing a `.module.scss` file, manually diff its selector nesting against the JSX structure before considering the change done.

**Animations** must include a `@media (prefers-reduced-motion: reduce)` block that disables or stills the animation.

**CSS custom properties are scoped to the component that declares them.** Do not declare a variable in a parent component's SCSS intending for a child component to consume it — that creates invisible coupling. Use props instead.

**Hover styles** use `@media (hover: hover)` wrapping `&:hover` to avoid sticky hover states on touch devices:

```scss
@media (hover: hover) {
    .item:hover {
        color: $accent;
    }
}
```

**Transitions** are declared on the base element, not inside the `:hover` block.

## Verification

After completing any implementation task, run `npm run lint` and fix all errors before reporting the work as done.
