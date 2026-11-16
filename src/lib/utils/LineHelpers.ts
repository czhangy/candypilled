import { MAX_IV, MIN_IV } from '@/lib/static/constants';
import { Nature, PokemonStatus } from '@/lib/static/enums';
import {
    BattlePokemon,
    CaughtPokemon,
    Game,
    GameDataSource,
    LinePokemon,
    LineSlot,
    LineTurn,
    StatValues,
} from '@/lib/static/types';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';
import StatHelpers from '@/lib/utils/StatHelpers';

export default class LineHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /** caught as a line builder Pokémon on the player's side, at full HP with no status and its current held item. */
    static getBoxPokemon(game: Game, caught: CaughtPokemon): LinePokemon {
        const slug = PokemonHelpers.getDisplaySlug(game.dataSource, caught);
        const maxHp = LineHelpers.getMaxHp(
            game,
            slug,
            caught.level,
            StatHelpers.normalizeStats(caught.ivs, MAX_IV),
            StatHelpers.normalizeStats(caught.evs, 0),
            caught.nature
        );

        return {
            currentHp: maxHp,
            heldItem: caught.heldItem,
            id: `player:${caught.location}`,
            maxHp,
            moves: caught.moves,
            side: 'player',
            slug,
            speciesSlug: caught.slug,
            status: '',
        };
    }

    /** the index-th member of the opposing team as a line builder Pokémon, at full HP with no status and the held item the trainer gives it. */
    static getTrainerPokemon(
        game: Game,
        mon: BattlePokemon,
        index: number
    ): LinePokemon {
        const slug = PokemonHelpers.getDisplaySlug(game.dataSource, mon);
        const maxHp = LineHelpers.getMaxHp(
            game,
            slug,
            mon.level,
            StatHelpers.normalizeStats(mon.ivs, MIN_IV),
            StatHelpers.normalizeStats(mon.evs, 0),
            mon.nature
        );

        return {
            currentHp: maxHp,
            heldItem: mon.heldItem,
            id: `trainer:${index}`,
            maxHp,
            moves:
                mon.moves ??
                PokemonHelpers.getMovesAtLevel(
                    game.dataSource,
                    mon.slug,
                    game.version,
                    mon.level
                ),
            side: 'trainer',
            slug,
            speciesSlug: mon.slug,
            status: '',
        };
    }

    /** Every living Pokémon in caughtPokemon as a line builder Pokémon on the player's side (see getBoxPokemon). */
    static getBoxPokemonList(
        game: Game,
        caughtPokemon: CaughtPokemon[]
    ): LinePokemon[] {
        return caughtPokemon
            .filter((caught) => caught.status === PokemonStatus.Alive)
            .map((caught) => LineHelpers.getBoxPokemon(game, caught));
    }

    /** pokemon's display name in dataSource, falling back to its slug. */
    static getName(dataSource: GameDataSource, pokemon: LinePokemon): string {
        return (
            PokemonHelpers.getPokemonData(dataSource, pokemon.slug)?.name ??
            pokemon.slug
        );
    }

    /** A line slot with nobody on the field and nothing flagged. */
    static getBlankSlot(): LineSlot {
        return {
            appliedStatus: '',
            isItemCleared: false,
            isKo: false,
            isStatusCleared: false,
            move: undefined,
            pokemonId: undefined,
        };
    }

    /** A turn with nothing in it. */
    static getBlankTurn(): LineTurn {
        return {
            isPlayerFirst: false,
            isRisky: false,
            player: LineHelpers.getBlankSlot(),
            text: '',
            trainer: LineHelpers.getBlankSlot(),
        };
    }

    /** Turn 1, which always opens with each side's first Pokémon (by id, if any) on the field. */
    static getFirstTurn(
        playerLeadId: string | undefined,
        trainerLeadId: string | undefined
    ): LineTurn {
        return {
            ...LineHelpers.getBlankTurn(),
            player: { ...LineHelpers.getBlankSlot(), pokemonId: playerLeadId },
            trainer: {
                ...LineHelpers.getBlankSlot(),
                pokemonId: trainerLeadId,
            },
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static getMaxHp(
        game: Game,
        slug: string,
        level: number,
        ivs: StatValues,
        evs: StatValues,
        nature: Nature | undefined
    ): number {
        const baseStats = PokemonHelpers.getPokemonStats(
            game.dataSource,
            slug,
            game.generation
        );
        if (!baseStats) return 0;

        return StatHelpers.calculateStats(baseStats, level, ivs, evs, nature)
            .hp;
    }
}
