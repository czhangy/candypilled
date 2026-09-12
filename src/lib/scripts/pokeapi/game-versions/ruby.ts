import { EncounterMethod } from '@/lib/static/enums';
import { GameVersion } from '@/lib/static/types';

// excludedLocations: every Hoenn location PokeAPI reports zero wild/gift
// encounters for in Ruby specifically (audited directly against
// https://pokeapi.co/api/v2/region/hoenn/ and each location's own areas —
// includes both real non-wild locations, e.g. towns/marts, and content
// that's ORAS-exclusive on PokeAPI, e.g. mossdeep-space-center).
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
    // "encounters", not obtainable through normal Ruby/Sapphire gameplay.
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

export const ruby: GameVersion = {
    id: 'ruby',
    label: 'Ruby',
    version: 'ruby',
    region: 'hoenn',
    generation: 3,
    excludedLocations: EXCLUDED_LOCATIONS,
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
