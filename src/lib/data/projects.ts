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
	/** Describes the destination before opening it. */
	actionLabel: string;
	/** Additional destinations for grouped projects. */
	additionalLinks?: { label: string; url: string }[];
	/** Curated projects shown before the rest of the collection. */
	featured?: boolean;
	/** A concise implementation detail for featured projects. */
	detail?: string;
	/** Three steps illustrating the project workflow. */
	workflow?: [string, string, string];
	/** Historical projects whose upstream service is no longer available. */
	archived?: boolean;
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
}

/**
 * Collection of portfolio projects
 * Featured projects are curated explicitly; array order is preserved within each group.
 */
export const projects: Project[] = [
	{
		id: 'devsquotesprinter',
		title: 'DevsQuotesPrinter',
		description:
			'Takes a quote, returns a post-ready image. Built to automate the repetitive part of sharing developer quotes on social media.',
		url: 'https://github.com/JosemyDuarte/DevsQuotesPrinter',
		actionLabel: 'View source',
		featured: true,
		detail:
			'A Go image-generation service with Docker and Google Cloud Functions deployment options.',
		workflow: ['Quote text', 'Go renderer', 'PNG image'],
		emoji: '🖨️',
		category: 'TOOLING',
		bgColor: 'bg-[#DEE7FF]',
		technologies: ['Go', 'Image Processing', 'Automation'],
		tagColors: {
			Go: 'text-blue-500',
			'Image Processing': 'text-indigo-500',
			Automation: 'text-purple-500'
		}
	},
	{
		id: 'lazywhatsapp',
		title: 'LazyWhatsApp',
		description:
			'Too many messages to catch up on? Explore activity, participant rankings and shared content from a WhatsApp export, with chat parsing handled in your browser.',
		url: 'https://github.com/JosemyDuarte/LazyWhatsApp',
		actionLabel: 'View source',
		emoji: '💬',
		category: 'ANALYTICS',
		bgColor: 'bg-[#D1F2EB]',
		technologies: ['Astro', 'TypeScript', 'Web Workers']
	},
	{
		id: 'feed2pocket',
		title: 'feed2pocket',
		description:
			'A scheduled Cloudflare Worker that synced RSS feeds into Pocket for reading on a Kobo e-reader. Retained as a historical example of serverless automation.',
		url: 'https://github.com/JosemyDuarte/feed2pocket',
		actionLabel: 'View archived source',
		archived: true,
		emoji: '📚',
		category: 'UTILITY',
		bgColor: 'bg-[#D1F2EB]',
		technologies: ['Cloudflare Workers', 'RSS', 'TypeScript'],
		tagColors: {
			'Cloudflare Workers': 'text-orange-500',
			RSS: 'text-cyan-500',
			TypeScript: 'text-blue-600'
		}
	},
	{
		id: 'fire-calculator',
		title: 'FIRE Calculator',
		description:
			'Enter what you spend. Get back the number that means you never have to work again. A Financial Independence calculator built for the Spanish-speaking market.',
		url: 'https://calculadorafire.netlify.app/',
		actionLabel: 'Try calculator',
		featured: true,
		detail: 'Built with Svelte for Spanish-speaking readers exploring financial independence.',
		workflow: ['Your spending', 'FIRE calculator', 'Savings target'],
		emoji: '💰',
		category: 'FINANCE',
		bgColor: 'bg-[#FEF5D4]',
		technologies: ['Svelte', 'Finance', 'Calculator'],
		tagColors: {
			Svelte: 'text-red-500',
			Finance: 'text-green-500',
			Calculator: 'text-emerald-500'
		}
	},
	{
		id: 'index-funds-comparator',
		title: 'Index Funds Comparator',
		description:
			'MyInvestor or IndexaCapital? Depends on your portfolio size. This tool shows you the fee crossover point so you can stop guessing and start optimizing.',
		url: 'https://indexfundscompartor.pages.dev',
		actionLabel: 'Compare fees',
		featured: true,
		detail: 'A Svelte tool for comparing MyInvestor and IndexaCapital fees across portfolio sizes.',
		workflow: ['Portfolio size', 'Fee comparison', 'Crossover point'],
		emoji: '📊',
		category: 'FINANCE',
		bgColor: 'bg-[#E0F2F1]',
		technologies: ['Svelte', 'Finance', 'Comparison'],
		tagColors: {
			Svelte: 'text-red-500',
			Finance: 'text-green-500',
			Comparison: 'text-indigo-500'
		}
	},
	{
		id: 'trmnl-plugins',
		title: 'TRMNL Plugins',
		description:
			'Small tools for your TRMNL e-ink display: weekly pregnancy milestones, rotating coffee recipes and a Trakt watch-time dashboard.',
		url: 'https://trmnl.com/recipes/249841',
		actionLabel: 'Install Pregnancy Tracker',
		additionalLinks: [
			{ label: 'Install Coffee Recipe', url: 'https://trmnl.com/recipes/252053' },
			{ label: 'Install TraktWastedTime', url: 'https://trmnl.com/recipes/252905' }
		],
		emoji: '🖥️',
		category: 'PLUGINS',
		bgColor: 'bg-[#EDE7F6]',
		technologies: ['TRMNL', 'E-Ink', 'Dashboard', 'Trakt']
	}
];
