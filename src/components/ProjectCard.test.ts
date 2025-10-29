import { describe, it, expect } from 'vitest';

// Pure function to test
function calculateEmojiPosition(index: number): boolean {
	return index % 2 === 0;
}

describe('ProjectCard emoji positioning logic', () => {
	it('should place emoji on left for even indices', () => {
		expect(calculateEmojiPosition(0)).toBe(true);
		expect(calculateEmojiPosition(2)).toBe(true);
		expect(calculateEmojiPosition(4)).toBe(true);
		expect(calculateEmojiPosition(100)).toBe(true);
	});

	it('should place emoji on right for odd indices', () => {
		expect(calculateEmojiPosition(1)).toBe(false);
		expect(calculateEmojiPosition(3)).toBe(false);
		expect(calculateEmojiPosition(5)).toBe(false);
		expect(calculateEmojiPosition(99)).toBe(false);
	});

	it('should handle index 0 correctly', () => {
		expect(calculateEmojiPosition(0)).toBe(true);
	});

	it('should alternate positions for sequential indices', () => {
		const positions = [0, 1, 2, 3, 4].map(calculateEmojiPosition);
		expect(positions).toEqual([true, false, true, false, true]);
	});
});
