# AddPokemonModal

A modal form for recording the details of a Pokémon as it's caught,
including tags. Wraps `Modal` and `PokemonForm`, which does the bulk of
the work, adding an optional Location dropdown above it for callers that
don't already know where the Pokémon was caught. When shown, submitting
is disabled until a location is selected, and hovering the disabled
submit button shows a tooltip explaining why.

## Props

| Prop                | Type                                                                                                                                                      | Required | Default | Description                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------ |
| `accentColor`       | `string`                                                                                                                                                  | No       | -       | The game's accent color, forwarded to `Modal`                                                    |
| `allLocations`      | `string[]`                                                                                                                                                | Yes      | -       | Every name in the game's `metLocationById`, offered in the Location dropdown when `showLocation` |
| `allSpecies`        | `PokemonData[]`                                                                                                                                           | Yes      | -       | Every catchable species, offered in the Pokémon dropdown                                         |
| `buttonTextColor`   | `string`                                                                                                                                                  | No       | -       | The game's button text contrast color, forwarded to `Modal`                                      |
| `defaultLevel`      | `number`                                                                                                                                                  | No       | -       | The level the Level field defaults to, e.g. the encounter's minimum level                        |
| `defaultLocation`   | `string`                                                                                                                                                  | Yes      | -       | The value the Location field defaults to, when `showLocation`                                    |
| `defaultSpecies`    | `string`                                                                                                                                                  | Yes      | -       | The species slug the Pokémon dropdown defaults to                                                |
| `existingLocations` | `string[]`                                                                                                                                                | Yes      | -       | Locations whose encounter is already used, excluded from the Location dropdown's options         |
| `generation`        | `number`                                                                                                                                                  | Yes      | -       | The game's generation, used to resolve the selected species' abilities                           |
| `onClose`           | `() => void`                                                                                                                                              | Yes      | -       | Called when the modal requests to close                                                          |
| `onSubmit`          | `(details: Pick<CaughtPokemon, 'ability' \| 'evs' \| 'gender' \| 'ivs' \| 'level' \| 'moves' \| 'nature' \| 'slug' \| 'tags'>, location: string) => void` | Yes      | -       | Called with the selected details and the location field's value when the form is submitted       |
| `showLocation`      | `boolean`                                                                                                                                                 | Yes      | -       | Whether to show the Location dropdown, letting the user pick where the Pokémon was caught        |
| `version`           | `string`                                                                                                                                                  | Yes      | -       | The game's PokeAPI version group slug, used to resolve the selected species' learnset            |

## State

| State      | Type     | Initial value     | Description                                      |
| ---------- | -------- | ----------------- | ------------------------------------------------ |
| `location` | `string` | `defaultLocation` | The Location dropdown's currently selected value |

## Computations

- `locationOptions` — `allLocations` filtered to exclude anything in
  `existingLocations`, sorted alphabetically, offered to the Location
  dropdown
- `disabledReason` — the tooltip text for `PokemonForm`'s submit button
  when `showLocation` is true and no location has been selected yet; an
  empty string (and the button enabled) otherwise

## Handlers

- **On the Location dropdown change** — sets `location`
- **On `PokemonForm` submit** — calls `onSubmit` with the submitted
  details and `location`, then requests `Modal`'s animated close so
  submitting plays the same exit animation as its other close
  affordances
