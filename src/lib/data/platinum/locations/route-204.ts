import { route204North, route204South } from '@/lib/data/platinum/maps';
import { GEN_4_TRUE_DOUBLE_WIDTH } from '@/lib/static/constants';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_204: Location = {
    name: 'Route 204',
    subareas: [
        {
            name: 'South',
            map: route204South,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-204-south-towards-jubilife-city',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Roark' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.OldRod, split: 'Roark' },
            ],
            battles: [
                {
                    battleKey: 'lass-sarah',
                    x: 39.16,
                    y: 65.82,
                },
                {
                    battleKey: 'youngster-tyler',
                    x: 23.54,
                    y: 56.45,
                },
                {
                    battleKey: 'lass-samantha',
                    x: 36.04,
                    y: 25.2,
                },
            ],
        },
        {
            name: 'North',
            map: route204North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'sinnoh-route-204-north-towards-floaroma-town',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Gardenia' },
                { method: EncounterMethod.Surf, split: 'Byron' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.OldRod, split: 'Gardenia' },
            ],
            battles: [
                {
                    battleKey: 'aroma-lady-taylor',
                    x: 54.79,
                    y: 62.7,
                },
                {
                    battleKey: 'bug-catcher-brandon',
                    x: 70.41,
                    y: 40.82,
                },
                {
                    customWidth: GEN_4_TRUE_DOUBLE_WIDTH,
                    battleKey: 'twins-liv-and-liz',
                    x: 50.1,
                    y: 22.07,
                },
            ],
        },
    ],
};

export default ROUTE_204;
