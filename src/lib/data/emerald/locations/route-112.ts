import { route112North, route112South } from '@/lib/data/emerald/maps';
import { EncounterMethod, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const ROUTE_112: Location = {
    name: 'Route 112',
    subareas: [
        {
            name: 'South',
            map: route112South,
            mapAnchor: MapAnchor.BottomRight,
            encountersKey: 'hoenn-route-112',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Flannery' },
            ],
            battles: [
                {
                    battleKey: 'camper-larry',
                    x: 73.75,
                    y: 73.36,
                },
                {
                    battleKey: 'picnicker-carol',
                    x: 56.25,
                    y: 65.86,
                },
                {
                    battleKey: 'hiker-trent',
                    x: 38.75,
                    y: 50.86,
                },
                {
                    battleKey: 'hiker-brice',
                    x: 61.25,
                    y: 35.86,
                },
            ],
            transitions: [
                {
                    height: 16,
                    location: 'Fiery Path',
                    width: 16,
                    x: 28.75,
                    y: 41.25,
                },
                {
                    height: 16,
                    location: 'Jagged Pass',
                    width: 32,
                    x: 17.5,
                    y: 66.25,
                },
                {
                    height: 96,
                    location: 'Route 111',
                    subarea: 'Desert',
                    width: 16,
                    x: 98.75,
                    y: 72.5,
                },
                {
                    height: 96,
                    location: 'Lavaridge Town',
                    width: 16,
                    x: 1.25,
                    y: 75,
                },
                {
                    height: 16,
                    location: 'Mt. Chimney',
                    subarea: 'Pre-Lavaridge',
                    width: 32,
                    x: 72.5,
                    y: 18.75,
                },
            ],
        },
        {
            name: 'North',
            map: route112North,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'hoenn-route-112',
            methodSplits: [
                { method: EncounterMethod.Grass, split: 'Flannery' },
            ],
            battles: [
                {
                    battleKey: 'kindler-bryant',
                    x: 78.75,
                    y: 36.72,
                },
                {
                    battleKey: 'aroma-lady-shayla',
                    x: 78.75,
                    y: 56.72,
                },
            ],
            transitions: [
                {
                    height: 48,
                    location: 'Route 111',
                    subarea: 'North',
                    width: 16,
                    x: 98.75,
                    y: 47.5,
                },
                {
                    height: 16,
                    location: 'Fiery Path',
                    width: 16,
                    x: 56.25,
                    y: 52.5,
                },
            ],
        },
    ],
};

export default ROUTE_112;
