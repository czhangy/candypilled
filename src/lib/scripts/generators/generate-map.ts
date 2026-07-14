import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import ts from 'typescript';
import {
    handleException,
    logSuccess,
    validateRootDirectory,
} from '@/lib/scripts/utils/helpers';
import StringHelpers from '@/lib/utils/StringHelpers';

const USAGE =
    'Usage: npm run gen:map -- --game=<game> --location="<Location Name>" --split=<split>';
const IMAGE_NOT_FOUND = 'No map image was found at the expected path';
const SPLIT_NOT_FOUND = "That split file doesn't exist.";
const LOCATION_NOT_FOUND =
    'No location with that name was found in that split.';

interface MapArgs {
    game: string;
    location: string;
    split: string;
}

const parseArgs = (): MapArgs => {
    const args = new Map(
        process.argv.slice(2).map((arg) => {
            const [key, value] = arg.replace(/^--/, '').split('=');
            return [key, value];
        })
    );

    const game = args.get('game');
    const location = args.get('location');
    const split = args.get('split');

    if (!game || !location || !split) {
        throw new Error(USAGE);
    }

    return { game, location, split };
};

const getLocationsDir = (gameSlug: string): string =>
    path.join('src', 'lib', 'assets', gameSlug, 'locations');

const getBarrelPath = (gameSlug: string): string =>
    path.join(getLocationsDir(gameSlug), 'index.ts');

const getSplitPath = (gameSlug: string, split: string): string =>
    path.join('src', 'lib', 'games', gameSlug, 'splits', `${split}.ts`);

const readBarrelExports = (barrelPath: string): Map<string, string> => {
    const exports = new Map<string, string>();
    if (!fs.existsSync(barrelPath)) return exports;

    const pattern = /^export \{ default as (\w+) \} from '\.\/(.+)\.png';$/gm;
    const contents = fs.readFileSync(barrelPath, 'utf-8');

    for (const match of contents.matchAll(pattern)) {
        exports.set(match[1], match[2]);
    }

    return exports;
};

const writeBarrelExports = (
    barrelPath: string,
    exports: Map<string, string>
): void => {
    const lines = [...exports.entries()]
        .sort(([nameA], [nameB]) => nameA.localeCompare(nameB))
        .map(
            ([name, slug]) =>
                `export { default as ${name} } from './${slug}.png';\n`
        );

    fs.mkdirSync(path.dirname(barrelPath), { recursive: true });
    fs.writeFileSync(barrelPath, lines.join(''));
};

const isNamedPropertyAssignment = (
    property: ts.ObjectLiteralElementLike,
    name: string
): property is ts.PropertyAssignment =>
    ts.isPropertyAssignment(property) &&
    ts.isIdentifier(property.name) &&
    property.name.text === name;

const isTargetLocation = (
    node: ts.Node,
    locationName: string
): node is ts.ObjectLiteralExpression =>
    ts.isObjectLiteralExpression(node) &&
    node.properties.some(
        (property) =>
            isNamedPropertyAssignment(property, 'name') &&
            ts.isStringLiteral(property.initializer) &&
            property.initializer.text === locationName
    );

const insertMapProperty = (
    node: ts.ObjectLiteralExpression,
    exportName: string
): ts.ObjectLiteralExpression => {
    const factory = ts.factory;
    const nameIndex = node.properties.findIndex((property) =>
        isNamedPropertyAssignment(property, 'name')
    );

    const properties = [...node.properties];
    properties.splice(
        nameIndex + 1,
        0,
        factory.createPropertyAssignment(
            factory.createIdentifier('map'),
            factory.createIdentifier(exportName)
        )
    );

    return factory.updateObjectLiteralExpression(node, properties);
};

const addMapToLocation = (
    sourceFile: ts.SourceFile,
    locationName: string,
    exportName: string
): { sourceFile: ts.SourceFile; found: boolean; alreadyWired: boolean } => {
    const state = { found: false, alreadyWired: false };

    const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
        const visit: ts.Visitor = (node) => {
            if (isTargetLocation(node, locationName)) {
                state.found = true;

                const hasMap = node.properties.some((property) =>
                    isNamedPropertyAssignment(property, 'map')
                );
                if (hasMap) {
                    state.alreadyWired = true;
                    return node;
                }

                return insertMapProperty(node, exportName);
            }

            return ts.visitEachChild(node, visit, context);
        };

        return (root) => ts.visitNode(root, visit) as ts.SourceFile;
    };

    const result = ts.transform(sourceFile, [transformer]);
    const [transformed] = result.transformed;
    result.dispose();

    return { sourceFile: transformed, ...state };
};

const addImportToSplit = (
    sourceFile: ts.SourceFile,
    modulePath: string,
    exportName: string
): ts.SourceFile => {
    const factory = ts.factory;
    const existing = sourceFile.statements.find(
        (statement): statement is ts.ImportDeclaration =>
            ts.isImportDeclaration(statement) &&
            ts.isStringLiteral(statement.moduleSpecifier) &&
            statement.moduleSpecifier.text === modulePath
    );

    const newSpecifier = factory.createImportSpecifier(
        false,
        undefined,
        factory.createIdentifier(exportName)
    );

    if (existing?.importClause?.namedBindings) {
        const namedBindings = existing.importClause.namedBindings;
        if (!ts.isNamedImports(namedBindings)) return sourceFile;

        if (
            namedBindings.elements.some(
                (element) => element.name.text === exportName
            )
        ) {
            return sourceFile;
        }

        const updatedImport = factory.updateImportDeclaration(
            existing,
            existing.modifiers,
            factory.updateImportClause(
                existing.importClause,
                undefined,
                existing.importClause.name,
                factory.updateNamedImports(namedBindings, [
                    ...namedBindings.elements,
                    newSpecifier,
                ])
            ),
            existing.moduleSpecifier,
            existing.attributes
        );

        return factory.updateSourceFile(
            sourceFile,
            sourceFile.statements.map((statement) =>
                statement === existing ? updatedImport : statement
            )
        );
    }

    const newImport = factory.createImportDeclaration(
        undefined,
        factory.createImportClause(
            false,
            undefined,
            factory.createNamedImports([newSpecifier])
        ),
        factory.createStringLiteral(modulePath)
    );

    return factory.updateSourceFile(sourceFile, [
        newImport,
        ...sourceFile.statements,
    ]);
};

// The TS printer drops blank-line trivia around any statement whose
// descendant was rewritten, which collapses the blank line the repo's
// style otherwise keeps between the const declaration and its default
// export. Restore it rather than fighting the printer's trivia model.
const restoreExportSpacing = (source: string): string =>
    source.replace(/^\};\nexport default/m, '};\n\nexport default');

const main = async (): Promise<void> => {
    try {
        validateRootDirectory();
        const args = parseArgs();

        const gameSlug = StringHelpers.toSlug(args.game);
        const slug = StringHelpers.toSlug(args.location);
        const exportName = StringHelpers.toCamelCase(args.location);
        const modulePath = `@/lib/assets/${gameSlug}/locations`;

        const imagePath = path.join(getLocationsDir(gameSlug), `${slug}.png`);
        if (!fs.existsSync(imagePath)) {
            throw new Error(`${IMAGE_NOT_FOUND} ("${imagePath}").`);
        }

        const splitPath = getSplitPath(gameSlug, args.split);
        if (!fs.existsSync(splitPath)) {
            throw new Error(SPLIT_NOT_FOUND);
        }

        const splitSource = fs.readFileSync(splitPath, 'utf-8');
        const parsedSplit = ts.createSourceFile(
            splitPath,
            splitSource,
            ts.ScriptTarget.Latest,
            true,
            ts.ScriptKind.TS
        );

        const {
            sourceFile: withMap,
            found,
            alreadyWired,
        } = addMapToLocation(parsedSplit, args.location, exportName);

        if (!found) {
            throw new Error(LOCATION_NOT_FOUND);
        }

        if (alreadyWired) {
            logSuccess(
                `"${args.location}" already has a map wired up. Nothing to do.`
            );
            return;
        }

        const barrelPath = getBarrelPath(gameSlug);
        const exports = readBarrelExports(barrelPath);
        exports.set(exportName, slug);
        writeBarrelExports(barrelPath, exports);

        const withImport = addImportToSplit(withMap, modulePath, exportName);
        const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
        const printed = printer.printFile(withImport);

        const prettierConfig = (await prettier.resolveConfig(splitPath)) ?? {};
        const formatted = await prettier.format(printed, {
            ...prettierConfig,
            filepath: splitPath,
        });

        fs.writeFileSync(splitPath, restoreExportSpacing(formatted));

        logSuccess(
            `Wired "${slug}.png" into "${args.location}" (${args.split} split)!`
        );
    } catch (error) {
        handleException(error);
    }
};

main();
