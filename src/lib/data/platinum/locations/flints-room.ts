import { flintsRoom } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLINTS_ROOM: Location = {
    name: "Flint's Room",
    map: flintsRoom,
    battles: [
        {
            isBoss: true,
            trainerClass: 'elite-four-flint',
            name: 'Flint',
            team: [
                {
                    slug: 'houndoom',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 52,
                    nature: Nature.Relaxed,
                    moves: [
                        'flamethrower',
                        'sludge-bomb',
                        'dark-pulse',
                        'sunny-day',
                    ],
                },
                {
                    slug: 'flareon',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 55,
                    nature: Nature.Quirky,
                    moves: [
                        'overheat',
                        'giga-impact',
                        'quick-attack',
                        'will-o-wisp',
                    ],
                },
                {
                    slug: 'rapidash',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 53,
                    nature: Nature.Docile,
                    moves: ['flare-blitz', 'solar-beam', 'bounce', 'sunny-day'],
                },
                {
                    slug: 'infernape',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 55,
                    nature: Nature.Bold,
                    moves: [
                        'flare-blitz',
                        'thunder-punch',
                        'mach-punch',
                        'earthquake',
                    ],
                },
                {
                    slug: 'magmortar',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 57,
                    nature: Nature.Gentle,
                    moves: [
                        'flamethrower',
                        'thunderbolt',
                        'solar-beam',
                        'hyper-beam',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            items: [{ count: 2, name: 'Full Restore' }],
            x: 50.2,
            y: 40.3,
        },
    ],
};

export default FLINTS_ROOM;
