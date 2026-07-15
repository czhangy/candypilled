# AbilityDetail

Displays details for a single ability: its name and effect text. If no
ability is selected, a placeholder message is shown instead. The content
area scrolls internally past a fixed maximum height rather than growing
the page.

## Props

| Prop         | Type     | Required | Default | Description                                                 |
| ------------ | -------- | -------- | ------- | ----------------------------------------------------------- |
| `ability`    | `string` | No       | -       | The selected ability's name, if any                         |
| `generation` | `number` | Yes      | -       | The game's generation, used to resolve the ability's values |

## Computations

- `abilityData` — the selected ability's data, resolved via `AbilityHelpers`
- `values` — the selected ability's values at `generation` (effect text),
  resolved via `AbilityHelpers`
- `renderEffect` — splits the effect text on the literal string
  "Overworld:", wrapping each match in a span colored `$foreground` so it
  stands out from the surrounding `$text-mid` effect text
