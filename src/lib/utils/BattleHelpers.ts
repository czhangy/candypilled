import { Battle, BattlePokemon } from '@/lib/static/types';

export default class BattleHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    static getKey(battle: Battle): string {
        return `${battle.trainerClass}::${battle.name}`;
    }

    static getTeam(battle: Battle, starter: string | null): BattlePokemon[] {
        const teamForStarter = starter
            ? battle.teamsByStarter?.[starter]
            : undefined;

        return teamForStarter ?? battle.team ?? [];
    }
}
