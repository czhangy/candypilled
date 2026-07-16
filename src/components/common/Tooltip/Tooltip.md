# Tooltip

Wraps a child element and shows a small text bubble above it on hover.

## Props

| Prop       | Type                            | Required | Default | Description                                                 |
| ---------- | ------------------------------- | -------- | ------- | ----------------------------------------------------------- |
| `children` | `React.ReactNode`               | Yes      | -       | The element the tooltip is anchored to                      |
| `position` | `'center' \| 'left' \| 'right'` | Yes      | -       | Which edge of the trigger the tooltip bubble aligns against |
| `text`     | `string`                        | Yes      | -       | The text shown in the tooltip bubble                        |
