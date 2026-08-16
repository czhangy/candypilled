# AbilityDetail

Displays details for a single ability: its name and effect text. The
content area scrolls internally past a fixed maximum height rather than
growing the page, with a styled scrollbar matching the rest of the app.

## Props

| Prop          | Type             | Required | Default | Description                                                    |
| ------------- | ---------------- | -------- | ------- | -------------------------------------------------------------- |
| `abilitySlug` | `string`         | Yes      | -       | The selected ability's slug                                    |
| `dataSource`  | `GameDataSource` | Yes      | -       | The game's ability dataset, used to resolve the ability's data |
| `generation`  | `number`         | Yes      | -       | The game's generation, used to resolve the ability's values    |

## Computations

- `abilityData` — the selected ability's data, resolved via `AbilityHelpers`
- `values` — the selected ability's values at `generation` (effect text),
  resolved via `AbilityHelpers`
- `renderEffect` — splits the effect text on the literal string
  "Overworld:", wrapping each match in a span colored `$foreground` so it
  stands out from the surrounding `$text-mid` effect text
