import {
    valleyWindworks,
    valleyWindworksInterior,
} from '@/lib/data/platinum/maps';
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
                    y: 45.1,
                },
            ],
        },
        {
            name: 'Interior',
            map: valleyWindworksInterior,
            battles: [
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-1',
                    x: 11.6,
                    y: 38.4,
                },
                {
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-2',
                    x: 52.3,
                    y: 4.4,
                },
                {
                    battleKey: 'commander-mars-valley-windworks-interior',
                    x: 88.9,
                    y: 31.7,
                },
            ],
        },
    ],
};

export default VALLEY_WINDWORKS;
