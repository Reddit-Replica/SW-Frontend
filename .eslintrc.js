module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		// "plugin:vue/vue3-essential",
		// 'eslint:recommended'
		'plugin:vue/vue3-strongly-recommended',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	rules: {
		'no-console': process.env.VUE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.VUE_ENV === 'production' ? 'warn' : 'off',
	},
};
