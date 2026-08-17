import { trainerSchool } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

// TODO: map is a placeholder — replace with a real screenshot and pick a
// real mapAnchor once one exists.
const TRAINER_SCHOOL: Location = {
    name: 'Trainer School',
    map: trainerSchool,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'trainer-school',
};

export default TRAINER_SCHOOL;
