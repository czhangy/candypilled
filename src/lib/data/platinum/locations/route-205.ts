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
                    battleKey: 'camper-jacob',
                    x: 73.4,
                    y: 73.1,
                },
                {
                    battleKey: 'hiker-daniel',
                    x: 58,
                    y: 63.5,
                },
                {
                    battleKey: 'aroma-lady-elizabeth',
                    x: 73.4,
                    y: 59.5,
                },
                {
                    battleKey: 'picnicker-siena',
                    x: 73.6,
                    y: 44.9,
                },
                {
                    battleKey: 'camper-zackary',
                    x: 45.3,
                    y: 51.1,
                },
                {
                    battleKey: 'hiker-nicholas',
                    x: 51.6,
                    y: 35.5,
                },
                {
                    battleKey: 'battle-girl-kelsey',
                    x: 48.2,
                    y: 22.9,
                },
                {
                    battleKey: 'picnicker-karina',
                    x: 51.6,
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
                    x: 45.3,
                    y: 62.8,
                },
                {
                    battleKey: 'fisherman-andrew',
                    x: 57.8,
                    y: 59.6,
                },
                {
                    battleKey: 'fisherman-zachary',
                    x: 67.2,
                    y: 72.3,
                },
            ],
        },
    ],
};

export default ROUTE_205;
