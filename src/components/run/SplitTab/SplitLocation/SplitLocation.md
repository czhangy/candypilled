# SplitLocation

A collapsible card for a single location within a split. The header is
always visible and toggles the collapsed content, which shows the
location's map when one is available, and will eventually also hold
trainers and an encounter table for that location.

## Props

| Prop       | Type       | Required | Default | Description                     |
| ---------- | ---------- | -------- | ------- | ------------------------------- |
| `location` | `Location` | Yes      | -       | The location this card displays |

## State

| State    | Type      | Initial value | Description                                |
| -------- | --------- | ------------- | ------------------------------------------ |
| `isOpen` | `boolean` | `true`        | Whether the location's content is expanded |

## Handlers

- **On header click** — toggles `isOpen`
