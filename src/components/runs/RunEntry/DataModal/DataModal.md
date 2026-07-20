# DataModal

A modal offering data management actions for a single game's stored run,
organized into an "Export" tab and a "Reset" tab. Each tab shows a
description of what its action does and a confirm button colored to match
— the game's accent color for Export, red for the destructive Reset — so
either action can be triggered without leaving the modal.

## Props

| Prop              | Type         | Required | Default | Description                                                       |
| ----------------- | ------------ | -------- | ------- | ----------------------------------------------------------------- |
| `gameName`        | `string`     | Yes      | -       | The game's display name, shown in the title and tab descriptions  |
| `accentColor`     | `string`     | Yes      | -       | The game's accent color, used for the Export tab's confirm button |
| `buttonTextColor` | `string`     | No       | -       | The text color for the Export tab's confirm button                |
| `onExport`        | `() => void` | Yes      | -       | Called when the Export tab's confirm button is clicked            |
| `onReset`         | `() => void` | Yes      | -       | Called when the Reset tab's confirm button is clicked             |
| `onClose`         | `() => void` | Yes      | -       | Called once the modal's exit animation finishes                   |

## State

| State       | Type                  | Initial value | Description                     |
| ----------- | --------------------- | ------------- | ------------------------------- |
| `activeTab` | `'export' \| 'reset'` | `'export'`    | The currently selected data tab |

## Handlers

- **On tab change** — switches the active tab, updating the description
  and confirm button shown below
- **On Cancel click** — requests the modal's animated close without
  calling `onExport` or `onReset`
- **On confirm click** — calls `onExport` or `onReset` depending on the
  active tab, then requests the modal's animated close, which calls
  `onClose` once the exit animation finishes
