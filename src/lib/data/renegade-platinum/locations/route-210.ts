import {
    route210NorthDawn,
    route210NorthLucas,
    route210South,
} from '@/lib/data/renegade-platinum/maps';
import {
    GEN_4_TRUE_DOUBLE_HEIGHT,
    GEN_4_TRUE_DOUBLE_WIDTH,
} from '@/lib/static/constants';
import { BattleMetadata } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_210: Location = {
    name: 'Route 210',
    subareas: [
        {
            name: 'South',
            map: route210South,
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
            map: { male: route210NorthDawn, female: route210NorthLucas },
            encountersKey: 'sinnoh-route-210-north',
            battles: [
                {
                    battleKey: 'ninja-boy-brennan',
                    metadata: [BattleMetadata.Optional],
                    x: 73.4,
                    y: 92.5,
                },
                {
                    battleKey: 'ninja-boy-fabian',
                    metadata: [BattleMetadata.Optional],
                    x: 85.9,
                    y: 90.9,
                },
                {
                    battleKey: 'ninja-boy-bruce',
                    metadata: [BattleMetadata.Optional],
                    x: 96.4,
                    y: 78.3,
                },
                {
                    battleKey: 'ninja-boy-joel',
                    metadata: [BattleMetadata.Optional],
                    x: 88,
                    y: 29.9,
                },
                {
                    battleKey: 'ace-trainer-f-alyssa',
                    metadata: [],
                    x: 70.3,
                    y: 34.4,
                },
                {
                    battleKey: 'double-team-zac-and-jen',
                    metadata: [BattleMetadata.TrueDouble],
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    x: 59.9,
                    y: 26,
                },
                {
                    battleKey: 'ace-trainer-m-ernest',
                    metadata: [BattleMetadata.Optional],
                    x: 56.8,
                    y: 15.6,
                },
                {
                    battleKey: 'ninja-boy-davido',
                    metadata: [BattleMetadata.Optional],
                    x: 20.3,
                    y: 14.3,
                },
                {
                    battleKey: 'dragon-tamer-patrick',
                    metadata: [BattleMetadata.Optional],
                    x: 22.4,
                    y: 45.4,
                },
                {
                    battleKey: 'black-belt-adam',
                    metadata: [],
                    x: 40,
                    y: 43.8,
                },
                {
                    battleKey: 'ninja-boy-nathan',
                    metadata: [BattleMetadata.Optional],
                    x: 47.4,
                    y: 34.6,
                },
                {
                    battleKey: 'bird-keeper-brianna',
                    metadata: [BattleMetadata.Optional],
                    x: 32.8,
                    y: 32.9,
                },
                {
                    battleKey: 'veteran-brian',
                    metadata: [BattleMetadata.Optional],
                    x: 15.1,
                    y: 25.1,
                },
                {
                    battleKey: 'pkmn-trainer-dawn-route-210-north',
                    gender: 'male',
                    metadata: [BattleMetadata.Miniboss],
                    x: 1.6,
                    y: 29.8,
                },
                {
                    battleKey: 'pkmn-trainer-lucas-route-210-north',
                    gender: 'female',
                    metadata: [BattleMetadata.Miniboss],
                    x: 1.6,
                    y: 29.8,
                },
            ],
        },
    ],
};

export default ROUTE_210;
