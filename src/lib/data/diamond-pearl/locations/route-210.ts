import { route210North, route210South } from '@/lib/data/diamond-pearl/maps';
import { EncounterMethod, FieldCondition, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_210: Location = {
    name: 'Route 210',
    subareas: [
        {
            name: 'South',
            map: route210South,
            mapAnchor: MapAnchor.Bottom,
            encountersKey: 'sinnoh-route-210-south-towards-solaceon-town',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Maylene' },
                { method: EncounterMethod.HoneyTree, split: 'Maylene' },
            ],
            battles: [
                {
                    battleKey: 'rancher-marco',
                    x: 36.04,
                    y: 79.79,
                },
                {
                    battleKey: 'jogger-wyatt',
                    x: 86.04,
                    y: 75.1,
                },
                {
                    customHeight: 40,
                    battleKey: 'belle-and-pa-ava-and-matt',
                    x: 61.04,
                    y: 61.82,
                },
                {
                    customWidth: 36,
                    battleKey: 'twins-teri-and-tia',
                    x: 43.85,
                    y: 51.66,
                },
                {
                    battleKey: 'pkmn-breeder-m-kahlil',
                    x: 32.91,
                    y: 43.85,
                },
                {
                    battleKey: 'pkmn-breeder-f-amber',
                    x: 61.04,
                    y: 39.16,
                },
            ],
        },
        {
            name: 'North',
            map: route210North,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'sinnoh-route-210-west-towards-celestic-town',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Fantina' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.OldRod, split: 'Fantina' },
                { method: EncounterMethod.GoodRod, split: 'Fantina' },
                { method: EncounterMethod.HoneyTree, split: 'Fantina' },
            ],
            battles: [
                {
                    battleKey: 'ninja-boy-brennan',
                    x: 73.47,
                    y: 92.29,
                },
                {
                    battleKey: 'ninja-boy-fabian',
                    x: 85.97,
                    y: 90.72,
                },
                {
                    battleKey: 'ninja-boy-bruce',
                    x: 96.39,
                    y: 78.22,
                },
                {
                    battleKey: 'ninja-boy-joel',
                    fieldCondition: FieldCondition.Fog,
                    x: 88.05,
                    y: 29.79,
                },
                {
                    battleKey: 'ace-trainer-f-alyssa',
                    fieldCondition: FieldCondition.Fog,
                    x: 70.35,
                    y: 34.47,
                },
                {
                    customHeight: 40,
                    battleKey: 'double-team-zac-and-jen',
                    fieldCondition: FieldCondition.Fog,
                    x: 59.93,
                    y: 25.88,
                },
                {
                    battleKey: 'ace-trainer-m-ernest',
                    fieldCondition: FieldCondition.Fog,
                    x: 56.8,
                    y: 15.72,
                },
                {
                    battleKey: 'ninja-boy-davido',
                    fieldCondition: FieldCondition.Fog,
                    x: 20.35,
                    y: 14.16,
                },
                {
                    battleKey: 'black-belt-adam',
                    fieldCondition: FieldCondition.Fog,
                    x: 40.14,
                    y: 43.85,
                },
                {
                    battleKey: 'ninja-boy-nathan',
                    fieldCondition: FieldCondition.Fog,
                    x: 47.43,
                    y: 34.47,
                },
                {
                    battleKey: 'bird-keeper-brianna',
                    fieldCondition: FieldCondition.Fog,
                    x: 32.85,
                    y: 32.91,
                },
                {
                    battleKey: 'veteran-brian',
                    fieldCondition: FieldCondition.Fog,
                    x: 15.14,
                    y: 25.1,
                },
                {
                    battleKey: 'dragon-tamer-patrick',
                    fieldCondition: FieldCondition.Fog,
                    x: 83.89,
                    y: 15.72,
                },
            ],
        },
    ],
};

export default ROUTE_210;
