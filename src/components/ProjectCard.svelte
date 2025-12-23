<script lang="ts">
	import type { Project } from '$lib/data/projects';

	interface Props {
		project: Project;
		index: number;
	}

	let { project, index }: Props = $props();
</script>

<div
	class="group relative flex w-full flex-col overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:flex-row md:items-center md:gap-10 md:p-8"
>
	<!-- Emoji Icon Container -->
	<div
		class="flex aspect-square w-full items-center justify-center rounded-2xl {project.bgColor} transition-transform duration-500 group-hover:scale-105 md:w-[280px]"
	>
		<span class="text-7xl md:text-8xl">{project.emoji}</span>
	</div>

	<!-- Project Info -->
	<div class="mt-8 flex-1 md:mt-0">
		<div class="flex flex-col gap-3">
			<span
				class="inline-block self-start rounded-full bg-gray-100 px-4 py-1 text-xs font-bold tracking-wider text-gray-500"
			>
				{project.category}
			</span>
			<h4 class="text-3xl font-bold text-[#1a1c1e] md:text-4xl">
				{project.title}
			</h4>
			<p class="text-base leading-relaxed text-[#4b5563] md:text-lg">
				{project.description}
			</p>
		</div>

		<div class="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
			<!-- Technology Tags -->
			<div class="flex flex-wrap gap-3">
				{#each project.technologies as tech}
					<div
						class="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-1.5 shadow-sm transition-all duration-300 hover:border-gray-200"
					>
						<span class="h-2 w-2 rounded-full {project.tagColors?.[tech] || 'bg-gray-400'}"></span>
						<span class="text-sm font-medium text-gray-600">{tech}</span>
					</div>
				{/each}
			</div>

			<!-- Explore Action -->
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="group/btn flex items-center gap-2 rounded-xl bg-[#4285F4] px-6 py-3 font-semibold text-white shadow-[0_4px_14px_0_rgba(66,133,244,0.39)] transition-all duration-300 hover:bg-[#3367d6] hover:shadow-[0_6px_20px_rgba(66,133,244,0.23)]"
			>
				<span>Explore</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>
