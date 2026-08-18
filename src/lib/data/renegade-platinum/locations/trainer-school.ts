import { trainerSchool } from '@/lib/data/renegade-platinum/maps';
import { MapAnchor } from '@/lib/static/enums';
import { Location } from '@/lib/static/types';

const TRAINER_SCHOOL: Location = {
    name: 'Trainer School',
    map: trainerSchool,
    mapAnchor: MapAnchor.Center,
    encountersKey: 'trainer-school',
};

export default TRAINER_SCHOOL;
