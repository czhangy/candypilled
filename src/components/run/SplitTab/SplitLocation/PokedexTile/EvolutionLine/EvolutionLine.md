# EvolutionLine

Displays a Pokemon's evolution line as a chain of sprites connected by
arrows labeled with how each step is reached. Methods with an icon
available in `public/evolution_methods` (e.g. Shiny Stone, Friendship)
render that icon in place of the text label, with a native tooltip on
hover spelling out the method in text. A method requiring a specific
gender renders a ♂ or ♀ symbol colored blue or pink instead of the
"Male"/"Female" text. A method's condition (e.g. the held item for a
trade evolution) wraps onto its own line beneath the method label.
Branches (e.g. Eevee's split into multiple eeveelutions) render as a
vertical stack of continuations after the branching step. Each step's
sprite is clickable, letting the caller switch which Pokemon in the
line is being viewed. Renders itself recursively for each step in the
line.

## Props

| Prop              | Type                        | Required | Default | Description                                                            |
| ----------------- | --------------------------- | -------- | ------- | ---------------------------------------------------------------------- |
| `currentName`     | `string`                    | No       | -       | The currently selected species, highlighted if it appears in this step |
| `onSelectSpecies` | `(species: string) => void` | Yes      | -       | Called with a step's species when its sprite is clicked                |
| `step`            | `EvolutionStep`             | Yes      | -       | The evolution step to render, along with its descendants               |
| `variant`         | `string`                    | Yes      | -       | The sprite variant to prefer, matching the game's slug                 |

## Computations

- `sprite` — `step`'s sprite for the given `variant`, resolved via
  `PokemonHelpers`
- `isCurrent` — whether `step` matches `currentName`, used to highlight
  the selected Pokemon within the line

## Handlers

- `handleNodeClick` — calls `onSelectSpecies` with this step's species
  name

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, used to highlight
  the currently selected Pokemon's node; expected to be set by a parent
