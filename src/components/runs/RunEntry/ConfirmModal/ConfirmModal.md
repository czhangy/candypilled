# ConfirmModal

A generic confirmation modal with a title, description, and a Cancel /
confirm button pair, used to gate destructive or overwriting actions
behind an explicit confirmation step.

## Props

| Prop              | Type                        | Required | Default | Description                                                                                       |
| ----------------- | --------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------- |
| `title`           | `string`                    | Yes      | -       | The modal's title                                                                                 |
| `description`     | `string`                    | Yes      | -       | The body text explaining the action's consequences                                                |
| `confirmLabel`    | `string`                    | Yes      | -       | The label of the confirm button                                                                   |
| `variant`         | `'accent' \| 'destructive'` | Yes      | -       | Controls the confirm button's color — `destructive` for red, `accent` for the game's accent color |
| `accentColor`     | `string`                    | No       | -       | The game's accent color, used for the confirm button when `variant` is `accent`                   |
| `buttonTextColor` | `string`                    | No       | -       | The text color for the confirm button when `variant` is `accent`                                  |
| `onConfirm`       | `() => void`                | Yes      | -       | Called when the confirm button is clicked, before the modal requests its close                    |
| `onClose`         | `() => void`                | Yes      | -       | Called once the modal's exit animation finishes                                                   |

## Handlers

- **On Cancel click** — requests the modal's animated close directly,
  without calling `onConfirm`
- **On confirm click** — calls `onConfirm`, then requests the modal's
  animated close, which calls `onClose` once the exit animation finishes
