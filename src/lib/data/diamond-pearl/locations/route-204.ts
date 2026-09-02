import { route204North, route204South } from '@/lib/data/diamond-pearl/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
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
                    x: 39.1,
                    y: 65.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'youngster-tyler',
                    x: 23.8,
                    y: 56.5,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'lass-samantha',
                    x: 35.9,
                    y: 25.4,
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
                    x: 54.5,
                    y: 62.8,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'bug-catcher-brandon',
                    x: 70.5,
                    y: 40.7,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
                    battleKey: 'twins-liv-and-liz',
                    x: 50,
                    y: 22.4,
                },
            ],
        },
    ],
};

export default ROUTE_204;
