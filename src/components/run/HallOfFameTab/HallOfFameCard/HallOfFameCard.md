# HallOfFameCard

A card for building a Hall of Fame team: six slots that pick Pokémon from
the run's box, with a button to save the assembled team.

## Props

| Prop               | Type                              | Required | Default | Description                                        |
| ------------------ | --------------------------------- | -------- | ------- | -------------------------------------------------- |
| `availablePokemon` | `CaughtPokemon[]`                 | Yes      | -       | Pokémon eligible to be picked into a team slot     |
| `variant`          | `string`                          | Yes      | -       | Game slug used to resolve the correct sprite style |
| `onSave`           | `(team: CaughtPokemon[]) => void` | Yes      | -       | Called with the assembled team when saved          |

## State

| State             | Type                        | Initial value      | Description                                             |
| ----------------- | --------------------------- | ------------------ | ------------------------------------------------------- |
| `team`            | `(CaughtPokemon \| null)[]` | Six `null` entries | The Pokémon currently assigned to each of the six slots |
| `pickerSlotIndex` | `number \| null`            | `null`             | Which slot's picker modal is open, if any               |

## Computations

- `pickablePokemon` — `availablePokemon` minus whichever Pokémon are
  already assigned to another slot, so the same Pokémon can't be picked
  twice
- `canSave` — whether at least one slot is filled, gating the save button
