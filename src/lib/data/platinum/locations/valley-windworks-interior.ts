import { valleyWindworksInterior } from '@/lib/data/platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS_INTERIOR: Location = {
    name: 'Valley Windworks Interior',
    map: valleyWindworksInterior,
    battles: [
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'galactic-grunt-m-5',
            x: 11.6,
            y: 45.2,
        },
        {
            metadata: [BattleMetadata.Optional],
            battleKey: 'galactic-grunt-m-6',
            x: 52.1,
            y: 15.4,
        },
        {
            metadata: [BattleMetadata.Miniboss],
            battleKey: 'commander-mars-mars-1',
            x: 88.9,
            y: 40,
        },
    ],
};

export default VALLEY_WINDWORKS_INTERIOR;
