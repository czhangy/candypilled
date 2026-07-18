# PokemonSummary

The Pokedex tile's top section for a single Pokemon, split into a
left half showing its sprite, name, and type badges, and a right half
divided into an upper section (two-thirds height) listing its
abilities via `AbilitiesList` and a lower section (one-third height)
showing its catch rate. If no Pokemon is selected, a placeholder
message is shown instead, worded to match the parent tile's `mode`
("...view its details or catch it" / "...or choose it").

## Props

| Prop              | Type                     | Required | Default | Description                                                                                     |
| ----------------- | ------------------------ | -------- | ------- | ----------------------------------------------------------------------------------------------- |
| `abilityEntries`  | `AbilityEntry[]`         | Yes      | -       | The selected Pokemon's abilities, passed to `AbilitiesList`                                     |
| `catchRate`       | `number`                 | No       | -       | The selected Pokemon's catch rate; the catch rate section is hidden when unset                  |
| `mode`            | `'catch' \| 'choose'`    | Yes      | -       | Which parent mode is active, controlling `AbilitiesList`'s behavior and the placeholder wording |
| `onSelectAbility` | `(name: string) => void` | Yes      | -       | Forwarded to `AbilitiesList`, called when an ability is clicked                                 |
| `pokemon`         | `PokemonData`            | No       | -       | The selected Pokemon's data; when unset, the placeholder is shown instead                       |
| `sprite`          | `string`                 | No       | -       | The selected Pokemon's sprite, matching the game's sprite variant                               |
| `types`           | `string[]`               | Yes      | -       | The selected Pokemon's types, rendered as badges beneath its name                               |
