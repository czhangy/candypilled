import { floaromaMeadow } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const FLOAROMA_MEADOW: Location = {
    name: 'Floaroma Meadow',
    map: floaromaMeadow,
    encountersKey: 'floaroma-meadow',
    battles: [
        {
            isBackToBack: true,
            trainerClass: 'Galactic Grunt M',
            name: '2',
            team: [
                {
                    name: 'Stunky',
                    ability: 1,
                    level: 13,
                    nature: Nature.Hasty,
                },
            ],

            x: 13.9,
            y: 48.1,
        },
        {
            isBackToBack: true,
            trainerClass: 'Galactic Grunt M',
            name: '3',
            team: [
                {
                    name: 'Zubat',
                    ability: 1,
                    level: 11,
                    nature: Nature.Gentle,
                },
                {
                    name: 'Zubat',
                    ability: 1,
                    level: 11,
                    nature: Nature.Gentle,
                },
            ],
            x: 11.9,
            y: 48.1,
        },
    ],
};

export default FLOAROMA_MEADOW;
