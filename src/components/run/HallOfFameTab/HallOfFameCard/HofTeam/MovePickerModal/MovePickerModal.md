# MovePickerModal

A modal for choosing a replacement move for one of a Pokémon's
moveset slots, via a searchable list.

## Props

| Prop           | Type                     | Required | Default | Description                                                      |
| -------------- | ------------------------ | -------- | ------- | ---------------------------------------------------------------- |
| `generation`   | `number`                 | Yes      | -       | The game's generation, used to filter which moves are selectable |
| `selectedMove` | `string`                 | No       | -       | The move slug being replaced, highlighted in the list            |
| `onClose`      | `() => void`             | Yes      | -       | Called when the modal is dismissed without a selection           |
| `onSelect`     | `(slug: string) => void` | Yes      | -       | Called with the chosen move's slug                               |

## Computations

- `availableMoves` — every move introduced by `generation`, sorted
  alphabetically
