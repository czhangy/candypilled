# AbilitiesList

A list of a Pokémon's abilities. When interactive, each entry is a
clickable button linking to that ability's details; otherwise entries
are static, unclickable text. The hidden ability (if any) is shown
dimmer and suffixed with "(Hidden)".

## Props

| Prop              | Type                     | Required | Default | Description                                                                    |
| ----------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `dataSource`      | `GameDataSource`         | Yes      | -       | The game's ability dataset, used to resolve ability names                      |
| `entries`         | `AbilityEntry[]`         | Yes      | -       | The abilities to display, with the hidden one flagged                          |
| `interactive`     | `boolean`                | Yes      | -       | Whether entries render as clickable buttons or static text                     |
| `onSelectAbility` | `(slug: string) => void` | Yes      | -       | Called with an ability's slug when clicked (only reachable when `interactive`) |

## Computations

- Each entry's display name is resolved via `AbilityHelpers.getAbilityData(dataSource, entry.slug)?.name`,
  falling back to the slug if the ability isn't found

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used on hover for clickable (non-hidden) abilities
