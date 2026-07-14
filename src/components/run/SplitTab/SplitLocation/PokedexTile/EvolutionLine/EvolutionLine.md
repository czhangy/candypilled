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
vertical stack of continuations after the branching step. Renders
itself recursively for each step in the line.

## Props

| Prop          | Type            | Required | Default | Description                                                            |
| ------------- | --------------- | -------- | ------- | ---------------------------------------------------------------------- |
| `currentName` | `string`        | No       | -       | The currently selected species, highlighted if it appears in this step |
| `step`        | `EvolutionStep` | Yes      | -       | The evolution step to render, along with its descendants               |
| `variant`     | `string`        | Yes      | -       | The sprite variant to prefer, matching the game's slug                 |

## Computations

- `sprite` — `step`'s sprite for the given `variant`, resolved via
  `PokemonHelpers`
- `isCurrent` — whether `step` matches `currentName`, used to highlight
  the selected Pokemon within the line
