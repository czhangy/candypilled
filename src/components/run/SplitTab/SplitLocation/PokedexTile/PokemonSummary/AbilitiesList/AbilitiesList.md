# AbilitiesList

A list of a Pokémon's abilities. When interactive, each entry is a
clickable button linking to that ability's details; otherwise entries
are static, unclickable text. The hidden ability (if any) is shown
dimmer and suffixed with "(Hidden)".

## Props

| Prop              | Type                     | Required | Default | Description                                                                                |
| ----------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------ |
| `entries`         | `AbilityEntry[]`         | Yes      | -       | The abilities to display, with the hidden one flagged                                      |
| `interactive`     | `boolean`                | Yes      | -       | Whether entries render as clickable buttons or static text                                 |
| `onSelectAbility` | `(name: string) => void` | Yes      | -       | Called with an ability's title-cased name when clicked (only reachable when `interactive`) |

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used on hover for clickable (non-hidden) abilities
