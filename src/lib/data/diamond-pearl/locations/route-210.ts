import { route210North, route210South } from '@/lib/data/diamond-pearl/maps';
import { BattleMetadata, FieldCondition } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_210: Location = {
    name: 'Route 210',
    subareas: [
        {
            name: 'South',
            map: route210South,
            encountersKey: 'sinnoh-route-210-south-towards-solaceon-town',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'rancher-marco',
                    x: 34.8,
                    y: 77,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'jogger-wyatt',
                    x: 71.2,
                    y: 69,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customHeight: 40,
                    battleKey: 'belle-and-pa-ava-and-matt',
                    x: 60.2,
                    y: 56.4,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: 36,
                    battleKey: 'twins-teri-and-tia',
                    x: 42.5,
                    y: 45.4,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-breeder-m-kahlil',
                    x: 31.6,
                    y: 36.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'pkmn-breeder-f-amber',
                    x: 60,
                    y: 30.8,
                },
            ],
        },
        {
            name: 'North',
            map: route210North,
            encountersKey: 'sinnoh-route-210-west-towards-celestic-town',
            battles: [
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-brennan',
                    x: 73.5,
                    y: 81.7,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-fabian',
                    x: 86.3,
                    y: 80.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-bruce',
                    x: 96.7,
                    y: 70,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-joel',
                    fieldCondition: FieldCondition.Fog,
                    x: 88.2,
                    y: 29,
                },
                {
                    metadata: [],
                    battleKey: 'ace-trainer-f-alyssa',
                    fieldCondition: FieldCondition.Fog,
                    x: 70.4,
                    y: 32.6,
                },
                {
                    metadata: [
                        BattleMetadata.Optional,
                        BattleMetadata.TrueDouble,
                    ],
                    customWidth: 36,
                    battleKey: 'double-team-zac-and-jen',
                    fieldCondition: FieldCondition.Fog,
                    x: 61.6,
                    y: 22.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ace-trainer-m-ernest',
                    fieldCondition: FieldCondition.Fog,
                    x: 56.8,
                    y: 10.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-davido',
                    fieldCondition: FieldCondition.Fog,
                    x: 20.1,
                    y: 9.2,
                },
                {
                    metadata: [],
                    battleKey: 'black-belt-adam',
                    fieldCondition: FieldCondition.Fog,
                    x: 40.1,
                    y: 34.2,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'ninja-boy-nathan',
                    fieldCondition: FieldCondition.Fog,
                    x: 47.5,
                    y: 30.7,
                },
                {
                    metadata: [],
                    battleKey: 'bird-keeper-brianna',
                    fieldCondition: FieldCondition.Fog,
                    x: 32.8,
                    y: 29.3,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'veteran-brian',
                    fieldCondition: FieldCondition.Fog,
                    x: 15,
                    y: 22.6,
                },
                {
                    metadata: [BattleMetadata.Optional],
                    battleKey: 'dragon-tamer-patrick',
                    fieldCondition: FieldCondition.Fog,
                    x: 84,
                    y: 15.9,
                },
            ],
        },
    ],
};

export default ROUTE_210;
