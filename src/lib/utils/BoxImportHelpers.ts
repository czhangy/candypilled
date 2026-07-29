import {
    BoxFileParser,
    BoxImportError,
    BoxImportFormat,
    BoxImportResult,
    CaughtPokemon,
    Game,
} from '@/lib/static/types';
import Gen4BoxImportHelpers from '@/lib/utils/Gen4BoxImportHelpers';

export default class BoxImportHelpers {
    // -------------------------------------------------------------------------
    // PUBLIC
    // -------------------------------------------------------------------------

    /**
     * Parses a set of box files (dispatched to the parser matching
     * `game.boxImportFormat`) into `CaughtPokemon` entries. If any file
     * fails to parse or resolve, no Pokémon are returned — the caller
     * should show every collected error and let the user fix or remove
     * the offending file before retrying, rather than importing a
     * partial box.
     */
    static async parseFiles(
        files: File[],
        game: Game
    ): Promise<BoxImportResult> {
        const parser = BoxImportHelpers.getParser(game.boxImportFormat);
        const pokemon: CaughtPokemon[] = [];
        const errors: BoxImportError[] = [];

        for (const file of files) {
            try {
                const buffer = await file.arrayBuffer();
                pokemon.push(parser.parseFile(buffer, game));
            } catch (error) {
                errors.push({
                    fileName: file.name,
                    message:
                        error instanceof Error
                            ? error.message
                            : 'Failed to parse this file',
                });
            }
        }

        if (errors.length > 0) return { success: false, errors };

        return { success: true, pokemon };
    }

    /** The file extension game's box import format expects (e.g. ".pk4"). */
    static getFileExtension(game: Game): string {
        return BoxImportHelpers.getParser(game.boxImportFormat).fileExtension;
    }

    // -------------------------------------------------------------------------
    // PRIVATE
    // -------------------------------------------------------------------------

    // Every supported box-file format's parser, keyed by
    // `Game.boxImportFormat`. Add a new generation's save-file support by
    // implementing a BoxFileParser and registering it here — nothing else
    // in this class needs to change.
    private static readonly PARSERS: Record<BoxImportFormat, BoxFileParser> = {
        gen4: Gen4BoxImportHelpers,
    };

    private static getParser(format: BoxImportFormat): BoxFileParser {
        return BoxImportHelpers.PARSERS[format];
    }
}
