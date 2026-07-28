import { luciansRoom } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const LUCIANS_ROOM: Location = {
    name: "Lucian's Room",
    map: luciansRoom,
    battles: [
        {
            isBoss: true,
            trainerClass: 'elite-four-lucian',
            name: 'Lucian',
            team: [
                {
                    slug: 'mr-mime',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 53,
                    nature: Nature.Hasty,
                    moves: [
                        'psychic',
                        'thunderbolt',
                        'reflect',
                        'light-screen',
                    ],
                },
                {
                    slug: 'espeon',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 55,
                    nature: Nature.Hardy,
                    moves: [
                        'psychic',
                        'shadow-ball',
                        'quick-attack',
                        'signal-beam',
                    ],
                },
                {
                    slug: 'bronzong',
                    ability: 1,
                    ivs: 30,
                    level: 54,
                    nature: Nature.Naive,
                    moves: ['psychic', 'gyro-ball', 'earthquake', 'calm-mind'],
                },
                {
                    slug: 'alakazam',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 56,
                    nature: Nature.Hardy,
                    moves: ['psychic', 'energy-ball', 'focus-blast', 'recover'],
                },
                {
                    slug: 'gallade',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 59,
                    nature: Nature.Careful,
                    moves: [
                        'drain-punch',
                        'psycho-cut',
                        'leaf-blade',
                        'stone-edge',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            items: [{ count: 2, name: 'Full Restore' }],
            x: 50.2,
            y: 40.6,
        },
    ],
};

export default LUCIANS_ROOM;
