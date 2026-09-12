import { Game, PersonalBest } from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
import LocalStorageHelpers from '@/lib/utils/LocalStorageHelpers';
import StringHelpers from '@/lib/utils/StringHelpers';

export default class PersonalBestHelpers {
    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly STORAGE_KEY = 'candypilled-personal-bests';
    private static readonly EMPTY: PersonalBest = {
        battleKey: null,
        isGameClear: false,
    };

    // Whether candidate represents strictly more progress than current, per
    // gender's battle order — a game clear beats every battleKey, and a
    // later battle position beats an earlier one.
    private static isBetter(
        game: Game,
        gender: 'male' | 'female' | undefined,
        candidate: PersonalBest,
        current: PersonalBest
    ): boolean {
        if (current.isGameClear) return false;
        if (candidate.isGameClear) return true;
        if (!candidate.battleKey) return false;
        if (!current.battleKey) return true;

        return (
            BattleHelpers.getBattlePosition(game, candidate.battleKey, gender) >
            BattleHelpers.getBattlePosition(game, current.battleKey, gender)
        );
    }

    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** game's stored personal best, or the empty record if none is saved yet. */
    static get(game: Game): PersonalBest {
        const stored = LocalStorageHelpers.getItem<
            Record<string, PersonalBest>
        >(PersonalBestHelpers.STORAGE_KEY, {});
        return (
            stored[StringHelpers.toSlug(game.name)] ?? PersonalBestHelpers.EMPTY
        );
    }

    /** Persists candidate as game's personal best only if it represents more progress (per gender's battle order) than what's currently stored. */
    static async considerCandidate(
        game: Game,
        gender: 'male' | 'female' | undefined,
        candidate: PersonalBest
    ): Promise<void> {
        const current = PersonalBestHelpers.get(game);
        if (!PersonalBestHelpers.isBetter(game, gender, candidate, current)) {
            return;
        }

        const stored = LocalStorageHelpers.getItem<
            Record<string, PersonalBest>
        >(PersonalBestHelpers.STORAGE_KEY, {});
        stored[StringHelpers.toSlug(game.name)] = candidate;
        LocalStorageHelpers.setItem(PersonalBestHelpers.STORAGE_KEY, stored);
    }
}
