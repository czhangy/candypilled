# Modal

A generic overlay dialog rendered above the rest of the page. Dims the
background, blocks page scroll while open, and requests to close via a
close button, an overlay click, or the Escape key, playing a fade/scale-out
animation (mirroring the fade/scale-in played on mount) before calling
`onClose`. Both animations are skipped, closing immediately, when the user
prefers reduced motion. The header stays fixed in place while its content
area scrolls independently when taller than the modal.

## Props

| Prop          | Type              | Required | Default | Description                                                                                                               |
| ------------- | ----------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `accentColor` | `string`          | No       | -       | Sets `--accent-color` on the modal's portaled root, since it renders outside any ancestor that would otherwise provide it |
| `children`    | `React.ReactNode` | Yes      | -       | The modal's content                                                                                                       |
| `maxWidth`    | `string`          | No       | `32rem` | Overrides the modal's max width, for content wider than the default                                                       |
| `onClose`     | `() => void`      | Yes      | -       | Called once the close request (and its exit animation, if any) has finished                                               |
| `title`       | `string`          | No       | -       | Title text shown in the modal's header                                                                                    |

## State

| State       | Type      | Initial value | Description                                                             |
| ----------- | --------- | ------------- | ----------------------------------------------------------------------- |
| `isClosing` | `boolean` | `false`       | Whether the exit animation is playing; `onClose` fires when it finishes |

## Computations

- `requestClose` — under reduced motion, calls `onClose` immediately;
  otherwise sets `isClosing` so the exit animation plays before `onClose`
  fires

## Effects

- **On mount** — sets `document.body`'s `overflow` to `hidden` to block page
  scroll, restoring the previous value on unmount
- **On mount** — listens for the Escape key and calls `requestClose` when
  pressed

## Handlers

- **On overlay click, or the close button click** — calls `requestClose`
- **On the exit animation ending** — calls `onClose`, if `isClosing`
