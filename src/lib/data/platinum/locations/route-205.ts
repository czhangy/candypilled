import { route205North, route205South } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const ROUTE_205: Location = {
    name: 'Route 205',
    subareas: [
        {
            name: 'South',
            map: route205South,
            encountersKey: 'sinnoh-route-205-south-towards-floaroma-town',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'camper-jacob',
                    x: 73.2,
                    y: 76.6,
                },
                {
                    isOptional: true,
                    battleKey: 'hiker-daniel',
                    x: 57.8,
                    y: 66.2,
                },
                {
                    isOptional: true,
                    battleKey: 'aroma-lady-elizabeth',
                    x: 73.2,
                    y: 62.8,
                },
                {
                    isOptional: true,
                    battleKey: 'picnicker-siena',
                    x: 76.4,
                    y: 48.3,
                },
                {
                    isOptional: true,
                    battleKey: 'camper-zackary',
                    x: 54.6,
                    y: 53.4,
                },
                {
                    isOptional: true,
                    battleKey: 'hiker-nicholas',
                    x: 51.6,
                    y: 36.9,
                },
                {
                    isOptional: true,
                    battleKey: 'battle-girl-kelsey',
                    x: 47.9,
                    y: 29.6,
                },
                {
                    isOptional: true,
                    battleKey: 'picnicker-karina',
                    x: 51.4,
                    y: 21.4,
                },
            ],
        },
        {
            name: 'North',
            map: route205North,
            encountersKey: 'sinnoh-route-205-east-towards-eterna-city',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'fisherman-joseph',
                    x: 45.8,
                    y: 61.5,
                },
                {
                    isOptional: true,
                    battleKey: 'fisherman-andrew',
                    x: 58.4,
                    y: 58.5,
                },
                {
                    isOptional: true,
                    battleKey: 'fisherman-zachary',
                    x: 67.7,
                    y: 70.8,
                },
            ],
        },
    ],
};

export default ROUTE_205;
