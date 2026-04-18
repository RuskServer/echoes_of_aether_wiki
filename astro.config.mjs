// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindv4 from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.ruskserver.com',
	integrations: [
		starlight({
			defaultTheme: 'dark',
			title: 'Echoes of Aether Wiki',
			customCss: ['./src/styles/tailwind.css'],
			components: {
				Header: './src/components/HeaderLinks.astro'
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'プレイヤー情報',
					items: [
						{ label: '始め方', slug: 'players/getting-started' },
						{ label: '冒険ガイド', slug: 'players/adventure-guide' },
					],
				},
				{
					label: '世界観',
					autogenerate: { directory: 'worldview' },
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindv4()],
	},
});
