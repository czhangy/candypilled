# SettingsPage

The page for `/settings`. Lists global toggles that apply across every
run, each shown with a title and description alongside a switch.

## Computations

- `values` — the known settings' current values, read from
  `localStorage` (keyed by each setting's id) via `SettingsHelpers`.
  Settings without stored data default to `false`.

## Handlers

- **On a setting's toggle change** — persists the new value via
  `SettingsHelpers.saveSetting`
