import { valorCavern } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALOR_CAVERN: Location = {
    name: 'Valor Cavern',
    map: valorCavern,
    encountersKey: 'lake-valor-cavern',
    battles: [
        {
            isMiniboss: true,
            trainerClass: 'commander-saturn',
            name: 'Saturn',
            team: [
                {
                    slug: 'golbat',
                    ability: 1,
                    gender: 'male',
                    ivs: 24,
                    level: 38,
                    nature: Nature.Naughty,
                    moves: ['air-cutter', 'bite', 'toxic', 'supersonic'],
                },
                {
                    slug: 'bronzor',
                    ability: 1,
                    ivs: 24,
                    level: 38,
                    nature: Nature.Quirky,
                    moves: [
                        'gyro-ball',
                        'shadow-ball',
                        'rock-tomb',
                        'iron-defense',
                    ],
                },
                {
                    slug: 'toxicroak',
                    ability: 1,
                    gender: 'male',
                    ivs: 24,
                    level: 40,
                    nature: Nature.Adamant,
                    moves: [
                        'poison-jab',
                        'revenge',
                        'mud-bomb',
                        'feint-attack',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            x: 50.7,
            y: 63.5,
        },
    ],
};

export default VALOR_CAVERN;
