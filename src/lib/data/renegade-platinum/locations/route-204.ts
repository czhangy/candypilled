import {
    route204North,
    route204South,
} from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_204: Location = {
    name: 'Route 204',
    subareas: [
        {
            name: 'South',
            map: route204South,
            encountersKey: 'sinnoh-route-204-south-towards-jubilife-city',
            battles: [
                {
                    battleKey: 'lass-sarah',
                    metadata: [BattleMetadata.Optional],
                    x: 39.3,
                    y: 66.1,
                },
                {
                    battleKey: 'youngster-tyler',
                    metadata: [BattleMetadata.Optional],
                    x: 23.8,
                    y: 56.7,
                },
                {
                    battleKey: 'lass-samantha',
                    metadata: [BattleMetadata.Optional],
                    x: 35.9,
                    y: 25.5,
                },
            ],
        },
        {
            name: 'North',
            map: route204North,
            encountersKey: 'sinnoh-route-204-north-towards-floaroma-town',
            battles: [
                {
                    battleKey: 'aroma-lady-taylor',
                    metadata: [BattleMetadata.Optional],
                    x: 54.9,
                    y: 62.7,
                },
                {
                    battleKey: 'bug-catcher-brandon',
                    metadata: [BattleMetadata.Optional],
                    x: 70.5,
                    y: 40.8,
                },
                {
                    battleKey: 'twins-liv-and-liz',
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: 36,
                    x: 50,
                    y: 22.7,
                },
            ],
        },
    ],
};

export default ROUTE_204;
