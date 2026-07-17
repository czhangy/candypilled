type MethodOverride = {
    location: string;
    species: string;
    method: string;
};

type GameVersion = {
    id: string;
    label: string;
    version: string;
    region: string;
    generation: number;
    excludedLocations?: string[];
    excludedSpecies?: string[];
    caveLocations?: string[];
    methodOverrides?: MethodOverride[];
    excludedMethods?: string[];
    excludedConditions?: string[];
    excludedConditionPrefixes?: string[];
    strippedConditions?: string[];
    strippedConditionPrefixes?: string[];
};

export const platinum: GameVersion = {
    id: 'platinum',
    label: 'Platinum',
    version: 'platinum',
    region: 'sinnoh',
    generation: 4,
    excludedLocations: [
        'sendoff-spring',
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
        'sinnoh-hall-of-origin-2',
        'distortion-world',
        'grand-lake',
        'spring-path',
        'sandgem-town',
        'floaroma-town',
        'solaceon-town',
        'jubilife-city',
        'snowpoint-city',
        'pal-park',
        'amity-square',
        'fullmoon-island',
        'galactic-hq',
        'verity-lakefront',
        'sinnoh-battle-tower',
        'fight-area',
        'survival-area',
        'seabreak-path',
        'verity-cavern',
        'valor-cavern',
        'acuity-cavern',
        'jubilife-tv',
        'poketch-co',
        'gts',
        'trainers-school',
        'mining-museum',
        'sinnoh-flower-shop',
        'sinnoh-cycle-shop',
        'contest-hall',
        'poffin-house',
        'sinnoh-foreign-building',
        'pokemon-day-care',
        'veilstone-store',
        'sinnoh-game-corner',
        'canalave-library',
        'vista-lighthouse',
        'sunyshore-market',
        'footstep-house',
        'sinnoh-cafe',
        'sinnoh-restaurant',
        'battle-park',
        'battle-frontier',
        'battle-factory',
        'battle-castle',
        'battle-arcade',
        'battle-hall',
        'sinnoh-global-terminal',
        'sinnoh-villa',
        'battleground',
        'rotoms-room',
        'tg-eterna-bldg',
        'iron-ruins',
        'iceberg-ruins',
        'rock-peak-ruins',
        'roaming-sinnoh',
        'sinnoh-pokemart',
    ],
    excludedSpecies: [
        'turtwig',
        'chimchar',
        'piplup',
        'mesprit',
        'azelf',
        'uxie',
        'dialga',
        'palkia',
        'giratina',
        'omanyte',
        'kabuto',
        'aerodactyl',
        'lileep',
        'anorith',
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
        { location: 'oreburgh-city', species: 'cranidos', method: 'fossil' },
        { location: 'oreburgh-city', species: 'shieldon', method: 'fossil' },
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
    ],
    excludedConditionPrefixes: ['slot2-'],
    strippedConditions: [
        'slot2-none',
        'radar-none',
        'swarm-no',
        'radar-off',
        'not-mentioned',
    ],
    strippedConditionPrefixes: ['story-progress-', 'item-', 'backlot-'],
};
