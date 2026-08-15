import { route204North, route204South } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_204: Location = {
    name: 'Route 204',
    subareas: [
        {
            name: 'South',
            map: route204South,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-204-south-towards-jubilife-city',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'lass-sarah',
                    x: 37.6,
                    y: 66.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'youngster-tyler',
                    x: 21.8,
                    y: 57.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'lass-samantha',
                    x: 34.2,
                    y: 27.2,
                },
            ],
        },
        {
            name: 'North',
            map: route204North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-204-north-towards-floaroma-town',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'aroma-lady-taylor',
                    x: 53.3,
                    y: 59.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bug-catcher-brandon',
                    x: 63.3,
                    y: 39.5,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: 36,
                    battleKey: 'twins-liv-and-liz',
                    x: 48.3,
                    y: 23.3,
                },
            ],
        },
    ],
};

export default ROUTE_204;
