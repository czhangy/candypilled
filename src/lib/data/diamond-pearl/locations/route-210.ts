import { route210North, route210South } from '@/lib/data/diamond-pearl/maps';
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
                    x: 35.8,
                    y: 79.7,
                },
                {
                    battleKey: 'jogger-wyatt',
                    x: 86.2,
                    y: 75.1,
                },
                {
                    customHeight: 40,
                    battleKey: 'belle-and-pa-ava-and-matt',
                    x: 61.2,
                    y: 61.7,
                },
                {
                    customWidth: 36,
                    battleKey: 'twins-teri-and-tia',
                    x: 43.8,
                    y: 51.7,
                },
                {
                    battleKey: 'pkmn-breeder-m-kahlil',
                    x: 33.1,
                    y: 43.7,
                },
                {
                    battleKey: 'pkmn-breeder-f-amber',
                    x: 61,
                    y: 39.1,
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
                    x: 73.5,
                    y: 92.4,
                },
                {
                    battleKey: 'ninja-boy-fabian',
                    x: 86,
                    y: 90.8,
                },
                {
                    battleKey: 'ninja-boy-bruce',
                    x: 96.3,
                    y: 78.4,
                },
                {
                    battleKey: 'ninja-boy-joel',
                    fieldCondition: FieldCondition.Fog,
                    x: 87.9,
                    y: 30,
                },
                {
                    battleKey: 'ace-trainer-f-alyssa',
                    fieldCondition: FieldCondition.Fog,
                    x: 70.3,
                    y: 34.4,
                },
                {
                    customHeight: 40,
                    battleKey: 'double-team-zac-and-jen',
                    fieldCondition: FieldCondition.Fog,
                    x: 59.9,
                    y: 25.9,
                },
                {
                    battleKey: 'ace-trainer-m-ernest',
                    fieldCondition: FieldCondition.Fog,
                    x: 56.7,
                    y: 15.6,
                },
                {
                    battleKey: 'ninja-boy-davido',
                    fieldCondition: FieldCondition.Fog,
                    x: 20.4,
                    y: 14.4,
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
                    y: 34.6,
                },
                {
                    battleKey: 'bird-keeper-brianna',
                    fieldCondition: FieldCondition.Fog,
                    x: 32.9,
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
