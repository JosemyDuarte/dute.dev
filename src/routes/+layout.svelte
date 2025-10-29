<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import { beforeNavigate } from '$app/navigation';

	import { openModal } from '../store';
	import { SCROLL_THRESHOLD } from '$lib/constants';

	export const prerender = true;

	let y: number = 0;
	let windowHeight: number = 0;
	$: showHeader = y > SCROLL_THRESHOLD;

	// Close modal when navigating
	beforeNavigate(() => {
		openModal.set(false);
	});

	/**
	 * Handle keyboard events for modal
	 */
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && $openModal) {
			openModal.set(false);
		}
	}
</script>

<a href="#main-content" class="skip-to-content">Skip to content</a>

{#if $openModal}
	<div
		role="dialog"
		aria-modal="true"
		aria-label="Navigation menu"
		class="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col gap-8 border-b bg-white p-5 px-8 md:hidden"
	>
		<div class="flex items-center justify-between gap-4 border-b pb-2">
			<h1 class="font-semibold">
				dute.<span class="text-green-500">dev</span>
			</h1>
			<button
				aria-label="Close navigation menu"
				on:click={() => ($openModal = false)}
				class="border-none outline-none"
			>
				<i class="fa-solid fa-xmark text-2xl"></i>
			</button>
		</div>
		<div class="flex flex-1 flex-col gap-4">
			<button>
				<a
					href="https://drive.google.com/file/d/1fqSuTNF9Ii-ImAOyJ-lrj3jQnpFMEH1S/view?usp=sharing."
					target="_blank"
					rel="noopener noreferrer"
				>
					<p class="poppins text-3xl font-semibold duration-200 group-hover:pl-2">
						Download Resume <i class="fa-solid fa-chevron-right pl-4 text-xl"></i>
					</p>
				</a>
			</button>
		</div>
	</div>
{/if}

{#if showHeader}
	<div class="fadeIn fixed left-0 top-0 z-20 flex w-full flex-col bg-white px-4">
		<Header />
	</div>
{/if}
<main id="main-content">
	<slot />
</main>
<!-- <Footer /> -->
<svelte:window bind:scrollY={y} bind:outerHeight={windowHeight} onkeydown={handleKeyDown} />
