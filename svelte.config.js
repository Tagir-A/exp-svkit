import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import * as path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svx', '.svelte'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex()],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
		vite: {
			resolve: {
				alias: {
					$src: path.resolve('src/')
				}
			}
		}
	}
}

export default config
