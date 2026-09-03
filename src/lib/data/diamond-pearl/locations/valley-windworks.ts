import {
    valleyWindworks,
    valleyWindworksInterior,
} from '@/lib/data/diamond-pearl/maps';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS: Location = {
    name: 'Valley Windworks',
    subareas: [
        {
            name: 'Exterior',
            map: valleyWindworks,
            encountersKey: 'valley-windworks',
            battles: [
                {
                    battleKey: 'galactic-grunt-m-valley-windworks',
                    x: 61,
                    y: 47.1,
                },
            ],
        },
        {
            name: 'Interior',
            map: valleyWindworksInterior,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-1',
                    x: 11.8,
                    y: 38.1,
                },
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-2',
                    x: 52.4,
                    y: 4.9,
                },
                {
                    battleKey: 'commander-mars-valley-windworks-interior',
                    x: 89.3,
                    y: 31,
                },
            ],
        },
    ],
};

export default VALLEY_WINDWORKS;
