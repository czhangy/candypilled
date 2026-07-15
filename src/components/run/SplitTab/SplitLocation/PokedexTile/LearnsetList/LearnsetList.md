# LearnsetList

A scrollable list of a Pokemon's learnset, showing each move alongside how
it's learned (level-up, TM, egg, or tutor). Shows a "No moves found" message
when the list is empty.

## Props

| Prop    | Type             | Required | Default | Description                                     |
| ------- | ---------------- | -------- | ------- | ----------------------------------------------- |
| `moves` | `LearnsetMove[]` | Yes      | -       | The moves to list, in the order to display them |

## SCSS Variable Dependencies

- `--accent-color` — used to highlight the method label for level-up moves
