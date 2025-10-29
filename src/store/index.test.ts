import { describe, it, expect } from 'vitest';
import { get } from 'svelte/store';
import { openModal } from './index.js';

describe('openModal store', () => {
	it('should initialize with false', () => {
		const value = get(openModal);
		expect(value).toBe(false);
	});

	it('should update to true when set', () => {
		openModal.set(true);
		const value = get(openModal);
		expect(value).toBe(true);
	});

	it('should update to false when set', () => {
		openModal.set(false);
		const value = get(openModal);
		expect(value).toBe(false);
	});

	it('should toggle between states', () => {
		openModal.set(false);
		expect(get(openModal)).toBe(false);

		openModal.set(true);
		expect(get(openModal)).toBe(true);

		openModal.set(false);
		expect(get(openModal)).toBe(false);
	});

	it('should notify subscribers on update', () => {
		let notifiedValue;
		const unsubscribe = openModal.subscribe(value => {
			notifiedValue = value;
		});

		openModal.set(true);
		expect(notifiedValue).toBe(true);

		openModal.set(false);
		expect(notifiedValue).toBe(false);

		unsubscribe();
	});
});
