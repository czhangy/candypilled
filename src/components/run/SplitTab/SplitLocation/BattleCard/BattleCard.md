# BattleCard

Displays details for the battle currently selected on the location map,
under a "Battle" label matching `LocationMap`'s header style. Lays out a
trainer name header above a portrait and a row of Pokemon team slots, each
reserving space for a sprite above its level, name, nature/ability, held
item, and moveset. The bottom third of the portrait is carved out for the
trainer's held items (e.g. "2x Potion").

## Props

| Prop     | Type     | Required | Default | Description                   |
| -------- | -------- | -------- | ------- | ----------------------------- |
| `battle` | `Battle` | Yes      | -       | The currently selected battle |
