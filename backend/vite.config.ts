import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [tsConfigPaths()],
	test: {
		globals: true,
		exclude: [
			'**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/dtos/**/*.ts',
      '**/repositories/**/*.ts',
      '**/interfaces/**/*.ts',
			'vite.config.ts'
		],
		coverage: {
			exclude: [
				'**/node_modules/**',
				'**/dist/**',
				'**/cypress/**',
				'**/.{idea,git,cache,output,temp}/**',
				'**/dtos/**/*.ts',
				'**/repositories/**/*.ts',
				'**/interfaces/**/*.ts',
				'vite.config.ts'
			]
		}
	},
});
