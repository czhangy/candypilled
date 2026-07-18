import { valleyWindworksExterior } from '@/lib/games/platinum/maps';
import { Nature } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const VALLEY_WINDWORKS_EXTERIOR: Location = {
    name: 'Valley Windworks Exterior',
    map: valleyWindworksExterior,
    encountersKey: 'valley-windworks',
    battles: [
        {
            trainerClass: 'Galactic Grunt M',
            name: '1',
            team: [
                {
                    name: 'Glameow',
                    ability: 1,
                    level: 13,
                    moves: ['Fake Out', 'Scratch', 'Growl', 'Hypnosis'],
                    nature: Nature.Lax,
                },
            ],
            x: 61.2,
            y: 44.9,
        },
    ],
};

export default VALLEY_WINDWORKS_EXTERIOR;
