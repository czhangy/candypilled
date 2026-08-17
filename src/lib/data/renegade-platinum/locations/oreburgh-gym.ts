import { oreburghGym } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists. No battles are wired yet — Phase 6
// (TRAiNERS tab) hasn't started.
const OREBURGH_GYM: Location = {
    name: 'Oreburgh Gym',
    map: oreburghGym,
    mapAnchor: MapAnchor.Center,
};

export default OREBURGH_GYM;
