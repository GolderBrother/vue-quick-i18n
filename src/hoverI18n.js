const { registerHoverProvider } = require("./utils/vs");
const { provideHover } = require("./lib/provideHover");
module.exports = (context) => {
  const hoverSelectorList = [
    { scheme: "file", language: "vue" },
    { scheme: "file", language: "javascript" },
    { scheme: "file", language: "javascriptreact" },
    { scheme: "file", language: "typescript" },
    { scheme: "file", language: "typescriptreact" },
  ];
  context.subscriptions.push(
    registerHoverProvider(hoverSelectorList, {
      provideHover,
    })
  );
};
