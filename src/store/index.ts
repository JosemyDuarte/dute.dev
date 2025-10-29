import { writable } from 'svelte/store';

/**
 * Controls the visibility of the mobile navigation modal
 */
export const openModal = writable<boolean>(false);

/**
 * Type-safe store for modal state
 */
export type ModalStore = typeof openModal;
