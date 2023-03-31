const constants = {
	defaultStyle: {
		fontStyle: "italic",
		// textDecoration: "underline solid green"
	},
	errorStyle: {
		fontStyle: "italic",
		// textDecoration: "underline solid red"
	},
	langArr: ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue"],
	operation: {
		flatJson: { cmd: "vueQuickI18n.flatJson", title: "Flat Json" },
		unFlatJson: { cmd: "vueQuickI18n.unFlatJson", title: "unFlat Json" },
		showI18n: {
			cmd: "vueQuickI18n.showI18n",
			title: "Show I18n Translate Detail",
		},
		updateI18n: {
			cmd: "vueQuickI18n.updateI18n",
			title: "Update I18n Locales Json",
		},
		updateAllI18n: {
			cmd: "vueQuickI18n.updateAllI18n",
			title: "Update All I18n Locales",
		},
		quickAllI18n: {
			cmd: "vueQuickI18n.quickAllI18n",
			title: "Quick All I18n Locales",
		},
		generateRichieRC: {
			cmd: "vueQuickI18n.generateRichieRC",
			title: "Generate scope config file",
		},
		quickI18n: { cmd: "vueQuickI18n.quickI18n", title: "Quick I18n" },
		hoverI18n: { cmd: "vueQuickI18n.hoverI18n", title: "Hover I18n" },
		openI18nFile: { cmd: "vueQuickI18n.openI18nFile", title: "Open File" },
	},
	plugin: {
		name: "vue-quick-i18n",
		congratulations:
			'Congratulations, your extension "vue-quick-i18n" is now active!',
		noUri: "please selected a json file first",
	},
	defaultConfig: {
		defaultLocalesPath: "src/locales",
		puidType: "short",
		i18nValueHover: true,
		langFile: "zh-cn.json",
		modulePrefixFoUpdateJson: "",
		notAlertBeforeUpdateI18n: false,
		fileNameSubstitute: "components",
		notUseFileNameAsKey: false,
		parentDirLevel: 1,
	},
	pkgFileName: "package.json",
	customConfigFileName: "richierc.json",
};
module.exports = constants;
