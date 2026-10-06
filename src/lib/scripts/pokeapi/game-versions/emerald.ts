import { EncounterMethod } from '@/lib/static/enums';
import { GameVersion } from '@/lib/static/types';

// Bootstrapped from ruby.ts/sapphire.ts — PokeAPI's Hoenn location set is
// shared across all three versions' region data, and Battle Frontier is
// explicitly out of scope for this game too (user's onboarding decision,
// same as Ruby/Sapphire). Verified the starter handoff
// (hoenn-route-101 -> treecko/torchic/mudkip, raw method "gift") is
// present and identically shaped for Emerald directly against PokeAPI
// before reusing the override below. Re-verify the rest of this list
// against the actual `npm run pokeapi:encounters emerald` output (its
// "No encounters" warnings) rather than assuming it's already complete —
// don't just trust it by inspection.
const EXCLUDED_LOCATIONS = [
    'magma-hideout',
    'mirage-tower',
    'desert-underpass',
    'artisan-cave',
    'hoenn-altering-cave',
    'littleroot-town',
    'oldale-town',
    'fallarbor-town',
    'verdanturf-town',
    'mauville-city',
    'underwater',
    'mt-chimney',
    'mirage-spot-island',
    'sealed-chamber',
    'scorched-slab',
    'inside-of-truck',
    'secret-base',
    'hoenn-battle-tower',
    'hoenn-pokemon-league',
    'sea-mauville',
    'battle-resort',
    'ss-tidal',
    'mirage-spot-forest',
    'mirage-spot-cave',
    'mirage-spot-mountain',
    'trackless-forest',
    'pathless-plain',
    'nameless-cavern',
    'fabled-cave',
    'gnarled-den',
    'crescent-isle',
    'secret-islet',
    'soaring-in-the-sky',
    'secret-shore',
    'secret-meadow',
    'terra-cave',
    'marine-cave',
    'faraway-island',
    'hoenn-battle-frontier',
    'mossdeep-space-center',
    'hoenn-pokemart',
    // Only carries GameCube bonus-disc/Pokemon Channel distribution
    // "encounters", not obtainable through normal gameplay.
    'hoenn-pokecenter',
    // Roaming Latios/Latias are post-game and, per this game's onboarding
    // decision, aren't modeled at all (not even via the Roamer mechanism).
    'roaming-hoenn',
];

// True underground/enclosed caves and ruins, as opposed to outdoor
// grass-route terrain — determines whether a 'walk' encounter resolves to
// EncounterMethod.Cave or EncounterMethod.Grass. Petalburg Woods and Mt.
// Pyre have real tall-grass encounters despite being indoor/wooded, so they
// default to Grass rather than being listed here.
const CAVE_LOCATIONS = [
    'meteor-falls',
    'rusturf-tunnel',
    'granite-cave',
    'fiery-path',
    'jagged-pass',
    'seafloor-cavern',
    'cave-of-origin',
    'hoenn-victory-road',
    'shoal-cave',
    'new-mauville',
    'sky-pillar',
];

export const emerald: GameVersion = {
    id: 'emerald',
    label: 'Emerald',
    version: 'emerald',
    region: 'hoenn',
    generation: 3,
    excludedLocations: EXCLUDED_LOCATIONS,
    // Steven's Beldum gift and the Safari Zone expansion aren't modeled.
    excludedAreas: [
        'mossdeep-city-stevens-house',
        'hoenn-safari-zone-expansion-south',
        'hoenn-safari-zone-expansion-north',
    ],
    caveLocations: CAVE_LOCATIONS,
    excludedMethods: [
        'roaming-grass',
        'roaming-water',
        'colosseum-bonus-disc-jpn',
        'colosseum-bonus-disc-us',
        'pokemon-channel-pal',
    ],
    methodOverrides: [
        {
            location: 'hoenn-route-101',
            species: 'treecko',
            method: EncounterMethod.Starter,
        },
        {
            location: 'hoenn-route-101',
            species: 'torchic',
            method: EncounterMethod.Starter,
        },
        {
            location: 'hoenn-route-101',
            species: 'mudkip',
            method: EncounterMethod.Starter,
        },
    ],
};
