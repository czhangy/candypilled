import {
    waywardCave1f,
    waywardCaveB1f,
} from '@/lib/data/renegade-platinum/maps';
import { Location } from '@/lib/static/types';

const WAYWARD_CAVE: Location = {
    name: 'Wayward Cave',
    subareas: [
        {
            name: '1F',
            map: waywardCave1f,
            encountersKey: 'wayward-cave',
            tagPartner: [{ battleKey: 'pkmn-trainer-mira-tag' }],
            battles: [
                {
                    battleKey: 'pkmn-trainer-mira',
                    x: 40.1,
                    y: 72.7,
                },
                {
                    battleKey: 'camper-diego',
                    x: 2.6,
                    y: 24.4,
                },
                {
                    battleKey: 'picnicker-tori',
                    x: 5.9,
                    y: 24.4,
                },
                {
                    battleKey: 'lass-cassidy',
                    x: 2.6,
                    y: 72.6,
                },
                {
                    battleKey: 'youngster-wayne',
                    x: 5.9,
                    y: 72.6,
                },
                {
                    battleKey: 'hiker-reginald',
                    x: 18.2,
                    y: 65.4,
                },
                {
                    battleKey: 'hiker-lorenzo',
                    x: 21.5,
                    y: 65.4,
                },
                {
                    battleKey: 'picnicker-ana',
                    x: 76.4,
                    y: 51.9,
                },
                {
                    battleKey: 'camper-parker',
                    x: 80.8,
                    y: 51.9,
                },
                {
                    battleKey: 'collector-terry',
                    x: 95.4,
                    y: 82.9,
                },
                {
                    battleKey: 'ruin-maniac-gerald',
                    x: 97.5,
                    y: 82.9,
                },
            ],
        },
        {
            name: 'B1F',
            map: waywardCaveB1f,
            encountersKey: 'wayward-cave',
        },
    ],
};

export default WAYWARD_CAVE;
