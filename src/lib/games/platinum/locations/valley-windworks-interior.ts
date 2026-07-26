import { valleyWindworksInterior } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS_INTERIOR: Location = {
    name: 'Valley Windworks Interior',
    map: valleyWindworksInterior,
    battles: [
        {
            isOptional: true,
            trainerClass: 'Galactic Grunt M',
            name: '5',
            team: [
                {
                    slug: 'zubat',
                    ability: 1,
                    gender: 'male',
                    level: 13,
                    nature: Nature.Bashful,
                },
            ],
            x: 11.6,
            y: 45.2,
        },
        {
            isOptional: true,
            trainerClass: 'Galactic Grunt M',
            name: '6',
            team: [
                {
                    slug: 'glameow',
                    ability: 1,
                    gender: 'female',
                    level: 11,
                    nature: Nature.Naive,
                },
                {
                    slug: 'stunky',
                    ability: 1,
                    gender: 'male',
                    level: 11,
                    nature: Nature.Hasty,
                },
            ],
            x: 52.1,
            y: 15.4,
        },
        {
            isMiniboss: true,
            trainerClass: 'Commander',
            name: 'Mars 1',
            team: [
                {
                    slug: 'zubat',
                    ability: 1,
                    gender: 'female',
                    level: 15,
                    nature: Nature.Bold,
                    moves: ['bite', 'leech-life', 'toxic'],
                    ivs: 12,
                },
                {
                    slug: 'purugly',
                    ability: 1,
                    gender: 'female',
                    level: 17,
                    nature: Nature.Bashful,
                    moves: ['feint-attack', 'scratch', 'fake-out'],
                    heldItem: 'oran-berry',
                    ivs: 12,
                },
            ],
            x: 88.9,
            y: 40,
        },
    ],
};

export default VALLEY_WINDWORKS_INTERIOR;
