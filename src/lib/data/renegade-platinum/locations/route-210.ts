import {
    route210North,
    route210South,
} from '@/lib/data/renegade-platinum/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_210: Location = {
    name: 'Route 210',
    subareas: [
        {
            name: 'South',
            map: route210South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-route-210-south',
            battles: [
                {
                    battleKey: 'jogger-wyatt',
                    metadata: [BattleMetadata.Optional],
                    x: 85.9,
                    y: 75.1,
                },
                {
                    battleKey: 'rancher-marco',
                    metadata: [BattleMetadata.Optional],
                    x: 35.9,
                    y: 79.6,
                },
                {
                    battleKey: 'belle-and-pa-ava-and-matt',
                    metadata: [
                        BattleMetadata.TrueDouble,
                        BattleMetadata.Optional,
                    ],
                    customHeight: 46,
                    x: 61.1,
                    y: 61.7,
                },
                {
                    battleKey: 'twins-teri-and-tia',
                    metadata: [
                        BattleMetadata.TrueDouble,
                        BattleMetadata.Optional,
                    ],
                    customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
                    x: 43.8,
                    y: 51.8,
                },
                {
                    battleKey: 'pkmn-breeder-kahlil',
                    metadata: [BattleMetadata.Optional],
                    x: 33,
                    y: 43.9,
                },
                {
                    battleKey: 'pkmn-breeder-amber',
                    metadata: [BattleMetadata.Optional],
                    x: 60.9,
                    y: 39.1,
                },
            ],
        },
        {
            name: 'North',
            map: route210North,
            mapAnchor: MapAnchor.BottomLeft,
            encountersKey: 'sinnoh-route-210-north',
        },
    ],
};

export default ROUTE_210;
