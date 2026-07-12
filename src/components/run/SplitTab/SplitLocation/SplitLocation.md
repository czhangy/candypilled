# SplitLocation

A collapsible card for a single location within a split. The header is
always visible and toggles the collapsed content. The content is only
rendered when the location has a map; locations without one show no
expanded content.

## Props

| Prop       | Type       | Required | Default | Description                     |
| ---------- | ---------- | -------- | ------- | ------------------------------- |
| `location` | `Location` | Yes      | -       | The location this card displays |

## State

| State    | Type      | Initial value | Description                                |
| -------- | --------- | ------------- | ------------------------------------------ |
| `isOpen` | `boolean` | `false`       | Whether the location's content is expanded |

## Handlers

- **On header click** — toggles `isOpen`
