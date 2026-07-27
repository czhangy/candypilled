import { snowpointGym } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SNOWPOINT_GYM: Location = {
    name: 'Snowpoint Gym',
    map: snowpointGym,
    battles: [
        {
            isBoss: true,
            trainerClass: 'leader-candice',
            name: 'Candice',
            team: [
                {
                    slug: 'sneasel',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 40,
                    nature: Nature.Docile,
                    moves: ['slash', 'aerial-ace', 'feint-attack', 'ice-shard'],
                },
                {
                    slug: 'piloswine',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 40,
                    nature: Nature.Mild,
                    moves: ['avalanche', 'stone-edge', 'earthquake', 'hail'],
                },
                {
                    slug: 'abomasnow',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 42,
                    nature: Nature.Relaxed,
                    moves: [
                        'avalanche',
                        'wood-hammer',
                        'water-pulse',
                        'focus-blast',
                    ],
                },
                {
                    slug: 'froslass',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 44,
                    nature: Nature.Lonely,
                    moves: [
                        'blizzard',
                        'double-team',
                        'shadow-ball',
                        'psychic',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            items: [
                { count: 1, name: 'Hyper Potion' },
                { count: 1, name: 'Full Restore' },
            ],
            x: 50,
            y: 8.7,
        },
    ],
};

export default SNOWPOINT_GYM;
