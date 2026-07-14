import { route204South } from '@/lib/games/platinum/splits/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_204_SOUTH: Location = {
    name: 'Route 204 South',
    map: route204South,
    encountersKey: 'sinnoh-route-204-south-towards-jubilife-city',
    battles: [
        {
            trainerClass: 'Lass',
            name: 'Sarah',
            team: [
                {
                    name: 'Shinx',
                    level: 7,
                    moves: ['Tackle', 'Leer'],
                    nature: Nature.Hardy,
                    ability: 'Rivalry',
                },
            ],
            x: 38.9,
            y: 66.5,
        },
        {
            isOptional: true,
            trainerClass: 'Youngster',
            name: 'Tyler',
            team: [
                {
                    name: 'Magikarp',
                    level: 8,
                    moves: ['Splash', 'Tackle', 'Flail'],
                    nature: Nature.Sassy,
                    ability: 'Swift Swim',
                },
            ],
            x: 22.9,
            y: 57.5,
        },
        {
            isOptional: true,
            trainerClass: 'Lass',
            name: 'Samantha',
            team: [
                {
                    name: 'Budew',
                    level: 7,
                    moves: ['Absorb', 'Growth', 'Water Sport'],
                    nature: Nature.Docile,
                    ability: 'Natural Cure',
                },
            ],
            x: 35.7,
            y: 27.5,
        },
    ],
};

export default ROUTE_204_SOUTH;
