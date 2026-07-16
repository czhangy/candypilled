# EditPokemonModal

A modal form for editing the recorded details of a caught Pokemon. Thin
wrapper around `Modal` and `PokemonForm`, which does the actual work.
Unlike `AddPokemonModal`, the species field is locked and EVs are
editable alongside the rest of the Pokemon's details.

## Props

| Prop          | Type                                                                                                              | Required | Default | Description                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | -------- | ------- | --------------------------------------------------------------------------- |
| `accentColor` | `string`                                                                                                          | Yes      | -       | The game's accent color, forwarded to `Modal`                               |
| `generation`  | `number`                                                                                                          | Yes      | -       | The game's generation, used to resolve the Pokemon's abilities and learnset |
| `onClose`     | `() => void`                                                                                                      | Yes      | -       | Called when the modal requests to close                                     |
| `onSubmit`    | `(details: Pick<BattlePokemon, 'ability' \| 'evs' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature'>) => void` | Yes      | -       | Called with the edited details when the form is submitted                   |
| `pokemon`     | `CaughtPokemon`                                                                                                   | Yes      | -       | The caught Pokemon being edited, used to prefill the form                   |

## Computations

- `defaultMoves` — `pokemon.moves` padded to four entries so every move
  slot in `PokemonForm` has an initial value
