# BattleCard

Displays details for the trainer currently selected on the location map,
under a "Battle" label matching `LocationMap`'s header style. Lays out a
trainer name header above a portrait and a row of Pokemon team slots, each
reserving space for a sprite above its level, name, nature/ability, held
item, and moveset. The bottom
third of the portrait is carved out for the trainer's held items (e.g.
"1x Potion"). Team and item data are currently placeholder content;
wiring up real Pokemon and item data is future work.

## Props

| Prop      | Type      | Required | Default | Description                    |
| --------- | --------- | -------- | ------- | ------------------------------ |
| `trainer` | `Trainer` | Yes      | -       | The currently selected trainer |
