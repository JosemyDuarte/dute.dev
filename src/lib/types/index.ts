/**
 * Shared TypeScript type definitions
 */

/**
 * Re-export Project type for easier imports
 */
export type { Project } from '$lib/data/projects';

/**
 * Common component props
 */
export interface BaseComponentProps {
	/** CSS class names to apply to the component */
	class?: string;
	/** Inline styles to apply */
	style?: string;
}

/**
 * Props for components that can be identified
 */
export interface IdentifiableProps {
	/** Unique identifier for the element */
	id: string;
}

/**
 * Props for components with children
 */
export interface ChildrenProps {
	/** Child components or content */
	children?: any;
}

/**
 * Utility types
 */

/**
 * Makes all properties of T optional recursively
 */
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Makes specified keys K of T required
 */
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Extracts the value type from an array type
 */
export type ArrayElement<T extends readonly unknown[]> = T extends readonly (infer U)[] ? U : never;

/**
 * Creates a type with all properties of T as readonly recursively
 */
export type DeepReadonly<T> = {
	readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

/**
 * Navigation and routing types
 */
export interface NavigationItem {
	/** Display text for the navigation item */
	label: string;
	/** URL or hash to navigate to */
	href: string;
	/** Whether the link opens in a new tab */
	external?: boolean;
	/** ARIA label for accessibility */
	ariaLabel?: string;
}

/**
 * Animation types
 */
export interface AnimationConfig {
	/** Duration in milliseconds */
	duration: number;
	/** Delay in milliseconds */
	delay?: number;
	/** Easing function */
	easing?: string;
}

/**
 * Store types
 */

/**
 * Type-safe store for modal state
 */
export type { ModalStore } from '$store';
