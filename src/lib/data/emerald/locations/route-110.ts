import { route110Brendan, route110May } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_110: Location = {
    name: 'Route 110',
    map: { male: route110May, female: route110Brendan },
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'hoenn-route-110',
    methodSplits: [
        { method: EncounterMethod.Grass, split: 'Brawly' },
        { method: EncounterMethod.GoodRod, split: 'Winona' },
        { method: EncounterMethod.OldRod, split: 'Brawly' },
        { method: EncounterMethod.Surf, split: 'Winona' },
        { method: EncounterMethod.SuperRod, split: 'Winona' },
    ],
    battles: [
        {
            battleKey: 'pokefan-f-isabel',
            x: 26.25,
            y: 76.34,
        },
        {
            battleKey: 'pokefan-m-kaleb',
            x: 18.75,
            y: 76.34,
        },
        {
            battleKey: 'youngster-timmy',
            x: 83.75,
            y: 69.34,
        },
        {
            battleKey: 'pkmn-trainer-may-route-110',
            gender: 'male',
            x: 86.25,
            y: 54.28,
        },
        {
            battleKey: 'pkmn-trainer-brendan-route-110',
            gender: 'female',
            x: 86.25,
            y: 54.28,
        },
        {
            battleKey: 'collector-edwin',
            x: 86.25,
            y: 40.34,
        },
        {
            battleKey: 'guitarist-joseph',
            x: 91.25,
            y: 40.34,
        },
        {
            battleKey: 'psychic-m-edward',
            x: 8.75,
            y: 39.34,
        },
        {
            battleKey: 'triathlete-biker-f-alyssa',
            x: 26.25,
            y: 39.34,
        },
        {
            battleKey: 'fisherman-dale',
            x: 26.25,
            y: 19.34,
        },
        {
            battleKey: 'psychic-f-jaclyn',
            x: 83.75,
            y: 15.34,
        },
        {
            battleKey: 'triathlete-biker-f-abigail',
            x: 76.25,
            y: 31.34,
        },
        {
            battleKey: 'triathlete-biker-m-anthony',
            x: 48.75,
            y: 31.34,
        },
        {
            battleKey: 'triathlete-biker-m-benjamin',
            x: 41.25,
            y: 55.34,
        },
        {
            battleKey: 'triathlete-biker-f-jasmine',
            x: 41.25,
            y: 73.34,
        },
        {
            battleKey: 'triathlete-biker-m-jacob',
            x: 53.75,
            y: 78.34,
        },
    ],
    transitions: [
        { height: 16, location: 'Mauville City', width: 112, x: 38.75, y: 0.5 },
        {
            height: 16,
            location: 'New Mauville',
            subarea: 'Entrance',
            width: 16,
            x: 88.75,
            y: 24.5,
        },
        {
            height: 64,
            location: 'Route 103',
            subarea: 'East',
            width: 16,
            x: 1.25,
            y: 69,
        },
        {
            height: 16,
            location: 'Trick House',
            subarea: 'Puzzle 1',
            width: 16,
            x: 28.75,
            y: 66.5,
        },
        {
            height: 16,
            location: 'Slateport City',
            subarea: 'City',
            width: 80,
            x: 43.75,
            y: 99.5,
        },
    ],
};

export default ROUTE_110;
