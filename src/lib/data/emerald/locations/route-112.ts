import { route112North, route112South } from '@/lib/data/emerald/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_112: Location = {
    name: 'Route 112',
    subareas: [
        {
            name: 'South',
            map: route112South,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'hoenn-route-112',
            battles: [
                {
                    battleKey: 'camper-larry',
                    x: 73.75,
                    y: 73.36,
                },
                {
                    battleKey: 'picnicker-carol',
                    x: 56.25,
                    y: 65.86,
                },
                {
                    battleKey: 'hiker-trent',
                    x: 38.75,
                    y: 50.86,
                },
                {
                    battleKey: 'hiker-brice',
                    x: 61.25,
                    y: 35.86,
                },
            ],
        },
        {
            name: 'North',
            map: route112North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-112',
            battles: [
                {
                    battleKey: 'kindler-bryant',
                    x: 78.75,
                    y: 36.72,
                },
                {
                    battleKey: 'aroma-lady-shayla',
                    x: 78.75,
                    y: 56.72,
                },
            ],
        },
    ],
};

export default ROUTE_112;
