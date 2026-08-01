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
                    battleKey: 'camper::Jacob',
                    x: 73.2,
                    y: 76.6,
                },
                {
                    isOptional: true,
                    battleKey: 'hiker::Daniel',
                    x: 57.8,
                    y: 66.2,
                },
                {
                    isOptional: true,
                    battleKey: 'aroma-lady::Elizabeth',
                    x: 73.2,
                    y: 62.8,
                },
                {
                    isOptional: true,
                    battleKey: 'picnicker::Siena',
                    x: 76.4,
                    y: 48.3,
                },
                {
                    isOptional: true,
                    battleKey: 'camper::Zackary',
                    x: 54.6,
                    y: 53.4,
                },
                {
                    isOptional: true,
                    battleKey: 'hiker::Nicholas',
                    x: 51.6,
                    y: 36.9,
                },
                {
                    isOptional: true,
                    battleKey: 'battle-girl::Kelsey',
                    x: 47.9,
                    y: 29.6,
                },
                {
                    isOptional: true,
                    battleKey: 'picnicker::Karina',
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
                    battleKey: 'fisherman::Joseph',
                    x: 45.8,
                    y: 61.5,
                },
                {
                    isOptional: true,
                    battleKey: 'fisherman::Andrew',
                    x: 58.4,
                    y: 58.5,
                },
                {
                    isOptional: true,
                    battleKey: 'fisherman::Zachary',
                    x: 67.7,
                    y: 70.8,
                },
            ],
        },
    ],
};

export default ROUTE_205;
