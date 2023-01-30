const { registerCommand } = require('./utils/vs');
const { openFileByPath } = require('./utils');
const { operation } = require('./utils/constant');
const quickJson = require('./lib/quickJson');

module.exports = context => {
    context.subscriptions.push(
        registerCommand(operation.quickI18n.cmd, uri => {
            if (uri && uri.path) {
                openFileByPath(uri.path).then(editor => {
                    quickJson({ editor, context });
                });
            } else {
                quickJson({ context });
            }
        })
    );
};
