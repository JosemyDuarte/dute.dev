export interface Project {
	id: string;
	title: string;
	description: string;
	url: string;
	emoji: string;
	technologies: string[];
	featured?: boolean;
}

export const projects: Project[] = [
	{
		id: 'devsquotesprinter',
		title: 'DevsQuotesPrinter',
		description:
			'A GoLang service that builds an image with the provided text printed on it. Used for automating sharing quotes on social media.',
		url: 'https://github.com/JosemyDuarte/DevsQuotesPrinter',
		emoji: '🖨️',
		technologies: ['Go', 'Image Processing', 'Automation'],
		featured: true
	},
	{
		id: 'feed2pocket',
		title: 'feed2pocket',
		description:
			'Feeds2Pocket fetches and store RSS links into Pocket. I wanted a simple way to read my RSS feeds on my Kobo e-reader. It runs as a cron job in Cloudflare Workers.',
		url: 'https://github.com/JosemyDuarte/feed2pocket',
		emoji: '📚',
		technologies: ['Cloudflare Workers', 'RSS', 'TypeScript'],
		featured: true
	},
	{
		id: 'fire-calculator',
		title: 'FIRE Calculator',
		description:
			'FIRE (Financial Independence, Retire Early) quickly calculates how much you need to save to comfortably retire and live off your investments.',
		url: 'https://calculadorafire.netlify.app/',
		emoji: '💰',
		technologies: ['Svelte', 'Finance', 'Calculator'],
		featured: true
	}
];
