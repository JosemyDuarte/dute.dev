<script>
	import { EXTERNAL_LINKS } from '$lib/constants';
</script>

<div class="flex flex-wrap items-center justify-center gap-4">
	<a
		href={EXTERNAL_LINKS.email}
		class="rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-primary-dark"
		>Contact me</a
	>
	<a
		href={EXTERNAL_LINKS.resume}
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-lg border-2 border-brand-primary px-6 py-3 font-semibold text-brand-primary transition-colors hover:bg-blue-50"
	>
		View résumé<span class="sr-only"> (opens in a new tab)</span>
	</a>
</div>
