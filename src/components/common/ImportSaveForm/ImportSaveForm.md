# ImportSaveForm

A form for uploading a `.sav` file and merging its party/PC box Pokémon
and finished splits into a run: a Pokémon imported for a location
already in the box replaces the one recorded there (unless that
location is marked dead, which is never overwritten), and a Pokémon
imported for a new location is added alongside the existing ones;
every split the save can resolve has its completion state set to
exactly what the save reports. Meant to be rendered inside a `Modal`,
which supplies `requestClose`.

## Props

| Prop           | Type                                                            | Required | Default | Description                                                                        |
| -------------- | --------------------------------------------------------------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| `game`         | `Game`                                                          | Yes      | -       | The current game; passed to `SaveFileParser` and shown in copy                     |
| `onImport`     | `(pokemon: CaughtPokemon[], completedSplits: string[]) => void` | Yes      | -       | Called with the parsed Pokémon and completed split names after a successful import |
| `requestClose` | `() => void`                                                    | Yes      | -       | Called after a successful import to close the enclosing modal                      |

## State

| State         | Type                | Initial value | Description                                                |
| ------------- | ------------------- | ------------- | ---------------------------------------------------------- |
| `file`        | `File \| null`      | `null`        | The selected save file                                     |
| `errors`      | `SaveImportError[]` | `[]`          | Failures from the most recent submit                       |
| `isImporting` | `boolean`           | `false`       | Whether parsing is in progress; disables the submit button |

## Handlers

- **On file input change** — sets `file` to the selected file
- **On submit** — reads `file` as an `ArrayBuffer`, parses it via
  `SaveFileParser.parse`, calls `onImport` with the resulting Pokémon
  and completed split names, then calls `requestClose`; a parse
  failure is shown as a single error instead and the form stays open

## SCSS Variable Dependencies

- `--accent-color` — used for the file input's button and link colors,
  expected to be set by the enclosing `Modal`
- `--button-text-color` — used for the file input button's text color,
  expected to be set by the enclosing `Modal`
