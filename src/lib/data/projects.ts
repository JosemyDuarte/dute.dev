/**
 * Represents a project in the portfolio
 */
export interface Project {
	/** Unique identifier for the project */
	id: string;
	/** Display title of the project */
	title: string;
	/** Detailed description of the project */
	description: string;
	/** URL to the project (GitHub, live demo, etc.) */
	url: string;
	/** Emoji icon representing the project */
	emoji: string;
	/** List of technologies/tools used in the project */
	technologies: string[];
	/** Whether the project should be featured prominently */
	featured?: boolean;
}

/**
 * Collection of portfolio projects
 * Listed in order of prominence/importance
 */
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
