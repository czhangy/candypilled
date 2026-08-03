# BattleNotesModal

A modal for writing a free-text note about a battle, opened from
`BattleCard`'s edit icon. Loads any note already saved for the battle
into a textarea on open, and persists it to local storage, keyed by
the battle and the current game, when "Save" is clicked.

## Props

| Prop              | Type         | Required | Default | Description                                                         |
| ----------------- | ------------ | -------- | ------- | ------------------------------------------------------------------- |
| `accentColor`     | `string`     | Yes      | -       | The game's accent color, forwarded to `Modal`                       |
| `battleKey`       | `string`     | Yes      | -       | The battle's key, used to read and save its note via `NotesHelpers` |
| `buttonTextColor` | `string`     | No       | -       | The game's button text contrast color, forwarded to `Modal`         |
| `game`            | `Game`       | Yes      | -       | The current game; notes are stored per-game via `NotesHelpers`      |
| `onClose`         | `() => void` | Yes      | -       | Called when the modal requests to close                             |

## State

| State  | Type     | Initial value                           | Description                     |
| ------ | -------- | --------------------------------------- | ------------------------------- |
| `note` | `string` | `NotesHelpers.getNote(game, battleKey)` | The textarea's current contents |

## Handlers

- **On textarea change** — updates `note`
- **On Save click** — persists `note` via `NotesHelpers.saveNote` and
  requests the modal close
