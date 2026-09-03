import { route205North, route205South } from '@/lib/data/diamond-pearl/maps';
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
                    battleKey: 'camper-jacob',
                    x: 73.5,
                    y: 73,
                },
                {
                    battleKey: 'hiker-daniel',
                    x: 58.1,
                    y: 63.5,
                },
                {
                    battleKey: 'aroma-lady-elizabeth',
                    x: 73.7,
                    y: 59.4,
                },
                {
                    battleKey: 'camper-zackary',
                    x: 45.4,
                    y: 51.1,
                },
                {
                    battleKey: 'picnicker-siena',
                    x: 73.7,
                    y: 44.9,
                },
                {
                    battleKey: 'hiker-nicholas',
                    x: 51.7,
                    y: 35.4,
                },
                {
                    battleKey: 'battle-girl-kelsey',
                    x: 48.5,
                    y: 22.9,
                },
                {
                    battleKey: 'picnicker-karina',
                    x: 51.5,
                    y: 19.8,
                },
            ],
        },
        {
            name: 'North',
            map: route205North,
            encountersKey: 'sinnoh-route-205-east-towards-eterna-city',
            battles: [
                {
                    battleKey: 'fisherman-joseph',
                    x: 45.4,
                    y: 62.6,
                },
                {
                    battleKey: 'fisherman-andrew',
                    x: 57.7,
                    y: 59.5,
                },
                {
                    battleKey: 'fisherman-zachary',
                    x: 67.1,
                    y: 72.2,
                },
            ],
        },
    ],
};

export default ROUTE_205;
