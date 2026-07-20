# EvolutionLine

Displays a Pokemon's evolution line as a chain of sprites connected by
arrows labeled with how each step is reached. Methods with an icon
available in `public/evolution_methods` (e.g. Shiny Stone, Friendship)
render that icon in place of the text label, with a `Tooltip` on
hover spelling out the method in text. A method requiring a specific
gender renders a ♂ or ♀ symbol colored blue or pink instead of the
"Male"/"Female" text. A method's condition (e.g. the held item for a
trade evolution) wraps onto its own line beneath the method label. A
condition backed by an icon (e.g. a trade evolution's held item, or the
Mossy Rock/Icy Rock locations Eevee levels up near) renders that icon
below the method label instead of the condition text, with a `Tooltip`
spelling out the condition. The
arrow column (icon/label and condition text) has a fixed width and wraps
long text across lines, so arrows stay aligned across branches even when
their methods' labels differ in length (e.g. Eevee's stone, day/night,
and location-based evolutions).
Branches (e.g. Eevee's split into multiple eeveelutions) render as a
vertical stack of continuations after the branching step, and every
branch is always shown regardless of which family member is currently
selected (`step` is expected to be the family's full, unpruned tree; see
`EvolutionHelpers.getFullEvolutionLine`). A branch whose target name is
ambiguous between multiple forms (e.g. Burmy evolving into Wormadam,
whose cloak/form isn't tracked by evolution data) is itself expanded
into one branch per form, rather than silently collapsing to a single
arbitrary form. Each step's sprite is clickable, letting the caller
switch which Pokemon in the line is being viewed. Renders itself
recursively for each step in the line. When the global "Disable Trade
Evolutions" setting is enabled, branches reachable only via trade are
omitted entirely, along with everything beneath them.

## Props

| Prop              | Type                        | Required | Default | Description                                                            |
| ----------------- | --------------------------- | -------- | ------- | ---------------------------------------------------------------------- |
| `currentName`     | `string`                    | No       | -       | The currently selected species, highlighted if it appears in this step |
| `hideTradeEvos`   | `boolean`                   | Yes      | -       | Whether trade-only evolution branches are omitted                      |
| `onSelectSpecies` | `(species: string) => void` | Yes      | -       | Called with a step's species when its sprite is clicked                |
| `step`            | `EvolutionStep`             | Yes      | -       | The evolution step to render, along with its descendants               |
| `variant`         | `string`                    | Yes      | -       | The sprite variant to prefer, matching the game's slug                 |

## Computations

- `sprite` — `step`'s sprite for the given `variant`, resolved via
  `PokemonHelpers`
- `isCurrent` — whether `step` matches `currentName`, used to highlight
  the selected Pokemon within the line
- `visibleEvolutions` — `step.evolvesTo` filtered to exclude branches
  whose every method requires a trade (via
  `EvolutionHelpers.isTradeEvolution`) when `hideTradeEvos` is enabled
- for each branch, `formNames` — the branch's target name expanded via
  `PokemonHelpers.getPokemonForms` into every matching form key (one,
  unless the name is ambiguous between multiple forms); one branch is
  rendered per entry, each recursing into a copy of the child step with
  `name` set to that specific form

## Handlers

- `handleNodeClick` — calls `onSelectSpecies` with this step's species
  name

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, used to highlight
  the currently selected Pokemon's node; expected to be set by a parent
