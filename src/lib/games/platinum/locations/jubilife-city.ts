import { jubilifeCity } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const JUBILIFE_CITY: Location = {
    name: 'Jubilife City',
    map: jubilifeCity,
    battles: [
        {
            isTag: true,
            isDoubleHeightMarker: true,
            trainerClass: 'Galactic Grunt M and Galactic Grunt M',
            name: '1',
            team: [
                {
                    name: 'Glameow',
                    ability: 1,
                    level: 11,
                    nature: Nature.Rash,
                },
                {
                    name: 'Stunky',
                    ability: 1,
                    level: 11,
                    nature: Nature.Timid,
                },
            ],
            x: 71.2,
            y: 5.8,
        },
    ],
};

export default JUBILIFE_CITY;
