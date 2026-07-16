# AddPokemonModal

A modal form for recording the details of a Pokemon as it's caught.
Wraps `Modal` and `PokemonForm`, which does the bulk of the work, adding
an optional freeform Location field above it for callers that don't
already know where the Pokemon was caught.

## Props

| Prop              | Type                                                                                                                                | Required | Default | Description                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------ |
| `accentColor`     | `string`                                                                                                                            | No       | -       | The game's accent color, forwarded to `Modal`                                                    |
| `allSpecies`      | `string[]`                                                                                                                          | Yes      | -       | Every catchable species name, offered in the Pokemon dropdown                                    |
| `defaultLevel`    | `number`                                                                                                                            | No       | -       | The level the Level field defaults to, e.g. the encounter's minimum level                        |
| `defaultLocation` | `string`                                                                                                                            | Yes      | -       | The value the Location field defaults to, when `showLocation`                                    |
| `defaultSpecies`  | `string`                                                                                                                            | Yes      | -       | The species the Pokemon dropdown defaults to                                                     |
| `generation`      | `number`                                                                                                                            | Yes      | -       | The game's generation, used to resolve the selected species' abilities and learnset              |
| `onClose`         | `() => void`                                                                                                                        | Yes      | -       | Called when the modal requests to close                                                          |
| `onSubmit`        | `(details: Pick<BattlePokemon, 'ability' \| 'evs' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature'>, location: string) => void` | Yes      | -       | Called with the selected details and the location field's value when the form is submitted       |
| `showLocation`    | `boolean`                                                                                                                           | Yes      | -       | Whether to show the Location field, letting the user freeform enter where the Pokemon was caught |

## State

| State      | Type     | Initial value     | Description                              |
| ---------- | -------- | ----------------- | ---------------------------------------- |
| `location` | `string` | `defaultLocation` | The freeform value of the Location field |

## Handlers

- **On the Location input change** — sets `location`
- **On `PokemonForm` submit** — calls `onSubmit` with the submitted
  details and `location`
