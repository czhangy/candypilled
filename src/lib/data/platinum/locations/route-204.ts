import { route204North, route204South } from '@/lib/data/platinum/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { Location } from '@/lib/static/types';

const ROUTE_204: Location = {
    name: 'Route 204',
    subareas: [
        {
            name: 'South',
            map: route204South,
            encountersKey: 'sinnoh-route-204-south-towards-jubilife-city',
            battles: [
                {
                    battleKey: 'lass-sarah',
                    x: 39.1,
                    y: 65.9,
                },
                {
                    battleKey: 'youngster-tyler',
                    x: 23.8,
                    y: 56.5,
                },
                {
                    battleKey: 'lass-samantha',
                    x: 35.9,
                    y: 25.2,
                },
            ],
        },
        {
            name: 'North',
            map: route204North,
            encountersKey: 'sinnoh-route-204-north-towards-floaroma-town',
            battles: [
                {
                    battleKey: 'aroma-lady-taylor',
                    x: 54.5,
                    y: 62.7,
                },
                {
                    battleKey: 'bug-catcher-brandon',
                    x: 70.3,
                    y: 40.9,
                },
                {
                    customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
                    battleKey: 'twins-liv-and-liz',
                    x: 50,
                    y: 22.5,
                },
            ],
        },
    ],
};

export default ROUTE_204;
