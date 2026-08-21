import { EncounterMethod } from '@/lib/static/enums';
import { Encounter } from '@/lib/static/types';

export const ENCOUNTERS: Record<string, Encounter[]> = {
    'sinnoh-route-201': [
        {
            species: 'turtwig',
            method: EncounterMethod.Starter,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
        {
            species: 'chimchar',
            method: EncounterMethod.Starter,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
        {
            species: 'piplup',
            method: EncounterMethod.Starter,
            minLevel: 5,
            maxLevel: 5,
            chance: null,
        },
    ],
};
