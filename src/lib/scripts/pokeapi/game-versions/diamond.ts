import { EncounterMethod } from '@/lib/static/enums';
import { GameVersion } from '@/lib/static/types';

// Reuses platinum.ts's exclusion/merge/split/manualEncounters config as a
// base: that config encodes which Sinnoh content this app models, not
// per-version game data, so most of it applies unchanged to Diamond. The
// one genuine per-version filter is `version: 'diamond'` itself. Audited
// against PokeAPI directly (2026-08-03): every excludedLocations entry
// below is real, unmodeled Diamond/Pearl content (routes 224-230,
// Stark Mountain, Turnback Cave, etc. all have real `diamond`/`pearl`
// encounter data, just no Location objects yet). Platinum's own list also
// carried ~53 entries (Battle Frontier, the Regigigas ruins, Distortion
// World, city sub-building "locations", etc.) that have zero encounter
// data in PokeAPI for *any* Gen 4 version — those were dropped here since
// excluding something that already returns nothing is pure noise, not a
// real scope decision. methodOverrides (fossils, Old Chateau Gastly) and
// manualEncounters (chatot/abra/haunter trades) were individually
// re-verified against PokeAPI and Bulbapedia's DPPt-shared trade table —
// all confirmed accurate for Diamond, not just copied assumptions.
export const diamond: GameVersion = {
    id: 'diamond',
    label: 'Diamond',
    version: 'diamond',
    region: 'sinnoh',
    generation: 4,
    excludedLocations: [
        'newmoon-island',
        'stark-mountain',
        'turnback-cave',
        'snowpoint-temple',
        'maniac-tunnel',
        'sinnoh-route-224',
        'sinnoh-route-225',
        'sinnoh-route-227',
        'sinnoh-route-228',
        'sinnoh-route-229',
        'resort-area',
        'sinnoh-sea-route-226',
        'sinnoh-sea-route-230',
        'spear-pillar',
        'flower-paradise',
        'sinnoh-hall-of-origin-1',
        'roaming-sinnoh',
        'sinnoh-pokemart',
    ],
    excludedAreas: [
        'mt-coronet-exterior-blizzard',
        'mt-coronet-4f-small-room',
        'sinnoh-victory-road-inside',
        'sinnoh-victory-road-inside-b1f',
        'sinnoh-victory-road-inside-exit',
        'ruin-maniac-cave-10-25-different-unown-caught',
    ],
    excludedSpecies: [
        'mesprit',
        'dialga',
        'palkia',
        'omanyte',
        'kabuto',
        'aerodactyl',
        'lileep',
        'anorith',
        'paras',
        'exeggcute',
        'kangaskhan',
        'shroomish',
        'gulpin',
        'kecleon',
        'drapion',
        'toxicroak',
        // Shieldon (Armor Fossil) is Pearl-exclusive in the real games —
        // Diamond can only get it via trade, not the Oreburgh Mining
        // Museum revival. PokeAPI's location-area data doesn't reflect
        // this (it tags both fossils for both versions), so this is a
        // manual correction confirmed against Bulbapedia's availability
        // tables for Cranidos/Shieldon. See pearl.ts for the mirror
        // (Cranidos excluded there).
        'shieldon',
        // Eevee wasn't in the Sinnoh dex until Platinum (Bebe's gift in
        // Hearthome City, plus a post-National-Dex Trophy Garden
        // encounter) — not available in Diamond or Pearl at all.
        // PokeAPI still tags the Hearthome City gift for both, so this is
        // a manual correction confirmed against Bulbapedia's availability
        // table.
        'eevee',
    ],
    caveLocations: [
        'iron-island',
        'mt-coronet',
        'oreburgh-gate',
        'oreburgh-mine',
        'ravaged-path',
        'ruin-maniac-cave',
        'sinnoh-victory-road',
        'solaceon-ruins',
        'wayward-cave',
    ],
    methodOverrides: [
        {
            location: 'lake-verity',
            species: 'turtwig',
            method: EncounterMethod.Starter,
        },
        {
            location: 'lake-verity',
            species: 'chimchar',
            method: EncounterMethod.Starter,
        },
        {
            location: 'lake-verity',
            species: 'piplup',
            method: EncounterMethod.Starter,
        },
        {
            location: 'oreburgh-city',
            species: 'cranidos',
            method: EncounterMethod.Fossil,
        },
        {
            location: 'old-chateau',
            species: 'gastly',
            method: EncounterMethod.Walking,
        },
    ],
    excludedMethods: [
        'super-rod',
        'roaming-grass',
        'roaming-water',
        'pokemon-ranger',
    ],
    excludedConditions: [
        'swarm-yes',
        'radar-on',
        'story-progress-national-dex',
        'backlot-mentioned',
    ],
    excludedConditionPrefixes: ['slot2-'],
    strippedConditions: [
        'slot2-none',
        'great-marsh-daily-slot-none',
        'radar-none',
        'swarm-no',
        'radar-off',
        'not-mentioned',
        'backlot-not-mentioned',
    ],
    strippedConditionPrefixes: ['story-progress-', 'item-'],
    mergedLocations: [
        { from: 'eterna-city-west-gate', into: 'eterna-city-area' },
        ...['b1f', 'b2f', 'b3f', 'b4f'].flatMap((floor) =>
            ['a', 'b', 'c', 'd', 'e']
                .map((suffix) => `solaceon-ruins-${floor}-${suffix}`)
                .map((from) => ({
                    from,
                    into: `solaceon-ruins-${floor}`,
                    mode: 'dedupe' as const,
                }))
        ),
        ...['1f', 'b1f', 'b2f', 'b3f', 'b4f', 'b5f'].map((floor) => ({
            from: `solaceon-ruins-${floor}`,
            into: 'solaceon-ruins',
            mode: 'dedupe' as const,
        })),
        ...[
            'private-room',
            'leftmost-room',
            'middle-room',
            'right-room',
            'rightmost-room',
            'left-room',
        ].map((suffix) => ({
            from: `old-chateau-2f-${suffix}`,
            into: 'old-chateau-2f',
            mode: 'replace' as const,
        })),
    ],
    locationSplits: [
        {
            location: 'eterna-forest',
            groups: [
                {
                    key: 'eterna-forest-exterior',
                    methods: [EncounterMethod.HoneyTree],
                },
                {
                    key: 'eterna-forest-interior',
                },
            ],
        },
    ],
    manualEncounters: {
        'eterna-city-area': [
            {
                species: 'chatot',
                method: EncounterMethod.Trade,
                minLevel: null,
                maxLevel: null,
                chance: null,
                tradeFor: 'buizel',
                heldItem: 'leppa-berry',
            },
        ],
        'oreburgh-city-trade': [
            {
                species: 'abra',
                method: EncounterMethod.Trade,
                minLevel: null,
                maxLevel: null,
                chance: null,
                tradeFor: 'machop',
                heldItem: 'oran-berry',
            },
        ],
        'snowpoint-city-trade': [
            {
                species: 'haunter',
                method: EncounterMethod.Trade,
                minLevel: null,
                maxLevel: null,
                chance: null,
                tradeFor: 'medicham',
                heldItem: 'everstone',
            },
        ],
    },
};
