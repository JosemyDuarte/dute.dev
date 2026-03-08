/**
 * Brand design tokens for dute.dev
 *
 * This is the canonical source of truth for all visual design decisions.
 * Keep tailwind.config.ts and src/app.css in sync with changes here.
 *
 * See also: .agents/product-marketing-context.md for brand voice & positioning.
 */

export const colors = {
	/** Primary brand blue — CTAs, focus rings, interactive links, borders */
	primary: '#0834c4',
	/** Hover/active state for primary */
	primaryDark: '#00008b',
	/** Accent green — the ".dev" in wordmark, success states */
	accent: '#22c55e',

	/** Page background for light sections */
	surfaceLight: '#ffffff',
	/** Page background for dark sections (projects grid, brand page) */
	surfaceDark: '#0d1117',

	/** Primary body text on light background */
	textBase: '#1e293b',
	/** Muted/secondary text */
	textMuted: '#64748b',
	/** Heading/body text on dark background */
	textOnDark: '#ffffff',
	/** Muted text on dark background */
	textOnDarkMuted: '#94a3b8',

	/** Card borders on dark background */
	borderDark: 'rgba(255,255,255,0.08)',
	/** Card border on hover (dark context) */
	borderDarkHover: 'rgba(96,165,250,0.30)',

	/** Blue drop shadow — profile image and hero elements */
	shadowBlue: 'rgba(29,140,242,0.2)'
} as const;

export const typography = {
	fontHeading: "'Poppins', sans-serif",
	fontBody: "'Open Sans', sans-serif",

	/** Available heading weights: 400, 600, 700 */
	weightNormal: '400',
	weightSemibold: '600',
	weightBold: '700',
	/** Used for display headings (e.g. "Personal Projects") */
	weightBlack: '900',

	/**
	 * Type scale (desktop sizes — mobile uses Tailwind responsive prefixes)
	 * Usage notes in parentheses
	 */
	scaleXs: '0.75rem', // 12px — category tags, captions
	scaleSm: '0.875rem', // 14px — small labels
	scaleBase: '1rem', // 16px — body prose
	scaleLg: '1.125rem', // 18px — lead paragraph
	scaleXl: '1.25rem', // 20px
	scale2xl: '1.5rem', // 24px — card titles
	scale3xl: '1.875rem', // 30px — featured card titles
	scale5xl: '3rem', // 48px — hero subhead
	scale8xl: '6rem' // 96px — display heading
} as const;

export const spacing = {
	/** Button border radius */
	radiusButton: '8px',
	/** Card border radius (rounded-2xl) */
	radiusCard: '16px',
	/** Pill/tag border radius */
	radiusPill: '9999px',
	/** Small element radius */
	radiusSm: '4px',

	/** Standard card padding (p-6) */
	cardPadding: '1.5rem'
} as const;

export const animation = {
	/** Sticky header fade-in on scroll */
	fadeIn: 'fadeIn 300ms ease-in forwards',
	/** Project card entrance animation */
	slideUp: 'slideUp 0.5s ease-out',
	/** Modal/overlay entrance */
	scaleIn: 'scaleIn 0.3s ease-out',

	/** Delay increment between staggered sequential elements (ms) */
	staggerDelayMs: 150,

	/** Standard interaction transition */
	transitionBase: 'all 0.2s ease',
	/** Hover color transitions */
	transitionColors: 'color 0.2s, border-color 0.2s, background-color 0.2s',
	/** Slower entrance transitions */
	transitionSlow: 'all 0.5s ease-out'
} as const;

/** Consolidated brand token export */
export const brand = { colors, typography, spacing, animation } as const;

export default brand;
