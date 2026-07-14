const path = require('path');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Files in src/lib/games must default-export a Game, Split, or Location (depending on location) whose name is an UPPERCASE match of the filename. Barrel index.ts files are exempt.',
        },
        messages: {
            noDefaultExport: 'File must have a default export.',
            notIdentifier:
                'Default export must be a const identifier, not an inline expression.',
            notConst: 'Default export must be declared with "const".',
            notExpectedType:
                'Default export must be explicitly typed as "{{expectedType}}".',
            notUppercase: 'Export name "{{name}}" must be all UPPERCASE.',
            nameMismatch:
                'Export name "{{name}}" must match the filename "{{expected}}".',
        },
        schema: [],
    },
    create(context) {
        const basename = path.basename(context.filename, '.ts');

        // Barrel files just re-export a game/split assembled elsewhere.
        if (basename === 'index') return {};

        const expectedName = basename.toUpperCase().replace(/-/g, '_');
        const parentDir = path.basename(path.dirname(context.filename));
        const expectedType =
            parentDir === 'locations'
                ? 'Location'
                : parentDir === 'splits'
                  ? 'Split'
                  : 'Game';
        let hasDefaultExport = false;

        return {
            ExportDefaultDeclaration(node) {
                hasDefaultExport = true;
                if (node.declaration.type !== 'Identifier') {
                    context.report({ node, messageId: 'notIdentifier' });
                    return;
                }

                const exportedName = node.declaration.name;
                const scope = context.sourceCode.getScope(node);
                const variable = scope.references.find(
                    (ref) => ref.identifier === node.declaration
                )?.resolved;
                const declarator = variable?.defs.find(
                    (def) => def.type === 'Variable'
                );

                if (!declarator || declarator.parent.kind !== 'const') {
                    context.report({ node, messageId: 'notConst' });
                    return;
                }

                const typeAnnotation =
                    declarator.node.id.typeAnnotation?.typeAnnotation;
                if (
                    !typeAnnotation ||
                    typeAnnotation.type !== 'TSTypeReference' ||
                    typeAnnotation.typeName.name !== expectedType
                ) {
                    context.report({
                        node,
                        messageId: 'notExpectedType',
                        data: { expectedType },
                    });
                }

                if (!/^[A-Z0-9_]+$/.test(exportedName)) {
                    context.report({
                        node,
                        messageId: 'notUppercase',
                        data: { name: exportedName },
                    });
                    return;
                }

                if (exportedName !== expectedName) {
                    context.report({
                        node,
                        messageId: 'nameMismatch',
                        data: { name: exportedName, expected: expectedName },
                    });
                }
            },

            'Program:exit'(node) {
                if (!hasDefaultExport) {
                    context.report({ node, messageId: 'noDefaultExport' });
                }
            },
        };
    },
};
