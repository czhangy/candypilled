# Tabs

A horizontal row of labeled, center-aligned tabs where one tab is active at a
time, indicated by an underline in the game's accent color that slides to the
newly active tab when selection changes.

## Props

| Prop          | Type                                                           | Required | Default | Description                                                                                                                      |
| ------------- | -------------------------------------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `tabs`        | `{ id: string; label: React.ReactNode; ariaLabel?: string }[]` | Yes      | -       | The tabs to render, in order                                                                                                     |
| `activeTab`   | `string`                                                       | Yes      | -       | The `id` of the currently active tab                                                                                             |
| `onTabChange` | `(id: string) => void`                                         | Yes      | -       | Called with a tab's `id` when it is clicked                                                                                      |
| `className`   | `string`                                                       | No       | -       | Additional class applied to the root element, for parent-controlled positioning (e.g. overriding the default centered alignment) |

## State

| State       | Type                              | Initial value           | Description                                                      |
| ----------- | --------------------------------- | ----------------------- | ---------------------------------------------------------------- |
| `underline` | `{ left: number; width: number }` | `{ left: 0, width: 0 }` | Pixel position and width of the underline beneath the active tab |

## Effects

- **On active tab change (and window resize)** — measures the active tab
  button's offset and width, updating the underline's position so it slides
  to match

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be set by
  a parent
