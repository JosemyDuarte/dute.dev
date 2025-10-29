/**
 * Application-wide constants
 */

/**
 * Animation timing constants
 */
export const ANIMATION = {
	/** Delay between staggered animations in milliseconds */
	STAGGER_DELAY_MS: 150,
	/** Default transition duration */
	TRANSITION_DURATION_MS: 300,
} as const;

/**
 * Layout breakpoints (matches Tailwind defaults)
 */
export const BREAKPOINTS = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1536,
} as const;

/**
 * Scroll threshold for showing sticky header
 */
export const SCROLL_THRESHOLD = 100;

/**
 * External links
 */
export const EXTERNAL_LINKS = {
	github: 'https://github.com/josemyd',
	linkedin: 'https://www.linkedin.com/in/josemy-duarte',
	blog: 'https://josemy-duarte.medium.com',
	email: 'mailto:josemy.duarte@gmail.com',
} as const;
