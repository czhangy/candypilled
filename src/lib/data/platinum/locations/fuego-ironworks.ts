import {
    fuegoIronworksExterior,
    fuegoIronworksInterior,
} from '@/lib/data/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FUEGO_IRONWORKS: Location = {
    name: 'Fuego Ironworks',
    subareas: [
        {
            name: 'Exterior',
            map: fuegoIronworksExterior,
            encountersKey: 'fuego-ironworks',
        },
        {
            name: 'Interior',
            map: fuegoIronworksInterior,
            battles: [
                {
                    isOptional: true,
                    trainerClass: 'worker',
                    name: 'Dillan',
                    team: [
                        {
                            slug: 'machop',
                            ability: 1,
                            gender: 'male',
                            level: 33,
                            nature: Nature.Relaxed,
                        },
                        {
                            slug: 'machoke',
                            ability: 1,
                            gender: 'male',
                            level: 33,
                            nature: Nature.Hasty,
                        },
                    ],
                    x: 5,
                    y: 24.9,
                },
                {
                    isOptional: true,
                    trainerClass: 'worker',
                    name: 'Holden',
                    team: [
                        {
                            slug: 'magnemite',
                            ability: 1,
                            level: 32,
                            nature: Nature.Mild,
                        },
                        {
                            slug: 'magnemite',
                            ability: 1,
                            level: 32,
                            nature: Nature.Mild,
                        },
                        {
                            slug: 'magnemite',
                            ability: 1,
                            level: 32,
                            nature: Nature.Mild,
                        },
                    ],
                    x: 50.2,
                    y: 20.4,
                },
                {
                    isOptional: true,
                    trainerClass: 'worker',
                    name: 'Conrad',
                    team: [
                        {
                            slug: 'magmar',
                            ability: 1,
                            gender: 'male',
                            level: 35,
                            nature: Nature.Relaxed,
                        },
                    ],
                    x: 67.9,
                    y: 91.1,
                },
            ],
        },
    ],
};

export default FUEGO_IRONWORKS;
