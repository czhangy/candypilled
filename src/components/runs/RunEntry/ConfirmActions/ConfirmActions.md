# ConfirmActions

A Cancel / confirm button pair used at the bottom of a modal to gate an
action behind an explicit confirmation step. The confirm button's color
reflects the nature of the action it triggers.

## Props

| Prop           | Type                        | Required | Default | Description                                                                                  |
| -------------- | --------------------------- | -------- | ------- | -------------------------------------------------------------------------------------------- |
| `confirmLabel` | `string`                    | Yes      | -       | The label of the confirm button                                                              |
| `variant`      | `'accent' \| 'destructive'` | Yes      | -       | `destructive` renders the confirm button red; `accent` renders it in the game's accent color |
| `onCancel`     | `() => void`                | Yes      | -       | Called when the Cancel button is clicked                                                     |
| `onConfirm`    | `() => void`                | Yes      | -       | Called when the confirm button is clicked                                                    |

## SCSS Variable Dependencies

- `--accent-color` — the game's accent color, used for the confirm button
  when `variant` is `accent`; expected to be set by the parent `Modal`
- `--button-text-color` — the confirm button's text color when `variant`
  is `accent`; expected to be set by the parent `Modal`
