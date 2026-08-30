import { valleyWindworksInterior } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS_INTERIOR: Location = {
    name: 'Valley Windworks Interior',
    map: valleyWindworksInterior,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'galactic-grunt-m-valley-windworks-interior',
            metadata: [BattleMetadata.Optional],
            x: 11.4,
            y: 38.2,
        },
        {
            battleKey: 'galactic-grunt-m-valley-windworks-interior-2',
            metadata: [BattleMetadata.Optional],
            x: 52.6,
            y: 4.6,
        },
        {
            battleKey: 'commander-mars-valley-windworks',
            metadata: [BattleMetadata.Miniboss],
            x: 89.2,
            y: 31,
        },
    ],
};

export default VALLEY_WINDWORKS_INTERIOR;
