import { waywardCave1f, waywardCaveB1f } from '@/lib/data/platinum/maps';
import { Location } from '@/lib/static/types';

const WAYWARD_CAVE: Location = {
    name: 'Wayward Cave',
    subareas: [
        {
            name: '1F',
            map: waywardCave1f,
            encountersKey: 'wayward-cave-1f',
            tagPartner: [{ battleKey: 'pkmn-trainer-mira-tag' }],
            battles: [
                {
                    battleKey: 'camper-diego',
                    x: 3,
                    y: 26.5,
                },
                {
                    battleKey: 'picnicker-tori',
                    x: 6.4,
                    y: 26.5,
                },
                {
                    battleKey: 'hiker-reginald',
                    x: 18.7,
                    y: 67.3,
                },
                {
                    battleKey: 'hiker-lorenzo',
                    x: 21.6,
                    y: 67.3,
                },
                {
                    battleKey: 'lass-cassidy',
                    x: 3,
                    y: 75,
                },
                {
                    battleKey: 'youngster-wayne',
                    x: 6.4,
                    y: 75,
                },
                {
                    battleKey: 'picnicker-ana',
                    x: 76.3,
                    y: 54,
                },
                {
                    battleKey: 'camper-parker',
                    x: 80.5,
                    y: 54,
                },
                {
                    battleKey: 'collector-terry',
                    x: 94.9,
                    y: 83.3,
                },
                {
                    battleKey: 'ruin-maniac-gerald',
                    x: 97,
                    y: 83.3,
                },
            ],
        },
        {
            name: 'B1F',
            map: waywardCaveB1f,
            encountersKey: 'wayward-cave-b1f',
        },
    ],
};

export default WAYWARD_CAVE;
