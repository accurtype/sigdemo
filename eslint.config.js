import eslint from '@eslint/js';
import accurtypeStyle from 'eslint-config-accurtype-style';
import { getDirname } from 'esm-entry';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	...accurtypeStyle,
	eslint.configs.recommended,
	...tseslint.configs.stylisticTypeChecked,
	{
		name: 'TS Base Config',
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: getDirname(import.meta.url),
				project: [
					'tsconfig.json',
				],
			},
		},
	},
	{
		name: 'Opt Rules',
		rules: { 'no-unused-vars': 'off' },
	},
	{
		name: 'Global Ignore',
		ignores: [
			'**/*.md',
			'.*',
			'eslint.config.js',
			'cz-config.cjs',
			'**/dist',
		],
	},
);
