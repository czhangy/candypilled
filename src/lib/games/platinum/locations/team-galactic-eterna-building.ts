import {
    teamGalacticEternaBuilding1f,
    teamGalacticEternaBuilding2f,
    teamGalacticEternaBuilding3f,
    teamGalacticEternaBuilding4f,
} from '@/lib/games/platinum/maps';
import { Location } from '@/lib/static/types';

const TEAM_GALACTIC_ETERNA_BUILDING: Location = {
    name: 'Team Galactic Eterna Building',
    subareas: [
        {
            name: '1F',
            map: teamGalacticEternaBuilding1f,
        },
        {
            name: '2F',
            map: teamGalacticEternaBuilding2f,
        },
        {
            name: '3F',
            map: teamGalacticEternaBuilding3f,
        },
        {
            name: '4F',
            map: teamGalacticEternaBuilding4f,
        },
    ],
};

export default TEAM_GALACTIC_ETERNA_BUILDING;
