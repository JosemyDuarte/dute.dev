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
	/** Category label for the project */
	category: string;
	/** Background color for the emoji container */
	bgColor: string;
	/** Optional specific colors for technology tags */
	tagColors?: Record<string, string>;
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
			'A GoLang service that builds an image with the provided text printed on it. Used for automating sharing quotes on social media, streamlining the content creation process for developers.',
		url: 'https://github.com/JosemyDuarte/DevsQuotesPrinter',
		emoji: '🖨️',
		category: 'TOOLING',
		bgColor: 'bg-[#DEE7FF]',
		technologies: ['Go', 'Image Processing', 'Automation'],
		tagColors: {
			Go: 'text-blue-500',
			'Image Processing': 'text-indigo-500',
			Automation: 'text-purple-500'
		},
		featured: true
	},
	{
		id: 'feed2pocket',
		title: 'feed2pocket',
		description:
			'Feeds2Pocket fetches and stores RSS links into Pocket. I wanted a simple way to read my RSS feeds on my Kobo e-reader. It runs as a cron job in Cloudflare Workers for efficiency.',
		url: 'https://github.com/JosemyDuarte/feed2pocket',
		emoji: '📚',
		category: 'UTILITY',
		bgColor: 'bg-[#D1F2EB]',
		technologies: ['Cloudflare Workers', 'RSS', 'TypeScript'],
		tagColors: {
			'Cloudflare Workers': 'text-orange-500',
			RSS: 'text-cyan-500',
			TypeScript: 'text-blue-600'
		},
		featured: true
	},
	{
		id: 'fire-calculator',
		title: 'FIRE Calculator',
		description:
			'FIRE (Financial Independence, Retire Early) quickly calculates how much you need to save to comfortably retire and live off your investments based on your spending habits.',
		url: 'https://calculadorafire.netlify.app/',
		emoji: '💰',
		category: 'FINANCE',
		bgColor: 'bg-[#FEF5D4]',
		technologies: ['Svelte', 'Finance', 'Calculator'],
		tagColors: {
			Svelte: 'text-red-500',
			Finance: 'text-green-500',
			Calculator: 'text-emerald-500'
		},
		featured: true
	}
];
