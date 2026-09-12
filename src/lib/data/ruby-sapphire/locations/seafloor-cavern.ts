import {
    seafloorCavernEntrance,
    seafloorCavernRoom1Aqua,
    seafloorCavernRoom1Magma,
    seafloorCavernRoom2,
    seafloorCavernRoom3Aqua,
    seafloorCavernRoom3Magma,
    seafloorCavernRoom4Aqua,
    seafloorCavernRoom4Magma,
    seafloorCavernRoom5,
    seafloorCavernRoom6,
    seafloorCavernRoom7,
    seafloorCavernRoom8,
    seafloorCavernRoom9Aqua,
    seafloorCavernRoom9Magma,
} from '@/lib/data/ruby-sapphire/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SEAFLOOR_CAVERN: Location = {
    name: 'Seafloor Cavern',
    subareas: [
        {
            name: 'Entrance',
            map: seafloorCavernEntrance,
            mapAnchor: MapAnchor.Center,
        },
        {
            name: 'Room 1',
            map: {
                Ruby: seafloorCavernRoom1Magma,
                Sapphire: seafloorCavernRoom1Aqua,
            },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-seafloor-cavern-1',
                    game: 'Ruby',
                    x: 42.5,
                    y: 30.14,
                },
                {
                    battleKey: 'team-aqua-grunt-m-seafloor-cavern-1',
                    game: 'Sapphire',
                    x: 42.5,
                    y: 30.14,
                },
                {
                    battleKey: 'team-magma-grunt-m-seafloor-cavern-2',
                    game: 'Ruby',
                    x: 77.5,
                    y: 48.89,
                },
                {
                    battleKey: 'team-aqua-grunt-m-seafloor-cavern-2',
                    game: 'Sapphire',
                    x: 77.5,
                    y: 48.89,
                },
            ],
        },
        {
            name: 'Room 2',
            map: seafloorCavernRoom2,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
        },
        {
            name: 'Room 3',
            map: {
                Ruby: seafloorCavernRoom3Magma,
                Sapphire: seafloorCavernRoom3Aqua,
            },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
            battles: [
                {
                    battleKey: 'magma-admin-courtney-seafloor-cavern',
                    game: 'Ruby',
                    x: 65.23,
                    y: 30.99,
                },
                {
                    battleKey: 'aqua-admin-shelly-seafloor-cavern',
                    game: 'Sapphire',
                    x: 65.23,
                    y: 30.99,
                },
            ],
        },
        {
            name: 'Room 4',
            map: {
                Ruby: seafloorCavernRoom4Magma,
                Sapphire: seafloorCavernRoom4Aqua,
            },
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
            battles: [
                {
                    battleKey: 'team-magma-grunt-m-seafloor-cavern-3',
                    game: 'Ruby',
                    x: 25,
                    y: 43.51,
                },
                {
                    battleKey: 'team-aqua-grunt-m-seafloor-cavern-3',
                    game: 'Sapphire',
                    x: 25,
                    y: 43.51,
                },
            ],
        },
        {
            name: 'Room 5',
            map: seafloorCavernRoom5,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
        },
        {
            name: 'Room 6',
            map: seafloorCavernRoom6,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
        },
        {
            name: 'Room 7',
            map: seafloorCavernRoom7,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
        },
        {
            name: 'Room 8',
            map: seafloorCavernRoom8,
            mapAnchor: MapAnchor.Center,
            encountersKey: 'seafloor-cavern',
        },
        {
            name: 'Room 9',
            map: {
                Ruby: seafloorCavernRoom9Magma,
                Sapphire: seafloorCavernRoom9Aqua,
            },
            mapAnchor: MapAnchor.Top,
            battles: [
                {
                    battleKey: 'magma-leader-maxie-seafloor-cavern',
                    game: 'Ruby',
                    x: 34.95,
                    y: 91.89,
                },
                {
                    battleKey: 'aqua-leader-archie-seafloor-cavern',
                    game: 'Sapphire',
                    x: 34.95,
                    y: 91.89,
                },
            ],
        },
    ],
};

export default SEAFLOOR_CAVERN;
