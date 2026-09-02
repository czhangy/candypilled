import {
    valleyWindworks,
    valleyWindworksInterior,
} from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
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
                    metadata: [],
                    battleKey: 'galactic-grunt-m-valley-windworks',
                    x: 61.2,
                    y: 44.9,
                },
            ],
        },
        {
            name: 'Interior',
            map: valleyWindworksInterior,
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-1',
                    x: 11.6,
                    y: 45.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'galactic-grunt-m-valley-windworks-interior-2',
                    x: 52.1,
                    y: 15.4,
                },
                {
                    metadata: [BattleMetadata.Miniboss],
                    battleKey: 'commander-mars-valley-windworks-interior',
                    x: 88.9,
                    y: 40,
                },
            ],
        },
    ],
};

export default VALLEY_WINDWORKS;
