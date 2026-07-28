import { berthasRoom } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const BERTHAS_ROOM: Location = {
    name: "Bertha's Room",
    map: berthasRoom,
    battles: [
        {
            isBoss: true,
            trainerClass: 'elite-four-bertha',
            name: 'Bertha',
            team: [
                {
                    slug: 'whiscash',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 50,
                    nature: Nature.Mild,
                    moves: [
                        'earth-power',
                        'aqua-tail',
                        'zen-headbutt',
                        'sandstorm',
                    ],
                },
                {
                    slug: 'gliscor',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 53,
                    nature: Nature.Serious,
                    moves: [
                        'earthquake',
                        'ice-fang',
                        'fire-fang',
                        'thunder-fang',
                    ],
                },
                {
                    slug: 'hippowdon',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 52,
                    nature: Nature.Quirky,
                    moves: ['earthquake', 'stone-edge', 'crunch', 'yawn'],
                },
                {
                    slug: 'golem',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 52,
                    nature: Nature.Docile,
                    moves: [
                        'earthquake',
                        'fire-punch',
                        'thunder-punch',
                        'sandstorm',
                    ],
                },
                {
                    slug: 'rhyperior',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 55,
                    nature: Nature.Naughty,
                    moves: [
                        'earthquake',
                        'rock-wrecker',
                        'megahorn',
                        'avalanche',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            items: [{ count: 2, name: 'Full Restore' }],
            x: 50.2,
            y: 40.5,
        },
    ],
};

export default BERTHAS_ROOM;
