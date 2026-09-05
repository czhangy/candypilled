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
                    x: 2.5,
                    y: 24.2,
                },
                {
                    battleKey: 'picnicker-tori',
                    x: 5.8,
                    y: 24.1,
                },
                {
                    battleKey: 'hiker-reginald',
                    x: 18.2,
                    y: 65.5,
                },
                {
                    battleKey: 'hiker-lorenzo',
                    x: 21.4,
                    y: 65.5,
                },
                {
                    battleKey: 'lass-cassidy',
                    x: 2.5,
                    y: 72.5,
                },
                {
                    battleKey: 'youngster-wayne',
                    x: 5.8,
                    y: 72.5,
                },
                {
                    battleKey: 'picnicker-ana',
                    x: 76.5,
                    y: 52,
                },
                {
                    battleKey: 'camper-parker',
                    x: 80.7,
                    y: 52,
                },
                {
                    battleKey: 'collector-terry',
                    x: 95.3,
                    y: 82.9,
                },
                {
                    battleKey: 'ruin-maniac-gerald',
                    x: 97.4,
                    y: 82.9,
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
