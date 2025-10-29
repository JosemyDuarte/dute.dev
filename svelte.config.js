import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * SvelteKit configuration
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	/**
	 * Preprocessor configuration
	 * Using vitePreprocess for TypeScript, PostCSS, and other transformations
	 * @see https://svelte.dev/docs/kit/integrations
	 */
	preprocess: vitePreprocess(),

	kit: {
		/**
		 * Cloudflare Pages adapter configuration
		 * Builds the application for deployment to Cloudflare Pages
		 * @see https://svelte.dev/docs/kit/adapters
		 */
		adapter: adapter()
	}
};

export default config;
