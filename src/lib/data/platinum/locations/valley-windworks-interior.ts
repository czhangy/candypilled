import { valleyWindworksInterior } from '@/lib/data/platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS_INTERIOR: Location = {
    name: 'Valley Windworks Interior',
    map: valleyWindworksInterior,
    mapAnchor: MapAnchor.Center,
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
};

export default VALLEY_WINDWORKS_INTERIOR;
