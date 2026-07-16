# Tooltip

Wraps a child element and shows a small text bubble above it on hover,
portaled to the document body so it isn't clipped by an ancestor's
`overflow` (e.g. the bordered, rounded `EncounterTable` wrapper).

## Props

| Prop       | Type                            | Required | Default | Description                                                 |
| ---------- | ------------------------------- | -------- | ------- | ----------------------------------------------------------- |
| `children` | `React.ReactNode`               | Yes      | -       | The element the tooltip is anchored to                      |
| `position` | `'center' \| 'left' \| 'right'` | Yes      | -       | Which edge of the trigger the tooltip bubble aligns against |
| `text`     | `string`                        | Yes      | -       | The text shown in the tooltip bubble                        |

## State

| State             | Type                      | Initial value | Description                                                              |
| ----------------- | ------------------------- | ------------- | ------------------------------------------------------------------------ |
| `bubblePlacement` | `BubblePlacement \| null` | `null`        | The portaled bubble's screen position, set on hover and cleared on leave |

## Handlers

- **On the trigger's mouse enter** — computes `bubblePlacement` from the
  trigger's bounding rect, offset above it and aligned per `position`
- **On the trigger's mouse leave** — clears `bubblePlacement`, unmounting
  the bubble
