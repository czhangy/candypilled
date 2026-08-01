import {
    victoryRoad1f,
    victoryRoad2f,
    victoryRoadB1f,
} from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const VICTORY_ROAD: Location = {
    name: 'Victory Road',
    subareas: [
        {
            name: '1F',
            map: victoryRoad1f,
            encountersKey: 'sinnoh-victory-road-1f',
            battles: [
                {
                    isOptional: true,
                    battleKey: 'psychic-m::Bryce',
                    x: 13.3,
                    y: 90.7,
                },
                {
                    isOptional: true,
                    battleKey: 'bird-keeper::Hana',
                    x: 58.7,
                    y: 74.9,
                },
                {
                    battleKey: 'ace-trainer-f::Mariah',
                    x: 18.9,
                    y: 55.1,
                },
                {
                    battleKey: 'black-belt::Miles',
                    x: 56.5,
                    y: 55.9,
                },
                {
                    battleKey: 'veteran::Edgar',
                    x: 51.1,
                    y: 36.1,
                },
                {
                    battleKey: 'dragon-tamer::Clinton',
                    x: 75.5,
                    y: 39.5,
                },
            ],
        },
        {
            name: '2F',
            map: victoryRoad2f,
            encountersKey: 'sinnoh-victory-road-2f',
            battles: [
                {
                    battleKey: 'ace-trainer-m::Omar',
                    x: 8.5,
                    y: 68.1,
                },
                {
                    battleKey: 'ace-trainer-f::Sydney',
                    x: 25.2,
                    y: 92.7,
                },
                {
                    isOptional: true,
                    battleKey: 'veteran::Clayton',
                    x: 38.4,
                    y: 73.3,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customHeight: 40,
                    battleKey: 'double-team::Al & Kay',
                    x: 95,
                    y: 50,
                },
            ],
        },
        {
            name: 'B1F',
            map: victoryRoadB1f,
            encountersKey: 'sinnoh-victory-road-b1f',
            battles: [
                {
                    battleKey: 'psychic-f::Valencia',
                    x: 55.2,
                    y: 66.7,
                },
                {
                    isOptional: true,
                    isTrueDouble: true,
                    customWidth: 38,
                    battleKey: 'double-team::Jo & Pat',
                    x: 76.8,
                    y: 89.5,
                },
                {
                    isOptional: true,
                    battleKey: 'ace-trainer-m::Henry',
                    x: 80.1,
                    y: 45.4,
                },
                {
                    battleKey: 'dragon-tamer::Ondrej',
                    x: 24.9,
                    y: 14.3,
                },
            ],
        },
    ],
};

export default VICTORY_ROAD;
