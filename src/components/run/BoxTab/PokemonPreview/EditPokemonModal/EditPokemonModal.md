# EditPokemonModal

A modal form for editing the recorded details of a caught Pokemon. Thin
wrapper around `Modal` and `PokemonForm`, which does the actual work.
Unlike `AddPokemonModal`, the species field is locked, tags are
editable, and EVs are editable alongside the rest of the Pokemon's
details, unless the global "Hide EVs" setting is enabled, in which case
the EVs field is hidden (the Pokemon's existing EVs are still submitted
unchanged).

## Props

| Prop              | Type                                                                                                                        | Required | Default | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | --------------------------------------------------------------------------- |
| `accentColor`     | `string`                                                                                                                    | Yes      | -       | The game's accent color, forwarded to `Modal`                               |
| `buttonTextColor` | `string`                                                                                                                    | No       | -       | The game's button text contrast color, forwarded to `Modal`                 |
| `generation`      | `number`                                                                                                                    | Yes      | -       | The game's generation, used to resolve the Pokemon's abilities and learnset |
| `onClose`         | `() => void`                                                                                                                | Yes      | -       | Called when the modal requests to close                                     |
| `onSubmit`        | `(details: Pick<CaughtPokemon, 'ability' \| 'evs' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature' \| 'tags'>) => void` | Yes      | -       | Called with the edited details when the form is submitted                   |
| `pokemon`         | `CaughtPokemon`                                                                                                             | Yes      | -       | The caught Pokemon being edited, used to prefill the form                   |
| `version`         | `string`                                                                                                                    | Yes      | -       | The game's version, forwarded to `PokemonForm` for move-version filtering   |

## Computations

- `hideEvs` — the global "Hide EVs" setting's current value, read from
  `localStorage` via `SettingsHelpers`, forwarded to `PokemonForm` as
  `showEvs={!hideEvs}`
- `defaultMoves` — `pokemon.moves` padded to four entries so every move
  slot in `PokemonForm` has an initial value

## Handlers

- **On `PokemonForm` submit** — calls `onSubmit` with the submitted
  details, then requests `Modal`'s animated close so submitting plays
  the same exit animation as its other close affordances
