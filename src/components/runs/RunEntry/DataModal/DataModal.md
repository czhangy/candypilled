# DataModal

A modal offering data management actions for a single game's stored run,
organized into tabs. Always shows an "Import" tab, and additionally
shows a "Reset" tab once a run already exists for the game. "Import"
lets a `.sav` file be parsed without leaving the modal — merged into an
existing run, or used to create a new one when none exists yet — and
"Reset" shows a description of what the action does and a red confirm
button.

## Props

| Prop              | Type                                                            | Required | Default | Description                                                                           |
| ----------------- | --------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| `game`            | `Game`                                                          | Yes      | -       | The game whose data is being managed; shown in copy and passed to `ImportSaveForm`    |
| `accentColor`     | `string`                                                        | Yes      | -       | The game's accent color, used for the modal's chrome                                  |
| `buttonTextColor` | `string`                                                        | No       | -       | The text color for the modal's chrome                                                 |
| `hasExistingRun`  | `boolean`                                                       | Yes      | -       | Whether the game already has stored run data; controls whether the Reset tab is shown |
| `onImport`        | `(pokemon: CaughtPokemon[], completedSplits: string[]) => void` | Yes      | -       | Called with the parsed Pokémon and completed split names after a successful import    |
| `onReset`         | `() => void`                                                    | Yes      | -       | Called when the Reset tab's confirm button is clicked                                 |
| `onClose`         | `() => void`                                                    | Yes      | -       | Called once the modal's exit animation finishes                                       |

## State

| State       | Type                  | Initial value | Description                     |
| ----------- | --------------------- | ------------- | ------------------------------- |
| `activeTab` | `'import' \| 'reset'` | `'import'`    | The currently selected data tab |

## Handlers

- **On tab change** — switches the active tab
- **On Cancel click (Reset tab)** — requests the modal's animated close
  without resetting anything
- **On confirm click (Reset tab)** — calls `onReset`, then requests the
  modal's animated close, which calls `onClose` once the exit animation
  finishes
- **On successful import (Import tab)** — `ImportSaveForm` calls
  `onImport` with the parsed data and requests the modal's animated
  close
