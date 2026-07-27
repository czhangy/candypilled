import { distortionWorld } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const DISTORTION_WORLD: Location = {
    name: 'Distortion World',
    map: distortionWorld,
    encountersKey: 'distortion-world',
    battles: [
        {
            isMiniboss: true,
            trainerClass: 'galactic-boss-cyrus',
            name: 'Cyrus 3',
            team: [
                {
                    slug: 'houndoom',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 45,
                    nature: Nature.Bashful,
                    moves: [
                        'flamethrower',
                        'dark-pulse',
                        'will-o-wisp',
                        'thunder-fang',
                    ],
                },
                {
                    slug: 'honchkrow',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 47,
                    nature: Nature.Adamant,
                    moves: [
                        'drill-peck',
                        'night-slash',
                        'heat-wave',
                        'psychic',
                    ],
                },
                {
                    slug: 'crobat',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 46,
                    nature: Nature.Naive,
                    moves: [
                        'cross-poison',
                        'air-slash',
                        'toxic',
                        'confuse-ray',
                    ],
                },
                {
                    slug: 'gyarados',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 46,
                    nature: Nature.Careful,
                    moves: [
                        'giga-impact',
                        'waterfall',
                        'ice-fang',
                        'earthquake',
                    ],
                },
                {
                    slug: 'weavile',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 48,
                    nature: Nature.Modest,
                    moves: [
                        'night-slash',
                        'ice-punch',
                        'fake-out',
                        'x-scissor',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            items: [{ count: 2, name: 'Full Restore' }],
            x: 43.3,
            y: 39.2,
        },
    ],
};

export default DISTORTION_WORLD;
