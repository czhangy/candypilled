# AbilitiesSubtab

The "Abilities" subtab of a run page's Data tab. Displays a
searchable, alphabetical list of every ability available in the game's
generation on the left and the currently selected ability's details on
the right, taking up roughly a quarter and three-quarters of the row's
width respectively.

## Props

| Prop              | Type                     | Required | Default | Description                                                                                                   |
| ----------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| `generation`      | `number`                 | Yes      | -       | The game's generation, used to resolve the selected ability's values and to filter which abilities are listed |
| `onSelectAbility` | `(name: string) => void` | Yes      | -       | Called with an ability's name when it's clicked in the list                                                   |
| `selectedAbility` | `string`                 | No       | -       | The currently selected ability's name, if any                                                                 |

## Computations

- `availableAbilities` — every ability introduced at or before `generation`,
  passed to `SearchableList`
