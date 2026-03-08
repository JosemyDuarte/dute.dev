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
			'Takes a quote, returns a post-ready image. Built to automate the repetitive part of sharing developer quotes on social media.',
		url: 'https://github.com/JosemyDuarte/DevsQuotesPrinter',
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
		id: 'feed2pocket',
		title: 'feed2pocket',
		description:
			'Wanted my RSS feeds on my Kobo e-reader. Wrote a Cloudflare Worker that runs on a cron to sync them into Pocket automatically. Solves one problem, does it silently.',
		url: 'https://github.com/JosemyDuarte/feed2pocket',
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
		id: 'trmnl-pregnancy-tracker',
		title: 'Pregnancy Tracker (TRMNL Plugin)',
		description:
			'Tracks weekly pregnancy milestones on your TRMNL e-ink dashboard. Because some countdowns deserve a dedicated screen.',
		url: 'https://trmnl.com/recipes/249841',
		emoji: '🤰',
		category: 'PLUGIN',
		bgColor: 'bg-[#FCE4EC]',
		technologies: ['TRMNL', 'E-Ink', 'Dashboard'],
		tagColors: {
			TRMNL: 'text-pink-500',
			'E-Ink': 'text-gray-600',
			Dashboard: 'text-rose-500'
		}
	},
	{
		id: 'trmnl-coffee-recipe',
		title: 'Coffee Recipe (TRMNL Plugin)',
		description:
			'Rotates through coffee brewing recipes on your e-ink display. Your daily brew guide, always in sight.',
		url: 'https://trmnl.com/recipes/252053',
		emoji: '☕',
		category: 'PLUGIN',
		bgColor: 'bg-[#FFF3E0]',
		technologies: ['TRMNL', 'E-Ink', 'Dashboard'],
		tagColors: {
			TRMNL: 'text-amber-600',
			'E-Ink': 'text-gray-600',
			Dashboard: 'text-orange-500'
		}
	},
	{
		id: 'trmnl-trakt-wasted-time',
		title: 'TraktWastedTime (TRMNL Plugin)',
		description:
			"Find out exactly how many days of your life you've donated to the screen. Because someone had to put a number on your TV addiction.",
		url: 'https://trmnl.com/recipes/252905',
		emoji: '📺',
		category: 'PLUGIN',
		bgColor: 'bg-[#EDE7F6]',
		technologies: ['TRMNL', 'Trakt', 'E-Ink'],
		tagColors: {
			TRMNL: 'text-purple-500',
			Trakt: 'text-red-500',
			'E-Ink': 'text-gray-600'
		}
	}
];
