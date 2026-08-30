# MoveDetail

Displays details for a single move: its name, flavor text description, a
row of stats (type badge, category icon, power, accuracy, PP, and
priority), its effect text (with its effect chance appended, if any), and,
for a game whose data is a vanilla-plus-overrides diff, a list of how the
move differs from vanilla, with each changed value colored pink and each
row's label styled like the section headers elsewhere in this panel
(e.g. "Type" above). The priority stat is omitted entirely for moves
with priority 0, and shown
with a leading "+" for positive priority. A Type change renders as a
before/after pair of type badges rather than plain text, matching the
type badge shown in the stats row above it. The content area scrolls
internally past a fixed maximum height rather than growing the page.

## Props

| Prop         | Type             | Required | Default | Description                                              |
| ------------ | ---------------- | -------- | ------- | -------------------------------------------------------- |
| `dataSource` | `GameDataSource` | Yes      | -       | The game's move dataset, used to resolve the move's data |
| `generation` | `number`         | Yes      | -       | The game's generation, used to resolve the move's values |
| `moveSlug`   | `string`         | Yes      | -       | The selected move's slug                                 |

## Computations

- `moveData` — the selected move's data, resolved via `MoveHelpers`
- `values` — the selected move's values at `generation` (type, power,
  accuracy, PP, effect, effect chance, description), resolved via
  `MoveHelpers`
- `changes` — how the move differs from vanilla at `generation` (type,
  power, accuracy, PP, category, priority, effect chance), resolved via
  `MoveHelpers`; undefined for a game whose moves aren't overridden, a
  move with no overridden differences, or a move backported from a later
  generation rather than rebalanced (nothing to diff field by field)
