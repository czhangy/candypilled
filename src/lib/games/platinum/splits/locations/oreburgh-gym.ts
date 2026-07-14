import { oreburghGym } from '@/lib/assets/platinum/locations';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    battles: [
        {
            isBoss: true,
            trainerClass: 'Gym Leader',
            name: 'Roark',
            team: [
                {
                    name: 'Geodude',
                    level: 12,
                    moves: ['Stealth Rock', 'Rock Throw'],
                    nature: Nature.Lax,
                    ability: 'Rock Head',
                    ivs: 6,
                },
                {
                    name: 'Onix',
                    level: 12,
                    moves: ['Stealth Rock', 'Rock Throw', 'Screech'],
                    nature: Nature.Bold,
                    ability: 'Rock Head',
                    ivs: 6,
                },
                {
                    name: 'Cranidos',
                    level: 14,
                    moves: ['Headbutt', 'Pursuit', 'Leer'],
                    nature: Nature.Jolly,
                    ability: 'Mold Breaker',
                    ivs: 6,
                },
            ],
            items: { count: 2, name: 'Potion' },
            x: 46.6,
            y: 22.8,
        },
    ],
};

export default OREBURGH_GYM;
