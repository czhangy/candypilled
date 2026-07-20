# StarterSelect

A vertical list of buttons for choosing a starter Pokémon at the beginning
of a run, one per option offered by the game. Each button renders
the starter's sprite matching the game's variant, falling back to any other
synced sprite (or the starter's name) if that variant hasn't been synced.
The currently selected starter is highlighted in the game's accent color.

## Props

| Prop       | Type                        | Required | Default | Description                                            |
| ---------- | --------------------------- | -------- | ------- | ------------------------------------------------------ |
| `starters` | `string[]`                  | Yes      | -       | The starter names to render as buttons                 |
| `selected` | `string \| null`            | Yes      | -       | The currently selected starter, if any                 |
| `onSelect` | `(starter: string) => void` | Yes      | -       | Called with a starter's name when it's clicked         |
| `variant`  | `string`                    | Yes      | -       | The sprite variant to prefer, matching the game's slug |

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, set by `Modal`
