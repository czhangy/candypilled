import { route104North, route104South } from '@/lib/data/emerald/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_104: Location = {
    name: 'Route 104',
    subareas: [
        {
            name: 'South',
            map: route104South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-104-area',
            battles: [
                {
                    battleKey: 'lady-cindy',
                    x: 28.75,
                    y: 22.87,
                },
                {
                    battleKey: 'youngster-billy',
                    x: 46.25,
                    y: 72.6,
                },
                {
                    battleKey: 'fisherman-darian',
                    x: 38.75,
                    y: 55.31,
                },
            ],
        },
        {
            name: 'North',
            map: route104North,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'hoenn-route-104-area',
            battles: [
                {
                    battleKey: 'rich-boy-winston',
                    x: 53.75,
                    y: 75.19,
                },
                {
                    battleKey: 'lass-haley',
                    x: 78.75,
                    y: 72.22,
                },
                {
                    battleKey: 'fisherman-ivan',
                    x: 73.75,
                    y: 24.82,
                },
                {
                    battleKey: 'twins-gina-and-mia',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 70,
                    y: 45.56,
                },
            ],
        },
    ],
};

export default ROUTE_104;
