import { route202 } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_202: Location = {
    name: 'Route 202',
    map: route202,
    encountersKey: 'sinnoh-route-202',
    battles: [
        {
            trainerClass: 'Youngster',
            name: 'Tristan',
            team: [
                {
                    name: 'Starly',
                    ability: 1,
                    level: 5,
                    moves: ['Tackle', 'Growl', 'Quick Attack'],
                    nature: Nature.Careful,
                },
            ],
            x: 22.13,
            y: 47,
        },
        {
            trainerClass: 'Lass',
            name: 'Natalie',
            team: [
                {
                    name: 'Bidoof',
                    ability: 1,
                    level: 5,
                    moves: ['Tackle', 'Growl'],
                    nature: Nature.Quiet,
                },
            ],
            x: 61.9,
            y: 60.4,
        },
        {
            trainerClass: 'Youngster',
            name: 'Logan',
            team: [
                {
                    name: 'Burmy',
                    ability: 1,
                    level: 5,
                    moves: ['Tackle'],
                    nature: Nature.Impish,
                },
            ],
            x: 72.3,
            y: 21.9,
        },
    ],
};

export default ROUTE_202;
