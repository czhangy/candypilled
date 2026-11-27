import { rustboroCityBrendan, rustboroCityMay } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const RUSTBORO_CITY: Location = {
    name: 'Rustboro City',
    map: { male: rustboroCityMay, female: rustboroCityBrendan },
    mapAnchor: MapAnchor.Bottom,
    encountersKey: 'rustboro-city',
    methodSplits: [
        { method: EncounterMethod.Trade, split: 'Roxanne' },
        { method: EncounterMethod.Gift, split: 'Norman' },
    ],
    battles: [
        {
            battleKey: 'pkmn-trainer-may-rustboro',
            gender: 'male',
            x: 41.25,
            y: 83.91,
        },
        {
            battleKey: 'pkmn-trainer-brendan-rustboro',
            gender: 'female',
            x: 41.25,
            y: 83.91,
        },
    ],
    transitions: [
        {
            height: 16,
            location: 'Route 115',
            subarea: 'South',
            width: 80,
            x: 53.75,
            y: 0.83,
        },
        { height: 112, location: 'Route 116', width: 16, x: 98.75, y: 19.17 },
        { height: 16, location: 'Rustboro Gym', width: 16, x: 68.75, y: 32.5 },
        {
            height: 16,
            location: 'Route 104',
            subarea: 'North',
            width: 128,
            x: 40,
            y: 99.17,
        },
        {
            height: 16,
            location: 'Route 104',
            subarea: 'North',
            width: 16,
            x: 83.75,
            y: 99.17,
        },
    ],
};

export default RUSTBORO_CITY;
