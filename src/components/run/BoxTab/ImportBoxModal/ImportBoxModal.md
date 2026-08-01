# ImportBoxModal

A modal for uploading a set of box files and merging them into the box
by catch location: a Pokémon imported for
a location already in the box replaces the one recorded there, and a
Pokémon imported for a new location is added alongside the existing
ones. A hint above the file picker links to PKHeX and explains how to
export a box file from its box view; the names of the currently
selected files are listed below the picker.

## Props

| Prop              | Type                                 | Required | Default | Description                                                 |
| ----------------- | ------------------------------------ | -------- | ------- | ----------------------------------------------------------- |
| `accentColor`     | `string`                             | No       | -       | The game's accent color, forwarded to `Modal`               |
| `buttonTextColor` | `string`                             | No       | -       | The game's button text contrast color, forwarded to `Modal` |
| `game`            | `Game`                               | Yes      | -       | The current game; its name is shown in the failure message  |
| `onClose`         | `() => void`                         | Yes      | -       | Called when the modal requests to close                     |
| `onSubmit`        | `(pokemon: CaughtPokemon[]) => void` | Yes      | -       | Never called; box import is not currently supported         |

## State

| State         | Type               | Initial value | Description                                                |
| ------------- | ------------------ | ------------- | ---------------------------------------------------------- |
| `files`       | `File[]`           | `[]`          | The box files currently selected                           |
| `errors`      | `BoxImportError[]` | `[]`          | Failures from the most recent submit                       |
| `isImporting` | `boolean`          | `false`       | Whether parsing is in progress; disables the submit button |

## Handlers

- **On file input change** — sets `files` to the selected files
- **On submit** — sets `errors` to one "not currently supported"
  message per selected file; the modal stays open, since importing
  never succeeds
