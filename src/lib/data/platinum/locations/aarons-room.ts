import { aaronsRoom } from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const AARONS_ROOM: Location = {
    name: "Aaron's Room",
    map: aaronsRoom,
    battles: [
        {
            isBoss: true,
            trainerClass: 'elite-four-aaron',
            name: 'Aaron',
            team: [
                {
                    slug: 'yanmega',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 49,
                    nature: Nature.Rash,
                    moves: ['air-slash', 'bug-buzz', 'u-turn', 'double-team'],
                },
                {
                    slug: 'scizor',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 49,
                    nature: Nature.Gentle,
                    moves: [
                        'iron-head',
                        'x-scissor',
                        'night-slash',
                        'quick-attack',
                    ],
                },
                {
                    slug: 'vespiquen',
                    ability: 1,
                    gender: 'female',
                    ivs: 30,
                    level: 50,
                    nature: Nature.Careful,
                    moves: [
                        'attack-order',
                        'defend-order',
                        'heal-order',
                        'power-gem',
                    ],
                },
                {
                    slug: 'heracross',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 51,
                    nature: Nature.Naughty,
                    moves: [
                        'megahorn',
                        'close-combat',
                        'night-slash',
                        'stone-edge',
                    ],
                },
                {
                    slug: 'drapion',
                    ability: 1,
                    gender: 'male',
                    ivs: 30,
                    level: 53,
                    nature: Nature.Jolly,
                    moves: [
                        'x-scissor',
                        'cross-poison',
                        'ice-fang',
                        'aerial-ace',
                    ],
                    heldItem: 'sitrus-berry',
                },
            ],
            items: [{ count: 2, name: 'Full Restore' }],
            x: 50.2,
            y: 39.3,
        },
    ],
};

export default AARONS_ROOM;
