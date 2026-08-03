# ItemPickerModal

A modal for choosing a Pokémon's held item, including a "None" option
to clear it, via a searchable list.

## Props

| Prop           | Type                                  | Required | Default | Description                                                      |
| -------------- | ------------------------------------- | -------- | ------- | ---------------------------------------------------------------- |
| `generation`   | `number`                              | Yes      | -       | The game's generation, used to filter which items are selectable |
| `selectedItem` | `string`                              | No       | -       | The currently held item's slug, highlighted in the list          |
| `onClose`      | `() => void`                          | Yes      | -       | Called when the modal is dismissed without a selection           |
| `onSelect`     | `(slug: string \| undefined) => void` | Yes      | -       | Called with the chosen item's slug, or `undefined` for "None"    |

## Computations

- `availableItems` — every item introduced by `generation` and not yet
  removed, sorted alphabetically, with a "None" entry pinned first
