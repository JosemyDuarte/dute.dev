/**
 * Combines class names, filtering out falsy values
 * @param classes - Array of class names or conditionals
 * @returns Combined class string
 *
 * @example
 * cn('base', isActive && 'active', 'other') // 'base active other'
 * cn('base', false && 'hidden') // 'base'
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
	return classes.filter(Boolean).join(' ');
}
