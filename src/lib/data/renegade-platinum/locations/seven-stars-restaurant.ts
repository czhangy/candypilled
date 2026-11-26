import { sevenStarsRestaurant } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SEVEN_STARS_RESTAURANT: Location = {
    name: 'Seven Stars Restaurant',
    map: sevenStarsRestaurant,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'pi-kendrick-and-beauty-gabriela',
            customWidth: 54,
            x: 26.65,
            y: 81.2,
        },
        {
            battleKey: 'veteran-emanuel-and-lass-blythe',
            customWidth: 54,
            x: 9.01,
            y: 53.93,
        },
        {
            battleKey: 'collector-eugene-and-aroma-lady-alison',
            customWidth: 54,
            x: 32.54,
            y: 35.75,
        },
        {
            battleKey: 'artist-ismael-and-beauty-harley',
            customWidth: 54,
            x: 20.77,
            y: 8.47,
        },
        {
            battleKey: 'rich-boy-roman-and-lady-kylie',
            customWidth: 54,
            x: 50.18,
            y: 8.47,
        },
        {
            battleKey: 'gentleman-leonardo-and-socialite-rebecca',
            customWidth: 54,
            x: 79.6,
            y: 8.47,
        },
        {
            battleKey: 'school-kid-esteban-and-pokefan-meredith',
            customWidth: 54,
            x: 67.83,
            y: 35.75,
        },
        {
            battleKey: 'cameraman-darryl-and-reporter-valerie',
            customWidth: 54,
            x: 91.36,
            y: 53.93,
        },
        {
            battleKey: 'scientist-emilio-and-pkmn-breeder-kaylee',
            customWidth: 54,
            x: 73.71,
            y: 81.2,
        },
    ],
};

export default SEVEN_STARS_RESTAURANT;
