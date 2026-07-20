# DataModal

A modal offering data management actions for a single game's stored run,
organized into "Import", "Export", and "Reset" tabs (the latter two only
shown when a run already exists for the game). Each tab shows a
description of what its action does and a confirm button colored to match
— the game's accent color for Import/Export, red for the destructive
Reset — so any action can be triggered without leaving the modal.

## Props

| Prop              | Type                 | Required | Default | Description                                                                                                                            |
| ----------------- | -------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `gameName`        | `string`             | Yes      | -       | The game's display name, shown in the title and tab descriptions                                                                       |
| `accentColor`     | `string`             | Yes      | -       | The game's accent color, used for the Import/Export confirm button                                                                     |
| `buttonTextColor` | `string`             | No       | -       | The text color for the Import/Export confirm button                                                                                    |
| `hasExistingRun`  | `boolean`            | Yes      | -       | Whether the game already has stored run data; controls whether the Export and Reset tabs are shown, and which tab is active by default |
| `onExport`        | `() => void`         | Yes      | -       | Called when the Export tab's confirm button is clicked                                                                                 |
| `onImport`        | `(run: Run) => void` | Yes      | -       | Called with the parsed run once an uploaded file passes validation                                                                     |
| `onReset`         | `() => void`         | Yes      | -       | Called when the Reset tab's confirm button is clicked                                                                                  |
| `onClose`         | `() => void`         | Yes      | -       | Called once the modal's exit animation finishes                                                                                        |

## State

| State         | Type                              | Initial value                                   | Description                                                            |
| ------------- | --------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------- |
| `activeTab`   | `'export' \| 'import' \| 'reset'` | `'export'` if `hasExistingRun`, else `'import'` | The currently selected data tab                                        |
| `importError` | `string \| null`                  | `null`                                          | The validation error message for the last selected import file, if any |

## Handlers

- **On tab change** — switches the active tab, updating the description
  and confirm button shown below, and clears any `importError`
- **On Cancel click** — requests the modal's animated close without
  exporting, importing, or resetting anything
- **On confirm click (Import tab)** — opens the browser's file picker;
  does not itself modify any data
- **On confirm click (Export/Reset tab)** — calls `onExport` or `onReset`,
  then requests the modal's animated close, which calls `onClose` once
  the exit animation finishes
- **On file selected** — reads the file as text and attempts to
  `JSON.parse` it, then checks the parsed value's shape against the
  expected `Run` structure (required fields present with the correct
  primitive types, `caughtPokemon` entries individually validated); on
  failure, sets `importError` to a message describing what went wrong and
  leaves the modal open; on success, calls `onImport` with the parsed run
  and requests the modal's animated close
