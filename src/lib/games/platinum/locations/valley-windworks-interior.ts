import { valleyWindworksInterior } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS_INTERIOR: Location = {
    name: 'Valley Windworks Interior',
    map: valleyWindworksInterior,
    battles: [
        {
            trainerClass: 'Galactic Grunt M',
            name: '4',
            team: [
                {
                    name: 'Zubat',
                    ability: 1,
                    level: 13,
                    moves: ['Leech Life', 'Astonish', 'Supersonic', 'Bite'],
                    nature: Nature.Bashful,
                },
            ],
            x: 11.6,
            y: 45.2,
        },
        {
            isOptional: true,
            trainerClass: 'Galactic Grunt M',
            name: '5',
            team: [
                {
                    name: 'Glameow',
                    ability: 1,
                    level: 11,
                    moves: ['Fake Out', 'Scratch', 'Growl'],
                    nature: Nature.Naive,
                },
                {
                    name: 'Stunky',
                    ability: 1,
                    level: 11,
                    moves: [
                        'Focus Energy',
                        'Poison Gas',
                        'Screech',
                        'Fury Swipes',
                    ],
                    nature: Nature.Hasty,
                },
            ],
            x: 52.1,
            y: 15.4,
        },
        {
            isMiniboss: true,
            trainerClass: 'Commander',
            name: 'Mars',
            team: [
                {
                    name: 'Zubat',
                    ability: 1,
                    level: 15,
                    nature: Nature.Bold,
                    moves: ['Bite', 'Leech Life', 'Toxic'],
                },
                {
                    name: 'Purugly',
                    ability: 1,
                    level: 17,
                    nature: Nature.Bashful,
                    moves: ['Faint Attack', 'Scratch', 'Fake Out'],
                    heldItem: 'Oran Berry',
                },
            ],
            x: 88.9,
            y: 40,
        },
    ],
};

export default VALLEY_WINDWORKS_INTERIOR;
