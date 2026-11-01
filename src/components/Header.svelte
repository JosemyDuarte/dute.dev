<script>
	import { EXTERNAL_LINKS } from '$lib/constants';
</script>

<header class="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur">
	<div
		class="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-2 px-4 py-4 sm:px-8"
	>
		<a
			href="/"
			aria-label="dute.dev home"
			class="poppins shrink-0 text-lg font-semibold sm:text-xl md:text-2xl"
		>
			dute.<span class="text-green-500">dev</span>
		</a>
		<nav aria-label="Primary" class="flex items-center gap-2 text-xs sm:gap-6 sm:text-base">
			<a
				href={EXTERNAL_LINKS.resume}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex min-h-11 items-center whitespace-nowrap font-semibold text-slate-700 underline-offset-4 hover:underline"
			>
				View résumé<span class="sr-only"> (opens in a new tab)</span>
			</a>
			<a
				href={EXTERNAL_LINKS.email}
				class="inline-flex min-h-11 items-center whitespace-nowrap rounded-lg bg-brand-primary px-3 py-3 font-semibold text-white transition-colors hover:bg-brand-primary-dark sm:px-5"
				>Contact me</a
			>
		</nav>
	</div>
</header>
