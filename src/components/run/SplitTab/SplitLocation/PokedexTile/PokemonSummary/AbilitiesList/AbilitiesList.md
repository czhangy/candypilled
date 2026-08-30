# AbilitiesList

A list of a Pokémon's abilities. When interactive, each entry is a
clickable button linking to that ability's details; otherwise entries
are static, unclickable text. The hidden ability (if any) is shown
dimmer and suffixed with "(Hidden)". An entry flagged `changed` (i.e.
that ability slot differs from vanilla for a game whose data is a
vanilla-plus-overrides diff) is colored pink instead — taking
precedence over both the hidden dimming and the hover accent color
when either would otherwise apply.

## Props

| Prop              | Type                     | Required | Default | Description                                                                    |
| ----------------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `entries`         | `AbilityEntry[]`         | Yes      | -       | The abilities to display, with the hidden and changed ones flagged             |
| `interactive`     | `boolean`                | Yes      | -       | Whether entries render as clickable buttons or static text                     |
| `onSelectAbility` | `(slug: string) => void` | Yes      | -       | Called with an ability's slug when clicked (only reachable when `interactive`) |

## Computations

- Each entry's display name is resolved via `AbilityHelpers.getAbilityData(entry.slug)?.name`,
  falling back to the slug if the ability isn't found

## SCSS Variable Dependencies

- `--accent-color` — the active game's accent color, expected to be
  set by a parent; used on hover for clickable, non-hidden, non-changed
  abilities
