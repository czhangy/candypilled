import { route211East, route211West } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_211: Location = {
    name: 'Route 211',
    subareas: [
        {
            name: 'West',
            map: route211West,
            encountersKey: 'sinnoh-route-211-west-towards-eterna-city',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'ninja-boy::Zach',
                    x: 29.6,
                    y: 37.1,
                },
                {
                    isOptional: true,
                    battleKey: 'hiker::Louis',
                    x: 76.1,
                    y: 49.6,
                },
                {
                    isOptional: true,
                    battleKey: 'bird-keeper::Alexandra',
                    x: 46.8,
                    y: 40.6,
                },
            ],
        },
        {
            name: 'East',
            map: route211East,
            encountersKey: 'sinnoh-route-211-east-towards-celestic-town',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'bird-keeper::Katherine',
                    x: 52.9,
                    y: 31.7,
                },
                {
                    isOptional: true,
                    battleKey: 'ruin-maniac::Harry',
                    x: 44.2,
                    y: 45.7,
                },
                {
                    isOptional: true,
                    battleKey: 'ninja-boy::Nick',
                    x: 32.4,
                    y: 32.3,
                },
                {
                    isOptional: true,
                    battleKey: 'black-belt::Sean',
                    x: 49.7,
                    y: 90,
                },
            ],
        },
    ],
};

export default ROUTE_211;
