# MovesTab

The "Moves" tab of a run page. Displays a searchable, alphabetical list of
every move available in the game's generation on the left and the currently
selected move's details on the right, taking up roughly a quarter and
three-quarters of the row's width respectively.

## Props

| Prop         | Type     | Required | Default | Description                                                                                            |
| ------------ | -------- | -------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `generation` | `number` | Yes      | -       | The game's generation, used to resolve the selected move's values and to filter which moves are listed |

## State

| State          | Type                  | Initial value | Description                           |
| -------------- | --------------------- | ------------- | ------------------------------------- |
| `selectedMove` | `string \| undefined` | `undefined`   | The name of the selected move, if any |

## Computations

- `availableMoves` — every move introduced at or before `generation`, passed
  to `MoveList`
