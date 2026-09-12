import { route118East, route118West } from '@/lib/data/ruby-sapphire/maps';
import { GEN_3_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_118: Location = {
    name: 'Route 118',
    subareas: [
        {
            name: 'West',
            map: route118West,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-118-west',
            battles: [
                {
                    battleKey: 'aroma-lady-rose',
                    x: 30.99,
                    y: 51.29,
                },
                {
                    battleKey: 'fisherman-wade',
                    x: 60.42,
                    y: 71.29,
                },
                {
                    battleKey: 'guitarist-dalton',
                    x: 72.92,
                    y: 56.29,
                },
            ],
        },
        {
            name: 'East',
            map: route118East,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-118',
            battles: [
                {
                    battleKey: 'interviewers-gabby-and-ty',
                    customWidth: GEN_3_TRUE_DOUBLE_WIDTH,
                    x: 17.75,
                    y: 41.6,
                },
                {
                    battleKey: 'fisherman-barny',
                    x: 27.68,
                    y: 76.29,
                },
                {
                    battleKey: 'bird-keeper-chester',
                    x: 58.05,
                    y: 36.6,
                },
                {
                    battleKey: 'bird-keeper-perry',
                    x: 72.34,
                    y: 51.29,
                },
            ],
        },
    ],
};

export default ROUTE_118;
