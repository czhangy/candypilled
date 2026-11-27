import { jaggedPass } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JAGGED_PASS: Location = {
    name: 'Jagged Pass',
    map: jaggedPass,
    mapAnchor: MapAnchor.Top,
    encountersKey: 'jagged-pass',
    methodSplits: [{ method: EncounterMethod.Cave, split: 'Flannery' }],
    battles: [
        {
            battleKey: 'hiker-eric',
            x: 35,
            y: 18.14,
        },
        {
            battleKey: 'team-magma-grunt-m-jagged-pass',
            x: 55,
            y: 42.05,
        },
        {
            battleKey: 'picnicker-diana',
            x: 31.67,
            y: 46.4,
        },
        {
            battleKey: 'picnicker-autumn',
            x: 48.33,
            y: 55.1,
        },
        {
            battleKey: 'triathlete-biker-m-julio',
            x: 61.67,
            y: 55.1,
        },
        {
            battleKey: 'camper-ethan',
            x: 55,
            y: 76.83,
        },
    ],
    transitions: [
        {
            height: 16,
            location: 'Mt. Chimney',
            subarea: 'Pre-Lavaridge',
            width: 32,
            x: 46.67,
            y: 11.96,
        },
        {
            height: 16,
            location: 'Magma Hideout',
            subarea: 'Entrance',
            width: 16,
            x: 55,
            y: 40.22,
        },
        {
            height: 16,
            location: 'Route 112',
            subarea: 'South',
            width: 32,
            x: 50,
            y: 88.04,
        },
    ],
};

export default JAGGED_PASS;
