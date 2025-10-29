/**
 * Calculates whether the emoji should be positioned on the left side
 * based on the project card's index.
 *
 * @param index - The index of the project card
 * @returns true if emoji should be on left (even index), false for right (odd index)
 */
export function calculateEmojiPosition(index: number): boolean {
	return index % 2 === 0;
}
