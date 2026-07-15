# Modal

A generic overlay dialog rendered above the rest of the page. Dims the
background, blocks page scroll while open, and closes on request via a
close button, an overlay click, or the Escape key. The header stays fixed
in place while its content area scrolls independently when taller than the
modal.

## Props

| Prop          | Type              | Required | Default | Description                                                                                                               |
| ------------- | ----------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `accentColor` | `string`          | No       | -       | Sets `--accent-color` on the modal's portaled root, since it renders outside any ancestor that would otherwise provide it |
| `children`    | `React.ReactNode` | Yes      | -       | The modal's content                                                                                                       |
| `maxWidth`    | `string`          | No       | `32rem` | Overrides the modal's max width, for content wider than the default                                                       |
| `onClose`     | `() => void`      | Yes      | -       | Called when the modal requests to close                                                                                   |
| `title`       | `string`          | No       | -       | Title text shown in the modal's header                                                                                    |

## Effects

- **On mount** — sets `document.body`'s `overflow` to `hidden` to block page
  scroll, restoring the previous value on unmount
- **On mount** — listens for the Escape key and calls `onClose` when pressed
