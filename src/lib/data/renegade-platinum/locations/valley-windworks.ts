import {
    valleyWindworks,
    valleyWindworksInterior,
} from '@/lib/data/renegade-platinum/maps';
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
                    x: 60.9,
                    y: 47.2,
                },
            ],
        },
        {
            name: 'Interior',
            map: valleyWindworksInterior,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior',
                    x: 11.4,
                    y: 38.2,
                },
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-2',
                    x: 52.6,
                    y: 4.6,
                },
                {
                    battleKey: 'commander-mars-valley-windworks',
                    x: 89.2,
                    y: 31,
                },
            ],
        },
    ],
};

export default VALLEY_WINDWORKS;
