import {
    route204North,
    route204South,
} from '@/lib/data/renegade-platinum/maps';
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
                { method: EncounterMethod.OldRod, split: 'Roark' },
                { method: EncounterMethod.GoodRod, split: 'Maylene' },
                { method: EncounterMethod.SuperRod, split: 'Candice' },
                { method: EncounterMethod.PokeRadar, split: 'Roark' },
            ],
            battles: [
                {
                    battleKey: 'lass-sarah',
                    x: 39.3,
                    y: 66.1,
                },
                {
                    battleKey: 'youngster-tyler',
                    x: 23.8,
                    y: 56.7,
                },
                {
                    battleKey: 'lass-samantha',
                    x: 35.9,
                    y: 25.5,
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
                { method: EncounterMethod.PokeRadar, split: 'Gardenia' },
            ],
            battles: [
                {
                    battleKey: 'aroma-lady-taylor',
                    x: 54.9,
                    y: 62.7,
                },
                {
                    battleKey: 'bug-catcher-brandon',
                    x: 70.5,
                    y: 40.8,
                },
                {
                    battleKey: 'twins-liv-and-liz',
                    customWidth: 36,
                    x: 50,
                    y: 22.7,
                },
            ],
        },
    ],
};

export default ROUTE_204;
