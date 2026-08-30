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

Prefer the per-game `var(--accent-color)` (set inline from `game.accentColor` on the page's root element) over the global `$accent` constant for accent-colored UI (hover states, active/selected states, highlights), since it reflects the current game's theme rather than a single fixed color.

**Available mixins:**

- `full-height` — `flex: 1`, fills the remaining height in the page flex column (`body → .page-main → page component`); use on the outermost element of every full-page component
- `mono-label` — `font-family: $font-mono; font-weight: 700` — use for all bold monospace text (titles, nav items, button labels)
- `uppercase-label` — bold mono text in `$text-mid` with `0.05em` letter-spacing and uppercase transform — use for section/column label text (card labels, table headers)
- `outline-button($color)` — a transparent button with a `$color` border and text that fills solid `$color` with `$foreground` text on hover — use for outlined action buttons (e.g. destructive/confirm actions)
- `form-label` — small uppercase mono label text — use for form field labels
- `form-input` — a bordered, rounded text input with an accent-colored focus ring — use for text/number form fields

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
