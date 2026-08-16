# ImportSaveModal

A modal for uploading a `.sav` file and merging its party/PC box
Pokémon and finished splits into the run: a Pokémon imported for a
location already in the box replaces the one recorded there (unless
that location is marked dead, which is never overwritten), and a
Pokémon imported for a new location is added alongside the existing
ones; every split the save can resolve has its completion state set to
exactly what the save reports.

## Props

| Prop              | Type                                                            | Required | Default | Description                                                                        |
| ----------------- | --------------------------------------------------------------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| `accentColor`     | `string`                                                        | No       | -       | The game's accent color, forwarded to `Modal`                                      |
| `buttonTextColor` | `string`                                                        | No       | -       | The game's button text contrast color, forwarded to `Modal`                        |
| `game`            | `Game`                                                          | Yes      | -       | The current game; passed to `SaveFileParser` and shown in copy                     |
| `onClose`         | `() => void`                                                    | Yes      | -       | Called when the modal requests to close                                            |
| `onSubmit`        | `(pokemon: CaughtPokemon[], completedSplits: string[]) => void` | Yes      | -       | Called with the parsed Pokémon and completed split names after a successful import |

## State

| State         | Type                | Initial value | Description                                                |
| ------------- | ------------------- | ------------- | ---------------------------------------------------------- |
| `file`        | `File \| null`      | `null`        | The selected save file                                     |
| `errors`      | `SaveImportError[]` | `[]`          | Failures from the most recent submit                       |
| `isImporting` | `boolean`           | `false`       | Whether parsing is in progress; disables the submit button |

## Handlers

- **On file input change** — sets `file` to the selected file
- **On submit** — reads `file` as an `ArrayBuffer`, parses it via
  `SaveFileParser.parse`, and calls `onSubmit` with the resulting
  Pokémon and completed split names before closing the modal; a parse
  failure is shown as a single error instead and the modal stays open
