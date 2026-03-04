<script lang="ts">
	import type { Project } from '$lib/data/projects';

	interface Props {
		project: Project;
		index: number;
	}

	let { project, index }: Props = $props();

	const isFeatured = index === 0;

	function handleMouseMove(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		(e.currentTarget as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
		(e.currentTarget as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
	}

	function handleMouseLeave(e: MouseEvent) {
		(e.currentTarget as HTMLElement).style.setProperty('--mouse-x', '50%');
		(e.currentTarget as HTMLElement).style.setProperty('--mouse-y', '50%');
	}
</script>

<div
	class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
	style="--mouse-x: 50%; --mouse-y: 50%"
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
>
	<!-- Spotlight overlay -->
	<div
		class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		style="background: radial-gradient(400px at var(--mouse-x) var(--mouse-y), rgba(66,133,244,0.08), transparent 60%)"
	></div>

	{#if isFeatured}
		<!-- Featured (large) card layout -->
		<div class="flex-1">
			<div class="mb-6 flex items-center justify-between">
				<span
					class="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-xs font-bold tracking-wider text-blue-400"
				>
					{project.category}
				</span>
				<span class="text-5xl" aria-hidden="true">{project.emoji}</span>
			</div>
			<h4 class="text-3xl font-bold text-white">
				{project.title}
			</h4>
			<p class="mt-3 leading-relaxed text-slate-400">
				{project.description}
			</p>
		</div>
		<div class="mt-8">
			<div class="flex flex-wrap gap-2">
				{#each project.technologies as tech}
					<span
						class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
					>
						{tech}
					</span>
				{/each}
			</div>
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors duration-200 hover:text-blue-300"
			>
				View Project
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</a>
		</div>
	{:else}
		<!-- Standard card layout with decorative emoji watermark -->
		<span
			class="pointer-events-none absolute bottom-4 right-4 select-none text-8xl opacity-[0.07]"
			aria-hidden="true"
		>
			{project.emoji}
		</span>
		<div class="flex-1">
			<span
				class="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-0.5 text-xs font-bold tracking-wider text-blue-400"
			>
				{project.category}
			</span>
			<h4 class="mt-3 text-xl font-bold text-white">
				{project.title}
			</h4>
			<p class="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
				{project.description}
			</p>
		</div>
		<div class="mt-6">
			<div class="flex flex-wrap gap-2">
				{#each project.technologies as tech}
					<span
						class="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-medium text-slate-300"
					>
						{tech}
					</span>
				{/each}
			</div>
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
			>
				View Project
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</a>
		</div>
	{/if}
</div>
