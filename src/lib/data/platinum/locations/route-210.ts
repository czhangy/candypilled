import { route210North, route210South } from '@/lib/data/platinum/maps';
import {
    GEN_4_TRUE_DOUBLE_HEIGHT,
    GEN_4_TRUE_DOUBLE_WIDTH,
} from '@/lib/static/constants';
import { FieldCondition } from '@/lib/static/enums';
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
                    battleKey: 'rancher-marco',
                    x: 35.7,
                    y: 79.6,
                },
                {
                    battleKey: 'jogger-wyatt',
                    x: 85.7,
                    y: 75,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'belle-and-pa-ava-and-matt',
                    x: 61.1,
                    y: 61.9,
                },
                {
                    customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
                    battleKey: 'twins-teri-and-tia',
                    x: 43.6,
                    y: 51.9,
                },
                {
                    battleKey: 'pkmn-breeder-m-kahlil',
                    x: 32.8,
                    y: 43.9,
                },
                {
                    battleKey: 'pkmn-breeder-f-amber',
                    x: 60.9,
                    y: 39.2,
                },
            ],
        },
        {
            name: 'North',
            map: route210North,
            encountersKey: 'sinnoh-route-210-west-towards-celestic-town',
            battles: [
                {
                    battleKey: 'ninja-boy-brennan',
                    x: 73.4,
                    y: 92.5,
                },
                {
                    battleKey: 'ninja-boy-fabian',
                    x: 85.9,
                    y: 91,
                },
                {
                    battleKey: 'ninja-boy-bruce',
                    x: 96.4,
                    y: 78.6,
                },
                {
                    battleKey: 'ninja-boy-joel',
                    fieldCondition: FieldCondition.Fog,
                    x: 88,
                    y: 30,
                },
                {
                    battleKey: 'ace-trainer-f-alyssa',
                    fieldCondition: FieldCondition.Fog,
                    x: 70.3,
                    y: 34.5,
                },
                {
                    customHeight: GEN_4_TRUE_DOUBLE_HEIGHT,
                    battleKey: 'double-team-zac-and-jen',
                    fieldCondition: FieldCondition.Fog,
                    x: 59.8,
                    y: 25.9,
                },
                {
                    battleKey: 'ace-trainer-m-ernest',
                    fieldCondition: FieldCondition.Fog,
                    x: 56.8,
                    y: 15.6,
                },
                {
                    battleKey: 'ninja-boy-davido',
                    fieldCondition: FieldCondition.Fog,
                    x: 20.3,
                    y: 14.5,
                },
                {
                    battleKey: 'black-belt-adam',
                    fieldCondition: FieldCondition.Fog,
                    x: 40.1,
                    y: 44,
                },
                {
                    battleKey: 'ninja-boy-nathan',
                    fieldCondition: FieldCondition.Fog,
                    x: 47.4,
                    y: 34.7,
                },
                {
                    battleKey: 'bird-keeper-brianna',
                    fieldCondition: FieldCondition.Fog,
                    x: 32.8,
                    y: 32.8,
                },
                {
                    battleKey: 'veteran-brian',
                    fieldCondition: FieldCondition.Fog,
                    x: 15.1,
                    y: 25.1,
                },
                {
                    battleKey: 'dragon-tamer-patrick',
                    fieldCondition: FieldCondition.Fog,
                    x: 83.9,
                    y: 15.7,
                },
            ],
        },
    ],
};

export default ROUTE_210;
