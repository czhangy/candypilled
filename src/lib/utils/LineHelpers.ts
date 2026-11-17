import { LINE_SIDES, MAX_IV, MIN_IV } from '@/lib/static/constants';
import { BattleMetadata, Nature, PokemonStatus } from '@/lib/static/enums';
import {
    BattlePokemon,
    CaughtPokemon,
    Game,
    GameDataSource,
    LineBattle,
    LinePokemon,
    LinePosition,
    LineSide,
    LineSlot,
    LineTurn,
    StatValues,
} from '@/lib/static/types';
import BattleHelpers from '@/lib/utils/BattleHelpers';
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
            boundSlot: undefined,
            currentHp: maxHp,
            heldItem: caught.heldItem,
            id: `player:${caught.location}`,
            isFixed: false,
            maxHp,
            moves: caught.moves,
            side: 'player',
            slug,
            speciesSlug: caught.slug,
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

    /** What the battle keyed by battleKey puts on the field: two slots per side in a double, true double or tag battle (one otherwise), the player's tag partner's team, and the opposing team. A double or tag battle's two opposing trainers each own one slot, and the tag partner owns the player's second. Empty if battleKey is undefined or unknown. */
    static getBattle(
        game: Game,
        battleKey: string | undefined,
        starter: string,
        gender: 'male' | 'female' | undefined
    ): LineBattle {
        const data = battleKey ? game.battles[battleKey] : undefined;
        if (!battleKey || !data) {
            return { allyPokemon: [], slotCount: 1, trainerPokemon: [] };
        }

        const groups = BattleHelpers.getTeamGroups(
            { battleKey, x: 0, y: 0 },
            starter,
            game
        );
        const has = (metadata: BattleMetadata): boolean =>
            data.metadata.includes(metadata);
        const isTag = has(BattleMetadata.Tag);
        const hasSplitTrainers =
            (has(BattleMetadata.Double) || isTag) && groups.length > 1;
        const partnerKey = isTag
            ? BattleHelpers.getTagPartnerKey(game, battleKey, gender)
            : undefined;

        return {
            allyPokemon: BattleHelpers.getTagPartnerTeam(
                game,
                partnerKey,
                starter
            ).map((mon, index) =>
                LineHelpers.getBattlePokemon(game, mon, 'player', index, 1)
            ),
            slotCount:
                isTag ||
                has(BattleMetadata.Double) ||
                has(BattleMetadata.TrueDouble)
                    ? 2
                    : 1,
            trainerPokemon: groups
                .flatMap((group, groupIndex) =>
                    group.teams
                        .flatMap((row) => row.team)
                        .map((mon) => ({
                            boundSlot: hasSplitTrainers
                                ? groupIndex
                                : undefined,
                            mon,
                        }))
                )
                .map(({ boundSlot, mon }, index) =>
                    LineHelpers.getBattlePokemon(
                        game,
                        mon,
                        'trainer',
                        index,
                        boundSlot
                    )
                ),
        };
    }

    /** mon, the index-th Pokémon a battle provides for side, as a line builder Pokémon at full HP with no status and the held item the battle gives it. */
    static getBattlePokemon(
        game: Game,
        mon: BattlePokemon,
        side: LineSide,
        index: number,
        boundSlot: number | undefined
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
            boundSlot,
            currentHp: maxHp,
            heldItem: mon.heldItem,
            id: `${side === 'player' ? 'ally' : 'trainer'}:${index}`,
            isFixed: true,
            maxHp,
            moves:
                mon.moves ??
                PokemonHelpers.getMovesAtLevel(
                    game.dataSource,
                    mon.slug,
                    game.version,
                    mon.level
                ),
            side,
            slug,
            speciesSlug: mon.slug,
            status: '',
        };
    }

    /** The slot the player's own picks are limited to in battle: the first, when an NPC ally fills the second; otherwise any. */
    static getPickSlot(battle: LineBattle): number | undefined {
        return battle.allyPokemon.length > 0 ? 0 : undefined;
    }

    /** Every Pokémon on side in battle, given the player's own picks: the picks then the ally for the player's side, or the opposing team. */
    static getSideRoster(
        battle: LineBattle,
        playerPokemon: LinePokemon[],
        side: LineSide
    ): LinePokemon[] {
        return side === 'player'
            ? [...playerPokemon, ...battle.allyPokemon]
            : battle.trainerPokemon;
    }

    /** Whether pokemon is allowed in slot. */
    static canOccupy(pokemon: LinePokemon, slot: number): boolean {
        return pokemon.boundSlot === undefined || pokemon.boundSlot === slot;
    }

    /** The id of the Pokémon that leads each of slotCount slots from roster, in order: the first one that can fill the slot and isn't already leading another. Undefined for a slot nobody can lead. */
    static getLeadIds(
        roster: LinePokemon[],
        slotCount: number
    ): (string | undefined)[] {
        const used: string[] = [];

        return Array.from({ length: slotCount }, (_, slot) => {
            const lead = roster.find(
                (pokemon) =>
                    LineHelpers.canOccupy(pokemon, slot) &&
                    !used.includes(pokemon.id)
            );
            if (lead) used.push(lead.id);
            return lead?.id;
        });
    }

    /** pokemon's display name in dataSource, falling back to its slug. */
    static getName(dataSource: GameDataSource, pokemon: LinePokemon): string {
        return (
            PokemonHelpers.getPokemonData(dataSource, pokemon.slug)?.name ??
            pokemon.slug
        );
    }

    /** The position at index on side. */
    static getPosition(side: LineSide, index: number): LinePosition {
        return `${side}:${index}`;
    }

    /** position's side and slot index. */
    static parsePosition(position: LinePosition): {
        index: number;
        side: LineSide;
    } {
        const [side, index] = position.split(':');
        return { index: Number(index), side: side as LineSide };
    }

    /** Every slot in turn with the position it's at, player side first. */
    static getTurnSlots(turn: LineTurn): {
        index: number;
        position: LinePosition;
        side: LineSide;
        slot: LineSlot;
    }[] {
        return LINE_SIDES.flatMap((side) =>
            turn[side].map((slot, index) => ({
                index,
                position: LineHelpers.getPosition(side, index),
                side,
                slot,
            }))
        );
    }

    /** Turn 1 of a line in battle with the player's picks: each side's leads on the field. */
    static getOpeningTurn(
        battle: LineBattle,
        playerPokemon: LinePokemon[]
    ): LineTurn {
        const leadIds = (side: LineSide): (string | undefined)[] =>
            LineHelpers.getLeadIds(
                LineHelpers.getSideRoster(battle, playerPokemon, side),
                battle.slotCount
            );

        return LineHelpers.getFirstTurn(leadIds('player'), leadIds('trainer'));
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
            target: undefined,
        };
    }

    /** A turn with nothing in it, with slotCount slots per side. */
    static getBlankTurn(slotCount: number): LineTurn {
        const blankSide = (): LineSlot[] =>
            Array.from({ length: slotCount }, () => LineHelpers.getBlankSlot());

        return {
            isRisky: false,
            order: [],
            player: blankSide(),
            text: '',
            trainer: blankSide(),
        };
    }

    /** Turn 1, which always opens with each side's lead Pokémon (by id, per slot; undefined for an empty one) on the field. */
    static getFirstTurn(
        playerLeadIds: (string | undefined)[],
        trainerLeadIds: (string | undefined)[]
    ): LineTurn {
        const side = (leadIds: (string | undefined)[]): LineSlot[] =>
            leadIds.map((pokemonId) => ({
                ...LineHelpers.getBlankSlot(),
                pokemonId,
            }));

        return {
            isRisky: false,
            order: [],
            player: side(playerLeadIds),
            text: '',
            trainer: side(trainerLeadIds),
        };
    }

    /** turn with its move order and targets made consistent with who's on the field: `order` lists exactly the slots that have a Pokémon and a move (kept in order, newly moving slots appended), and each such slot has a valid target, falling back to the first opposing Pokémon. Slots without a move have no target. */
    static normalizeTurn(turn: LineTurn): LineTurn {
        const slots = LineHelpers.getTurnSlots(turn);
        const acting = slots
            .filter(({ slot }) => slot.pokemonId && slot.move)
            .map(({ position }) => position);
        const order = [
            ...turn.order.filter((position) => acting.includes(position)),
            ...acting.filter((position) => !turn.order.includes(position)),
        ];

        const normalizeSide = (side: LineSide): LineSlot[] =>
            turn[side].map((slot, index) => {
                const position = LineHelpers.getPosition(side, index);
                if (!acting.includes(position)) {
                    return { ...slot, target: undefined };
                }

                return {
                    ...slot,
                    target: LineHelpers.isValidTarget(
                        turn,
                        position,
                        slot.target
                    )
                        ? slot.target
                        : LineHelpers.getDefaultTarget(turn, side),
                };
            });

        return {
            ...turn,
            order,
            player: normalizeSide('player'),
            trainer: normalizeSide('trainer'),
        };
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // The first opposing position that has a Pokémon on the field.
    private static getDefaultTarget(
        turn: LineTurn,
        side: LineSide
    ): LinePosition | undefined {
        const opposing = side === 'player' ? 'trainer' : 'player';
        const index = turn[opposing].findIndex((slot) => slot.pokemonId);

        return index === -1
            ? undefined
            : LineHelpers.getPosition(opposing, index);
    }

    // Whether `target` is one `attacker`'s move can aim at: a spread, or
    // some other position with a Pokémon on the field.
    private static isValidTarget(
        turn: LineTurn,
        attacker: LinePosition,
        target: LineSlot['target']
    ): boolean {
        if (target === undefined) return false;
        if (target === 'foes' || target === 'others') return true;

        const { index, side } = LineHelpers.parsePosition(target);
        return (
            target !== attacker && turn[side][index]?.pokemonId !== undefined
        );
    }

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
