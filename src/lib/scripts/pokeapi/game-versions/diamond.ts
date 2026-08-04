import { GameVersion } from '@/lib/static/types';

// TODO: populate exclusions/overrides/merges/splits/manualEncounters once
// Diamond's PokeAPI location-area data has been reviewed, following
// platinum.ts's pattern. Diamond and Pearl differ from each other only in
// wild encounter tables, but each still needs its own pass here since
// PokeAPI location/condition slugs aren't guaranteed to match Platinum's.
export const diamond: GameVersion = {
    id: 'diamond',
    label: 'Diamond',
    version: 'diamond',
    region: 'sinnoh',
    generation: 4,
};
