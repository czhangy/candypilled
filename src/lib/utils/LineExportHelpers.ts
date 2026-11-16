import { LINE_SIDES, STATUS_OPTIONS } from '@/lib/static/constants';
import {
    Game,
    LinePlan,
    LinePokemon,
    LineSlot,
    LineTurn,
} from '@/lib/static/types';
import ItemHelpers from '@/lib/utils/ItemHelpers';
import LineHelpers from '@/lib/utils/LineHelpers';
import MoveHelpers from '@/lib/utils/MoveHelpers';
import PokemonHelpers from '@/lib/utils/PokemonHelpers';

export default class LineExportHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * A concise text summary of a line: the player's team in Showdown set
     * style (`Name @ Item`, plus HP and status when they aren't the defaults),
     * then one line per turn with anything in it, e.g. `T2? Garchomp:
     * Earthquake (gets brn) vs Geodude #2: Rock Throw (KO) // note`. `pokemon`
     * is every Pokémon on both sides. `?` marks a risky turn, `-` an empty
     * side, `#n` tells apart opposing Pokémon of the same species, `first`
     * marks whichever of the two moves first (when both have a move), and
     * `switch in` marks one that replaced a Pokémon that wasn't KO'd the turn
     * before. parseExportText reads this format back.
     */
    static getExportText(
        game: Game,
        pokemon: LinePokemon[],
        turns: LineTurn[]
    ): string {
        const labels = LineExportHelpers.getLabels(game, pokemon);
        const team = pokemon
            .filter((candidate) => candidate.side === 'player')
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
     * and `trainerPokemon` (the opposing team), or undefined if it can't be
     * restored exactly: anything unrecognized, ambiguous or out of date, such
     * as a Pokémon, item, move, HP or status that no longer matches.
     */
    static parseExportText(
        game: Game,
        plan: string,
        boxPokemon: LinePokemon[],
        trainerPokemon: LinePokemon[]
    ): LinePlan | undefined {
        const lines = plan.split('\n').filter((line) => line.trim() !== '');
        const turnLines = lines.filter((line) =>
            LineExportHelpers.TURN_LINE_PATTERN.test(line)
        );
        const teamLines = lines.filter(
            (line) => !LineExportHelpers.TURN_LINE_PATTERN.test(line)
        );

        const players = new Map<string, LinePokemon>();
        for (const line of teamLines) {
            const parsed = LineExportHelpers.parseSetLine(
                game,
                line,
                boxPokemon
            );
            if (!parsed || players.has(parsed.label)) return undefined;
            players.set(parsed.label, parsed.pokemon);
        }
        const playerPokemon = [...players.values()];

        const trainerLabels = LineExportHelpers.getLabels(game, trainerPokemon);
        const trainers = new Map(
            trainerPokemon.map((pokemon) => [
                trainerLabels[pokemon.id],
                pokemon,
            ])
        );

        const first = LineHelpers.getFirstTurn(
            playerPokemon[0]?.id,
            trainerPokemon[0]?.id
        );
        const turns = [first];
        let lastNumber = 0;
        for (const line of turnLines) {
            const parsed = LineExportHelpers.parseTurnLine(
                game,
                line,
                players,
                trainers
            );
            if (!parsed || parsed.number <= lastNumber) return undefined;

            if (parsed.number === 1) {
                // Turn 1 always opens with the two leads.
                if (
                    parsed.turn.player.pokemonId !== first.player.pokemonId ||
                    parsed.turn.trainer.pokemonId !== first.trainer.pokemonId
                ) {
                    return undefined;
                }
                turns[0] = parsed.turn;
            } else {
                // Turns with nothing in them aren't exported.
                while (turns.length < parsed.number - 1) {
                    turns.push(LineHelpers.getBlankTurn());
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

    private static readonly TURN_LINE_PATTERN = /^T\d+\??(?: |$)/;
    private static readonly STATUS_CODES = STATUS_OPTIONS.map(
        (option) => option.value
    ).filter(Boolean);

    // Each Pokémon's name in the text, with `#n` added to opposing Pokémon
    // that share one. (The player's own Pokémon never repeat a species.)
    private static getLabels(
        game: Game,
        pokemon: LinePokemon[]
    ): Record<string, string> {
        return Object.fromEntries(
            pokemon.map((candidate) => {
                const name = LineHelpers.getName(game.dataSource, candidate);
                const sameName =
                    candidate.side === 'trainer'
                        ? pokemon.filter(
                              (other) =>
                                  other.side === 'trainer' &&
                                  LineHelpers.getName(
                                      game.dataSource,
                                      other
                                  ) === name
                          )
                        : [candidate];

                return [
                    candidate.id,
                    sameName.length > 1
                        ? `${name} #${sameName.indexOf(candidate) + 1}`
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

    // `Name: Move (first, switch in, gets brn, loses item, KO)`, or `-` if
    // the slot's side has nobody on the field. `previous` is the same side's
    // slot in the turn before.
    private static getSlotSegment(
        game: Game,
        pokemon: LinePokemon[],
        labels: Record<string, string>,
        slot: LineSlot,
        previous: LineSlot | undefined,
        isFirst: boolean
    ): string {
        const active = pokemon.find(
            (candidate) => candidate.id === slot.pokemonId
        );
        if (!active) return '-';

        const move = slot.move
            ? (MoveHelpers.getMoveData(game.dataSource, slot.move)?.name ??
              slot.move)
            : undefined;
        const isSwitch =
            previous?.pokemonId !== undefined &&
            previous.pokemonId !== slot.pokemonId &&
            !previous.isKo;
        const tags = [
            isFirst && 'first',
            isSwitch && 'switch in',
            slot.appliedStatus && `gets ${slot.appliedStatus}`,
            slot.isStatusCleared && 'cures status',
            slot.isItemCleared && 'loses item',
            slot.isKo && 'KO',
        ].filter(Boolean);

        return [
            move ? `${labels[active.id]}: ${move}` : labels[active.id],
            tags.length > 0 && `(${tags.join(', ')})`,
        ]
            .filter(Boolean)
            .join(' ');
    }

    // `T2? Player segment vs Foe segment // note`, or undefined for a turn
    // with nothing in it.
    private static getTurnLine(
        game: Game,
        pokemon: LinePokemon[],
        labels: Record<string, string>,
        turn: LineTurn,
        previous: LineTurn | undefined,
        index: number
    ): string | undefined {
        // Who moves first only matters when both sides have a move.
        const firstSide =
            turn.player.move && turn.trainer.move
                ? turn.isPlayerFirst
                    ? 'player'
                    : 'trainer'
                : undefined;
        const segments = LINE_SIDES.map((side) =>
            LineExportHelpers.getSlotSegment(
                game,
                pokemon,
                labels,
                turn[side],
                previous?.[side],
                side === firstSide
            )
        );
        const matchup = segments.every((segment) => segment === '-')
            ? ''
            : segments.join(' vs ');
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

    // A `Name: Move (tags)` segment (or `-`) back into a slot, for a
    // Pokémon among `byLabel`, and whether it's tagged `first`. A move has to
    // be one the Pokémon has.
    private static parseSegment(
        game: Game,
        segment: string,
        byLabel: Map<string, LinePokemon>
    ): { isFirst: boolean; slot: LineSlot } | undefined {
        if (segment === '-') {
            return { isFirst: false, slot: LineHelpers.getBlankSlot() };
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
        if (!label || !pokemon) return undefined;

        let rest = segment.slice(label.length);
        const tagsMatch = /\s\(([^()]*)\)$/.exec(rest);
        const tags = tagsMatch ? tagsMatch[1].split(', ') : [];
        if (tagsMatch) rest = rest.slice(0, tagsMatch.index);

        const slot: LineSlot = {
            ...LineHelpers.getBlankSlot(),
            pokemonId: pokemon.id,
        };
        if (rest.startsWith(': ')) {
            const move = MoveHelpers.getSlugByName(
                game.dataSource,
                rest.slice(': '.length)
            );
            if (!move || !pokemon.moves.includes(move)) return undefined;
            slot.move = move;
        } else if (rest !== '') {
            return undefined;
        }

        let isFirst = false;
        for (const tag of tags) {
            const status = /^gets (\w+)$/.exec(tag)?.[1];
            if (tag === 'first') isFirst = true;
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

        return { isFirst, slot };
    }

    private static parseTurnLine(
        game: Game,
        line: string,
        players: Map<string, LinePokemon>,
        trainers: Map<string, LinePokemon>
    ): { number: number; turn: LineTurn } | undefined {
        const header = /^T(\d+)(\?)?(.*)$/.exec(line);
        if (!header) return undefined;

        const rest = header[3];
        const noteAt = rest.indexOf(' // ');
        const matchup = (noteAt === -1 ? rest : rest.slice(0, noteAt)).trim();

        let player = LineHelpers.getBlankSlot();
        let trainer = LineHelpers.getBlankSlot();
        let isPlayerFirst = false;
        if (matchup !== '') {
            const segments = matchup.split(' vs ');
            if (segments.length !== 2) return undefined;

            const parsedPlayer = LineExportHelpers.parseSegment(
                game,
                segments[0],
                players
            );
            const parsedTrainer = LineExportHelpers.parseSegment(
                game,
                segments[1],
                trainers
            );
            if (!parsedPlayer || !parsedTrainer) return undefined;
            player = parsedPlayer.slot;
            trainer = parsedTrainer.slot;

            // `first` goes on exactly one side, and only when both have a
            // move. Without it, the default order stands.
            if (parsedPlayer.isFirst || parsedTrainer.isFirst) {
                if (
                    parsedPlayer.isFirst === parsedTrainer.isFirst ||
                    !player.move ||
                    !trainer.move
                ) {
                    return undefined;
                }
                isPlayerFirst = parsedPlayer.isFirst;
            }
        }

        return {
            number: Number(header[1]),
            turn: {
                isPlayerFirst,
                isRisky: header[2] === '?',
                player,
                text: noteAt === -1 ? '' : rest.slice(noteAt + ' // '.length),
                trainer,
            },
        };
    }
}
