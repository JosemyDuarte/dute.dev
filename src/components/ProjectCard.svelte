<script lang="ts">
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();
	let links = $derived([
		{ label: project.actionLabel, url: project.url },
		...(project.additionalLinks ?? [])
	]);
</script>

<article
	class="relative flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/30 hover:bg-white/[0.06]"
>
	<div class="mb-5 flex flex-wrap items-center gap-3">
		<span
			class="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-bold tracking-wider text-blue-300"
			>{project.category}</span
		>
		{#if project.archived}
			<span
				class="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200"
				>Archived</span
			>
		{/if}
		<span class="ml-auto text-3xl" aria-hidden="true">{project.emoji}</span>
	</div>
	<h3 class="break-words text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
	<p class="mt-3 leading-relaxed text-slate-300">{project.description}</p>

	{#if project.workflow}
		<figure class="my-6 rounded-xl border border-blue-400/20 bg-blue-950/30 p-4">
			<figcaption class="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-200">
				How it works
			</figcaption>
			<ol class="space-y-3">
				{#each project.workflow as step, index}
					<li
						class="relative flex items-center gap-3 text-sm text-slate-200 before:absolute before:left-[13px] before:top-7 before:h-3 before:border-l before:border-blue-400/30 last:before:hidden"
					>
						<span
							aria-hidden="true"
							class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-400/10 text-xs font-semibold text-blue-200"
							>{index + 1}</span
						>
						{step}
					</li>
				{/each}
			</ol>
		</figure>
	{/if}
	{#if project.detail}
		<p class="mb-6 text-sm leading-relaxed text-slate-400">{project.detail}</p>
	{/if}
	{#if project.archived}
		<p class="my-4 text-sm leading-relaxed text-amber-100/90">
			Pocket shut down in July 2025, so this integration no longer runs.
			<a
				href="https://blog.mozilla.org/en/mozilla/building-whats-next/"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-4 hover:text-white"
				>Read Mozilla’s announcement<span class="sr-only"> (opens in a new tab)</span></a
			>.
		</p>
	{/if}
	<div class="mt-auto pt-6">
		<ul aria-label="Technologies" class="flex flex-wrap gap-2">
			{#each project.technologies as tech}
				<li
					class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
				>
					{tech}
				</li>
			{/each}
		</ul>
		<div class="mt-4 flex flex-col items-start">
			{#each links as link (link.url)}
				<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex min-h-11 items-center gap-2 font-semibold text-blue-300 underline-offset-4 hover:text-blue-200 hover:underline"
				>
					{link.label}<span class="sr-only">: {project.title} (opens in a new tab)</span>
					<span aria-hidden="true">↗</span>
				</a>
			{/each}
		</div>
	</div>
</article>
