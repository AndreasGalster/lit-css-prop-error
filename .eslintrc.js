module.exports = {
	globals: {
		Polymer: true,
		require: true,
		__dirname: true,
		FB: true,
		localStorage: true,
		customEvent: true,
		customElements: true
	},
	env: {
		browser: true,
		es6: true,
		amd: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'google'
	],
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	rules: {
		'graphql/template-strings': ['error', {
			// Import default settings for your GraphQL client. Supported values:
			// 'apollo', 'relay', 'lokka', 'literal'
			env: 'apollo'
			// no need to specify schema here, it will be automatically determined using .graphqlconfig
		}],
		// 'graphql/named-operations': 1,
		// 'graphql/required-fields': 1,
		'brace-style': 0,
		'no-var': 0,
		'require-jsdoc': 0,
		'no-console': 0,
		'no-tabs': 0,
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},
	plugins: [
		'graphql'
	]
};
