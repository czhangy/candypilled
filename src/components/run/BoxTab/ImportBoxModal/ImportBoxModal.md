# ImportBoxModal

A modal for uploading a set of box files in `game`'s box import format
(e.g. Generation IV's `.pk4` party-format Pokémon exports, from PKHeX)
and merging them into the box by catch location: a Pokémon imported for
a location already in the box replaces the one recorded there, and a
Pokémon imported for a new location is added alongside the existing
ones. A hint above the file picker links to PKHeX and explains how to
export a box file from its box view; the names of the currently
selected files are listed below the picker.

## Props

| Prop              | Type                                 | Required | Default | Description                                                                                               |
| ----------------- | ------------------------------------ | -------- | ------- | --------------------------------------------------------------------------------------------------------- |
| `accentColor`     | `string`                             | No       | -       | The game's accent color, forwarded to `Modal`                                                             |
| `buttonTextColor` | `string`                             | No       | -       | The game's button text contrast color, forwarded to `Modal`                                               |
| `game`            | `Game`                               | Yes      | -       | The current game; supplies its generation, `boxImportFormat`, and `metLocationById` to `BoxImportHelpers` |
| `onClose`         | `() => void`                         | Yes      | -       | Called when the modal requests to close                                                                   |
| `onSubmit`        | `(pokemon: CaughtPokemon[]) => void` | Yes      | -       | Called with the parsed Pokémon (one per uploaded file) when the import succeeds                           |

## State

| State         | Type               | Initial value | Description                                                |
| ------------- | ------------------ | ------------- | ---------------------------------------------------------- |
| `files`       | `File[]`           | `[]`          | The box files currently selected                           |
| `errors`      | `BoxImportError[]` | `[]`          | Parse failures from the most recent submit, if any         |
| `isImporting` | `boolean`          | `false`       | Whether parsing is in progress; disables the submit button |

## Computations

- The file input's `accept` filter and the hint text's displayed
  extension both come from `BoxImportHelpers.getFileExtension(game)`,
  so they follow whichever format `game.boxImportFormat` resolves to

## Handlers

- **On file input change** — sets `files` to the selected files
- **On submit** — parses `files` via `BoxImportHelpers.parseFiles`, which
  dispatches each file to the `BoxFileParser` registered for
  `game.boxImportFormat`; if any file fails to parse or resolve, shows
  every collected error and leaves the modal open instead of importing
  anything; otherwise clears any previous errors, calls `onSubmit` with
  the parsed Pokémon, and requests `Modal`'s animated close
