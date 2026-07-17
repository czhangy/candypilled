/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description:
                'Disallow "interface" declarations. Use "type" instead.',
        },
        messages: {
            noInterface: 'Use "type" instead of "interface".',
        },
        schema: [],
    },
    create(context) {
        return {
            TSInterfaceDeclaration(node) {
                context.report({ node, messageId: 'noInterface' });
            },
        };
    },
};
