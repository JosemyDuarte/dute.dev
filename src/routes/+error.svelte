<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error {$page.status}</title>
</svelte:head>

<main class="flex min-h-screen flex-col items-center justify-center p-6">
	<div class="max-w-md text-center">
		<h1 class="mb-4 text-6xl font-bold text-gray-900">
			{$page.status}
		</h1>
		<p class="mb-8 text-xl text-gray-600">
			{$page.error?.message || 'An unexpected error occurred'}
		</p>
		<a
			href="/"
			class="inline-block rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
		>
			Go back home
		</a>
	</div>
</main>
