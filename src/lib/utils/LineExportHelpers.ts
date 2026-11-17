import { LINE_SIDES, STATUS_OPTIONS } from '@/lib/static/constants';
import {
    Game,
    LineBattle,
    LinePlan,
    LinePokemon,
    LineSide,
    LineSlot,
    LineTarget,
    LineTurn,
} from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import LineHelpers from '@/lib/utils/LineHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

type ParsedSegment = {
    ordinal: number | undefined;
    slot: LineSlot;
    targetText: string | undefined;
};

export default class LineExportHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * A concise text summary of a line: the player's own team in Showdown
     * set style (`Name @ Item`, plus HP and status when they aren't the
     * defaults), then one line per turn with anything in it, e.g. `T2?
     * Garchomp: Earthquake > all others (1st, gets brn) & Staraptor: Brave
     * Bird > foe 1 (2nd) vs Geodude #2: Rock Throw > foe 2 & -`. `pokemon`
     * is every Pokémon on both sides.
     *
     * In a turn, `&` joins one side's slots and `vs` the two sides; `-` is
     * an empty slot. A double or tag battle's moves name a target relative
     * to the mover (`foe 1`, `foe 2`, `partner`, `all foes`, `all others`).
     * Tags: `1st`–`4th` give the move order when two or more Pokémon move,
     * `switch in` marks one that replaced a Pokémon that wasn't KO'd the
     * turn before, and `?` after the turn number marks a risky turn. `#n`
     * tells apart the battle's Pokémon that share a name. parseExportText
     * reads this format back.
     */
    static getExportText(
        game: Game,
        pokemon: LinePokemon[],
        turns: LineTurn[]
    ): string {
        const labels = LineExportHelpers.getLabels(game, pokemon);
        const team = pokemon
            .filter((candidate) => !candidate.isFixed)
            .map((candidate) =>
                LineExportHelpers.getSetLine(
                    game,
                    candidate,
                    labels[candidate.id]
                )
            );
        const turnLines = turns.flatMap((turn, index) => {
            const turnLine = LineExportHelpers.getTurnLine(
                game,
                pokemon,
                labels,
                turn,
                turns[index - 1],
                index
            );
            return turnLine ? [turnLine] : [];
        });

        return [team.join('\n'), turnLines.join('\n')]
            .filter(Boolean)
            .join('\n\n');
    }

    /**
     * The line that `plan` (text from getExportText) describes, resolved
     * against `boxPokemon` (the player's candidates, as they are in the box)
     * and `battle`, or undefined if it can't be restored exactly: anything
     * unrecognized, ambiguous or out of date, such as a Pokémon, item, move,
     * HP, status or target that no longer matches.
     */
    static parseExportText(
        game: Game,
        plan: string,
        boxPokemon: LinePokemon[],
        battle: LineBattle
    ): LinePlan | undefined {
        const lines = plan.split('\n').filter((line) => line.trim() !== '');
        const turnLines = lines.filter((line) =>
            LineExportHelpers.TURN_LINE_PATTERN.test(line)
        );
        const teamLines = lines.filter(
            (line) => !LineExportHelpers.TURN_LINE_PATTERN.test(line)
        );

        const picked = new Map<string, LinePokemon>();
        for (const line of teamLines) {
            const parsed = LineExportHelpers.parseSetLine(
                game,
                line,
                boxPokemon
            );
            if (!parsed || picked.has(parsed.label)) return undefined;
            picked.set(parsed.label, parsed.pokemon);
        }
        const playerPokemon = [...picked.values()];

        const playerRoster = LineHelpers.getSideRoster(
            battle,
            playerPokemon,
            'player'
        );
        const labels = {
            ...LineExportHelpers.getLabels(game, playerRoster),
            ...LineExportHelpers.getLabels(game, battle.trainerPokemon),
        };
        const byLabel: Record<LineSide, Map<string, LinePokemon>> = {
            player: new Map(
                playerRoster.map((pokemon) => [labels[pokemon.id], pokemon])
            ),
            trainer: new Map(
                battle.trainerPokemon.map((pokemon) => [
                    labels[pokemon.id],
                    pokemon,
                ])
            ),
        };

        const first = LineHelpers.getFirstTurn(
            LineHelpers.getLeadIds(playerRoster, battle.slotCount),
            LineHelpers.getLeadIds(battle.trainerPokemon, battle.slotCount)
        );
        const turns = [first];
        let lastNumber = 0;
        for (const line of turnLines) {
            const parsed = LineExportHelpers.parseTurnLine(
                game,
                line,
                battle.slotCount,
                byLabel
            );
            if (!parsed || parsed.number <= lastNumber) return undefined;

            if (parsed.number === 1) {
                // Turn 1 always opens with each side's leads.
                const hasLeads = LINE_SIDES.every((side) =>
                    parsed.turn[side].every(
                        (slot, index) =>
                            slot.pokemonId === first[side][index].pokemonId
                    )
                );
                if (!hasLeads) return undefined;
                turns[0] = parsed.turn;
            } else {
                // Turns with nothing in them aren't exported.
                while (turns.length < parsed.number - 1) {
                    turns.push(LineHelpers.getBlankTurn(battle.slotCount));
                }
                turns.push(parsed.turn);
            }
            lastNumber = parsed.number;
        }

        return lines.length > 0 ? { playerPokemon, turns } : undefined;
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    private static readonly ORDINALS = ['1st', '2nd', '3rd', '4th'];
    private static readonly TURN_LINE_PATTERN = /^T\d+\??(?: |$)/;
    private static readonly STATUS_CODES = STATUS_OPTIONS.map(
        (option) => option.value
    ).filter(Boolean);

    // Each Pokémon's name in the text. A Pokémon the battle provides gets
    // `#n` added whenever its name isn't unique on its side, so it can be
    // told apart from the others (the player's own picks never repeat).
    private static getLabels(
        game: Game,
        pokemon: LinePokemon[]
    ): Record<string, string> {
        return Object.fromEntries(
            pokemon.map((candidate) => {
                const name = LineHelpers.getName(game.dataSource, candidate);
                if (!candidate.isFixed) return [candidate.id, name];

                const sameName = pokemon.filter(
                    (other) =>
                        other.side === candidate.side &&
                        LineHelpers.getName(game.dataSource, other) === name
                );
                const fixedSameName = sameName.filter((other) => other.isFixed);

                return [
                    candidate.id,
                    sameName.length > 1
                        ? `${name} #${fixedSameName.indexOf(candidate) + 1}`
                        : name,
                ];
            })
        );
    }

    // `Name @ Item (80/120, psn)`, leaving out whatever is at its default.
    private static getSetLine(
        game: Game,
        pokemon: LinePokemon,
        label: string
    ): string {
        const item = pokemon.heldItem
            ? (ItemHelpers.getHeldItemData(game.dataSource, pokemon.heldItem)
                  ?.name ?? pokemon.heldItem)
            : undefined;
        const details = [
            pokemon.currentHp < pokemon.maxHp
                ? `${pokemon.currentHp}/${pokemon.maxHp}`
                : undefined,
            pokemon.status || undefined,
        ].filter(Boolean);

        return [
            label,
            item && `@ ${item}`,
            details.length > 0 && `(${details.join(', ')})`,
        ]
            .filter(Boolean)
            .join(' ');
    }

    // How a mover on `side` refers to its target: `foe 2`, `partner`,
    // `all foes` or `all others`.
    private static getTargetText(target: LineTarget, side: LineSide): string {
        if (target === 'foes') return 'all foes';
        if (target === 'others') return 'all others';

        const { index, side: targetSide } = LineHelpers.parsePosition(target);
        return targetSide === side ? 'partner' : `foe ${index + 1}`;
    }

    // `Name: Move > target (1st, switch in, gets brn, loses item, KO)`, or
    // `-` if nobody is in the slot. `previous` is the turn before.
    private static getSlotSegment(
        game: Game,
        pokemon: LinePokemon[],
        labels: Record<string, string>,
        turn: LineTurn,
        side: LineSide,
        index: number,
        previous: LineTurn | undefined
    ): string {
        const slot = turn[side][index];
        const active = pokemon.find(
            (candidate) => candidate.id === slot.pokemonId
        );
        if (!active) return '-';

        const move = slot.move
            ? (MoveHelpers.getMoveData(game.dataSource, slot.move)?.name ??
              slot.move)
            : undefined;
        // A single target is implied in a singles battle.
        const target =
            slot.target && turn[side].length > 1
                ? LineExportHelpers.getTargetText(slot.target, side)
                : undefined;
        const previousSlot = previous?.[side][index];
        const isSwitch =
            previousSlot?.pokemonId !== undefined &&
            previousSlot.pokemonId !== slot.pokemonId &&
            !previousSlot.isKo;
        const rank = turn.order.indexOf(LineHelpers.getPosition(side, index));
        const tags = [
            turn.order.length >= 2 && rank !== -1
                ? LineExportHelpers.ORDINALS[rank]
                : undefined,
            isSwitch && 'switch in',
            slot.appliedStatus && `gets ${slot.appliedStatus}`,
            slot.isStatusCleared && 'cures status',
            slot.isItemCleared && 'loses item',
            slot.isKo && 'KO',
        ].filter(Boolean);

        return [
            [labels[active.id], move && `: ${move}`, target && ` > ${target}`]
                .filter(Boolean)
                .join(''),
            tags.length > 0 && `(${tags.join(', ')})`,
        ]
            .filter(Boolean)
            .join(' ');
    }

    // `T2? Player slots vs Foe slots // note`, or undefined for a turn with
    // nothing in it.
    private static getTurnLine(
        game: Game,
        pokemon: LinePokemon[],
        labels: Record<string, string>,
        turn: LineTurn,
        previous: LineTurn | undefined,
        index: number
    ): string | undefined {
        const segments = LINE_SIDES.map((side) =>
            turn[side].map((_, slotIndex) =>
                LineExportHelpers.getSlotSegment(
                    game,
                    pokemon,
                    labels,
                    turn,
                    side,
                    slotIndex,
                    previous
                )
            )
        );
        const matchup = segments.flat().every((segment) => segment === '-')
            ? ''
            : segments.map((side) => side.join(' & ')).join(' vs ');
        if (!matchup && !turn.text) return undefined;

        return [
            `T${index + 1}${turn.isRisky ? '?' : ''}`,
            matchup,
            turn.text && `// ${turn.text}`,
        ]
            .filter(Boolean)
            .join(' ');
    }

    // A team line back into the box Pokémon it names, with the item, HP and
    // status it records. The name has to match exactly one box Pokémon.
    private static parseSetLine(
        game: Game,
        line: string,
        boxPokemon: LinePokemon[]
    ): { label: string; pokemon: LinePokemon } | undefined {
        const codes = LineExportHelpers.STATUS_CODES.join('|');
        const detailsMatch = new RegExp(
            `\\s\\((?:\\d+/\\d+(?:, (?:${codes}))?|${codes})\\)$`
        ).exec(line);
        const details = detailsMatch
            ? detailsMatch[0].trim().slice(1, -1).split(', ')
            : [];
        const body = detailsMatch ? line.slice(0, detailsMatch.index) : line;

        const [label, itemName, ...extra] = body.split(' @ ');
        if (extra.length > 0) return undefined;

        const candidates = boxPokemon.filter(
            (candidate) =>
                LineHelpers.getName(game.dataSource, candidate) === label ||
                PokemonHelpers.getPokemonData(
                    game.dataSource,
                    candidate.speciesSlug
                )?.name === label
        );
        if (candidates.length !== 1) return undefined;
        const [candidate] = candidates;

        let heldItem: string | undefined;
        if (itemName !== undefined) {
            heldItem = ItemHelpers.getHeldItemSlugByName(
                game.dataSource,
                itemName
            );
            if (!heldItem) return undefined;
        }

        let currentHp = candidate.maxHp;
        let status = '';
        for (const detail of details) {
            const hp = /^(\d+)\/(\d+)$/.exec(detail);
            if (hp) {
                currentHp = Number(hp[1]);
                if (
                    Number(hp[2]) !== candidate.maxHp ||
                    currentHp < 1 ||
                    currentHp > candidate.maxHp
                ) {
                    return undefined;
                }
            } else {
                status = detail;
            }
        }

        return {
            label,
            pokemon: {
                ...candidate,
                currentHp,
                heldItem,
                slug: PokemonHelpers.getDisplaySlug(game.dataSource, {
                    heldItem,
                    slug: candidate.speciesSlug,
                }),
                status,
            },
        };
    }

    // A `Name: Move > target (tags)` segment (or `-`) back into the slot at
    // `index` on one side, for a Pokémon among `byLabel`, along with its
    // move-order tag and target as written. A move has to be one the
    // Pokémon has, and the Pokémon has to be allowed in the slot.
    private static parseSegment(
        game: Game,
        segment: string,
        index: number,
        byLabel: Map<string, LinePokemon>
    ): ParsedSegment | undefined {
        if (segment === '-') {
            return {
                ordinal: undefined,
                slot: LineHelpers.getBlankSlot(),
                targetText: undefined,
            };
        }

        // The longest name the segment starts with, since a name can itself
        // contain a colon or parentheses.
        const label = [...byLabel.keys()]
            .filter(
                (candidate) =>
                    segment === candidate ||
                    segment.startsWith(`${candidate}: `) ||
                    segment.startsWith(`${candidate} (`)
            )
            .sort((a, b) => b.length - a.length)[0];
        const pokemon = label ? byLabel.get(label) : undefined;
        if (!label || !pokemon || !LineHelpers.canOccupy(pokemon, index)) {
            return undefined;
        }

        let rest = segment.slice(label.length);
        const tagsMatch = /\s\(([^()]*)\)$/.exec(rest);
        const tags = tagsMatch ? tagsMatch[1].split(', ') : [];
        if (tagsMatch) rest = rest.slice(0, tagsMatch.index);

        const slot: LineSlot = {
            ...LineHelpers.getBlankSlot(),
            pokemonId: pokemon.id,
        };
        let targetText: string | undefined;
        if (rest.startsWith(': ')) {
            const [moveName, target, ...extra] = rest
                .slice(': '.length)
                .split(' > ');
            const move = MoveHelpers.getSlugByName(game.dataSource, moveName);
            if (!move || !pokemon.moves.includes(move) || extra.length > 0) {
                return undefined;
            }
            slot.move = move;
            targetText = target;
        } else if (rest !== '') {
            return undefined;
        }

        let ordinal: number | undefined;
        for (const tag of tags) {
            const status = /^gets (\w+)$/.exec(tag)?.[1];
            const rank = LineExportHelpers.ORDINALS.indexOf(tag);
            if (rank !== -1) ordinal = rank + 1;
            else if (tag === 'switch in') continue;
            else if (tag === 'cures status') slot.isStatusCleared = true;
            else if (tag === 'loses item') slot.isItemCleared = true;
            else if (tag === 'KO') slot.isKo = true;
            else if (
                status &&
                LineExportHelpers.STATUS_CODES.includes(status)
            ) {
                slot.appliedStatus = status;
            } else return undefined;
        }

        return { ordinal, slot, targetText };
    }

    // A target as written by a mover at `index` on `side` back into the
    // target it stands for, or undefined if it isn't valid with slotCount
    // slots per side.
    private static parseTarget(
        text: string,
        side: LineSide,
        index: number,
        slotCount: number
    ): LineTarget | undefined {
        if (text === 'all foes') return 'foes';
        if (text === 'all others') return 'others';
        if (text === 'partner') {
            return slotCount === 2
                ? LineHelpers.getPosition(side, 1 - index)
                : undefined;
        }

        const foe = /^foe (\d+)$/.exec(text);
        const slot = foe ? Number(foe[1]) : 0;
        return slot >= 1 && slot <= slotCount
            ? LineHelpers.getPosition(
                  side === 'player' ? 'trainer' : 'player',
                  slot - 1
              )
            : undefined;
    }

    private static parseTurnLine(
        game: Game,
        line: string,
        slotCount: number,
        byLabel: Record<LineSide, Map<string, LinePokemon>>
    ): { number: number; turn: LineTurn } | undefined {
        const header = /^T(\d+)(\?)?(.*)$/.exec(line);
        if (!header) return undefined;

        const rest = header[3];
        const noteAt = rest.indexOf(' // ');
        const matchup = (noteAt === -1 ? rest : rest.slice(0, noteAt)).trim();

        const parsed: Record<LineSide, ParsedSegment[]> = {
            player: [],
            trainer: [],
        };
        if (matchup !== '') {
            const sides = matchup.split(' vs ');
            if (sides.length !== 2) return undefined;

            for (const [sideIndex, side] of LINE_SIDES.entries()) {
                const segments = sides[sideIndex].split(' & ');
                if (segments.length !== slotCount) return undefined;

                for (const [index, segment] of segments.entries()) {
                    const parsedSegment = LineExportHelpers.parseSegment(
                        game,
                        segment,
                        index,
                        byLabel[side]
                    );
                    if (!parsedSegment) return undefined;
                    parsed[side].push(parsedSegment);
                }
            }
        }

        const all = LINE_SIDES.flatMap((side) =>
            parsed[side].map((segment, index) => ({ index, segment, side }))
        );
        const acting = all.filter(({ segment }) => segment.slot.move);
        const ids = LINE_SIDES.map((side) =>
            parsed[side].map(({ slot }) => slot.pokemonId).filter(Boolean)
        );
        const hasRepeat = ids.some(
            (sideIds) => new Set(sideIds).size < sideIds.length
        );
        // Move order is written exactly when two or more Pokémon move, and
        // targets exactly when there's more than one possible target.
        const ranks = acting
            .map(({ segment }) => segment.ordinal)
            .sort((a, b) => (a ?? 0) - (b ?? 0));
        const hasValidOrder =
            acting.length >= 2
                ? ranks.every((rank, index) => rank === index + 1)
                : ranks.every((rank) => rank === undefined);
        const hasValidTargets = acting.every(({ segment }) =>
            slotCount > 1
                ? segment.targetText !== undefined
                : segment.targetText === undefined
        );
        if (hasRepeat || !hasValidOrder || !hasValidTargets) return undefined;

        const toSlots = (side: LineSide): LineSlot[] | undefined => {
            const slots: LineSlot[] = [];
            for (const [index, { slot, targetText }] of parsed[
                side
            ].entries()) {
                const target = targetText
                    ? LineExportHelpers.parseTarget(
                          targetText,
                          side,
                          index,
                          slotCount
                      )
                    : undefined;
                if (targetText && !target) return undefined;
                slots.push({ ...slot, target });
            }
            return slots;
        };
        const blankSide = LineHelpers.getBlankTurn(slotCount);
        const player = matchup === '' ? blankSide.player : toSlots('player');
        const trainer = matchup === '' ? blankSide.trainer : toSlots('trainer');
        if (!player || !trainer) return undefined;

        return {
            number: Number(header[1]),
            turn: LineHelpers.normalizeTurn({
                isRisky: header[2] === '?',
                order: acting
                    .sort(
                        (a, b) =>
                            (a.segment.ordinal ?? 0) - (b.segment.ordinal ?? 0)
                    )
                    .map(({ index, side }) =>
                        LineHelpers.getPosition(side, index)
                    ),
                player,
                text: noteAt === -1 ? '' : rest.slice(noteAt + ' // '.length),
                trainer,
            }),
        };
    }
}
