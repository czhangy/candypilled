import { sevenStarsRestaurant } from '@/lib/data/renegade-platinum/maps';
import { BattleMetadata, MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const SEVEN_STARS_RESTAURANT: Location = {
    name: 'Seven Stars Restaurant',
    map: sevenStarsRestaurant,
    mapAnchor: MapAnchor.Center,
    battles: [
        {
            battleKey: 'pi-kendrick-and-beauty-gabriela',
            metadata: [BattleMetadata.Double, BattleMetadata.Optional],
            customWidth: 54,
            x: 26.6,
            y: 80.6,
        },
        {
            battleKey: 'veteran-emanuel-and-lass-blythe',
            metadata: [BattleMetadata.Double, BattleMetadata.Optional],
            customWidth: 54,
            x: 9.2,
            y: 53.4,
        },
        {
            battleKey: 'collector-eugene-and-aroma-lady-alison',
            metadata: [BattleMetadata.Double, BattleMetadata.Optional],
            customWidth: 54,
            x: 32.8,
            y: 35.2,
        },
        {
            battleKey: 'artist-ismael-and-beauty-harley',
            metadata: [BattleMetadata.Double, BattleMetadata.Optional],
            customWidth: 54,
            x: 21,
            y: 8.5,
        },
        {
            battleKey: 'rich-boy-roman-and-lady-kylie',
            metadata: [BattleMetadata.Double, BattleMetadata.Optional],
            customWidth: 54,
            x: 50,
            y: 8.5,
        },
        {
            battleKey: 'gentleman-leonardo-and-socialite-rebecca',
            metadata: [BattleMetadata.Double, BattleMetadata.Optional],
            customWidth: 54,
            x: 79.4,
            y: 8.5,
        },
        {
            battleKey: 'school-kid-esteban-and-pokefan-meredith',
            metadata: [BattleMetadata.Double, BattleMetadata.Optional],
            customWidth: 54,
            x: 67.6,
            y: 35.8,
        },
        {
            battleKey: 'cameraman-darryl-and-reporter-valerie',
            metadata: [BattleMetadata.Double, BattleMetadata.Optional],
            customWidth: 54,
            x: 91.2,
            y: 53.9,
        },
        {
            battleKey: 'scientist-emilio-and-pkmn-breeder-kaylee',
            metadata: [BattleMetadata.Double, BattleMetadata.Optional],
            customWidth: 54,
            x: 73.5,
            y: 81.2,
        },
    ],
};

export default SEVEN_STARS_RESTAURANT;
