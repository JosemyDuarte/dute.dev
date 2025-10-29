import { ANIMATION } from '$lib/constants';

/**
 * Calculate animation delay for staggered animations
 * @param index - Zero-based index of the element
 * @returns CSS animation delay string
 *
 * @example
 * getAnimationDelay(0) // '0ms'
 * getAnimationDelay(2) // '300ms'
 */
export function getAnimationDelay(index: number): string {
	return `${index * ANIMATION.STAGGER_DELAY_MS}ms`;
}

/**
 * Get animation delay in seconds (for Svelte transitions)
 * @param index - Zero-based index of the element
 * @returns Delay in seconds
 */
export function getAnimationDelaySeconds(index: number): number {
	return (index * ANIMATION.STAGGER_DELAY_MS) / 1000;
}
