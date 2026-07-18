# AddPokemonModal

A modal form for recording the details of a Pokemon as it's caught.
Wraps `Modal` and `PokemonForm`, which does the bulk of the work, adding
an optional freeform Location field above it for callers that don't
already know where the Pokemon was caught. When shown, submitting is
disabled while the entered location matches one already in use, and
hovering the disabled submit button shows a tooltip explaining why.

## Props

| Prop                | Type                                                                                                                                          | Required | Default | Description                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------ |
| `accentColor`       | `string`                                                                                                                                      | No       | -       | The game's accent color, forwarded to `Modal`                                                    |
| `allSpecies`        | `string[]`                                                                                                                                    | Yes      | -       | Every catchable species name, offered in the Pokemon dropdown                                    |
| `buttonTextColor`   | `string`                                                                                                                                      | No       | -       | The game's button text contrast color, forwarded to `Modal`                                      |
| `defaultLevel`      | `number`                                                                                                                                      | No       | -       | The level the Level field defaults to, e.g. the encounter's minimum level                        |
| `defaultLocation`   | `string`                                                                                                                                      | Yes      | -       | The value the Location field defaults to, when `showLocation`                                    |
| `defaultSpecies`    | `string`                                                                                                                                      | Yes      | -       | The species the Pokemon dropdown defaults to                                                     |
| `existingLocations` | `string[]`                                                                                                                                    | Yes      | -       | Locations already in use, checked against the entered location when `showLocation`               |
| `generation`        | `number`                                                                                                                                      | Yes      | -       | The game's generation, used to resolve the selected species' abilities                           |
| `onClose`           | `() => void`                                                                                                                                  | Yes      | -       | Called when the modal requests to close                                                          |
| `onSubmit`          | `(details: Pick<CaughtPokemon, 'ability' \| 'evs' \| 'ivs' \| 'level' \| 'moves' \| 'name' \| 'nature' \| 'tags'>, location: string) => void` | Yes      | -       | Called with the selected details and the location field's value when the form is submitted       |
| `showLocation`      | `boolean`                                                                                                                                     | Yes      | -       | Whether to show the Location field, letting the user freeform enter where the Pokemon was caught |
| `version`           | `string`                                                                                                                                      | Yes      | -       | The game's PokeAPI version group slug, used to resolve the selected species' learnset            |

## State

| State      | Type     | Initial value     | Description                              |
| ---------- | -------- | ----------------- | ---------------------------------------- |
| `location` | `string` | `defaultLocation` | The freeform value of the Location field |

## Computations

- `isDuplicateCaughtLocation` — whether `location` matches an entry in
  `existingLocations`, when `showLocation`
- `disabledReason` — the tooltip text for `PokemonForm`'s submit button
  when `isDuplicateCaughtLocation` is true; an empty string (and the
  button enabled) otherwise

## Handlers

- **On the Location input change** — sets `location`
- **On `PokemonForm` submit** — calls `onSubmit` with the submitted
  details and `location`
