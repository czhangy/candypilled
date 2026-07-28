import { cynthiasRoom } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const CYNTHIAS_ROOM: Location = {
    name: "Cynthia's Room",
    map: cynthiasRoom,
    battles: [
        {
            isBoss: true,
            trainerClass: 'champion-cynthia',
            name: 'Cynthia',
            team: [
                {
                    slug: 'spiritomb',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 58,
                    nature: Nature.Timid,
                    moves: [
                        'dark-pulse',
                        'psychic',
                        'silver-wind',
                        'shadow-ball',
                    ],
                },
                {
                    slug: 'roserade',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 58,
                    nature: Nature.Mild,
                    moves: [
                        'energy-ball',
                        'sludge-bomb',
                        'toxic',
                        'extrasensory',
                    ],
                },
                {
                    slug: 'togekiss',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 60,
                    nature: Nature.Hardy,
                    moves: [
                        'air-slash',
                        'aura-sphere',
                        'water-pulse',
                        'shock-wave',
                    ],
                },
                {
                    slug: 'lucario',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 60,
                    nature: Nature.Careful,
                    moves: [
                        'aura-sphere',
                        'extreme-speed',
                        'shadow-ball',
                        'stone-edge',
                    ],
                },
                {
                    slug: 'milotic',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 58,
                    nature: Nature.Docile,
                    moves: ['surf', 'ice-beam', 'mirror-coat', 'dragon-pulse'],
                },
                {
                    slug: 'garchomp',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 62,
                    nature: Nature.Quirky,
                    moves: [
                        'dragon-rush',
                        'earthquake',
                        'flamethrower',
                        'giga-impact',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            items: [{ count: 4, name: 'Full Restore' }],
            x: 50.2,
            y: 72.9,
        },
    ],
};

export default CYNTHIAS_ROOM;
