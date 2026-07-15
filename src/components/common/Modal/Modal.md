# Modal

A generic overlay dialog rendered above the rest of the page. Dims the
background, blocks page scroll while open, and closes on request via a
close button, an overlay click, or the Escape key.

## Props

| Prop       | Type              | Required | Default | Description                             |
| ---------- | ----------------- | -------- | ------- | --------------------------------------- |
| `children` | `React.ReactNode` | Yes      | -       | The modal's content                     |
| `onClose`  | `() => void`      | Yes      | -       | Called when the modal requests to close |
| `title`    | `string`          | No       | -       | Title text shown in the modal's header  |

## Effects

- **On mount** — sets `document.body`'s `overflow` to `hidden` to block page
  scroll, restoring the previous value on unmount
- **On mount** — listens for the Escape key and calls `onClose` when pressed
