<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { calculateEmojiPosition } from '$lib/utils/projectCard';

	interface Props {
		project: Project;
		index: number;
	}

	let { project, index }: Props = $props();

	const emojiOnLeft = calculateEmojiPosition(index);
</script>

<div
	class="group relative flex {emojiOnLeft
		? 'flex-col md:flex-row'
		: 'flex-col-reverse md:flex-row'} items-center gap-6 md:gap-12"
>
	<!-- Emoji Icon -->
	{#if emojiOnLeft}
		<div
			class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-4xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl sm:h-24 sm:w-24 sm:text-5xl md:h-32 md:w-32 md:text-6xl"
		>
			{project.emoji}
		</div>
	{/if}

	<!-- Project Card -->
	<a
		href={project.url}
		target="_blank"
		rel="noopener noreferrer"
		aria-label="View {project.title} project - {project.description}"
		class="relative w-full overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl sm:p-8 md:w-2/3"
	>
		<!-- Animated gradient overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		></div>

		<!-- Accent line -->
		<div
			class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-2"
		></div>

		<div class="relative">
			<!-- Title -->
			<h4
				class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
			>
				{project.title}
			</h4>

			<!-- Description -->
			<p class="mt-4 leading-relaxed text-gray-700">
				{project.description}
			</p>

			<!-- Technology Tags -->
			<div class="mt-6 flex flex-wrap gap-2">
				{#each project.technologies as tech}
					<span
						class="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200/50 transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-400"
					>
						{tech}
					</span>
				{/each}
			</div>

			<!-- Call to Action -->
			<div
				class="mt-6 flex items-center font-semibold text-blue-600 transition-colors duration-300 group-hover:text-indigo-600"
			>
				<span>Explore Project</span>
				<svg
					class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</div>
		</div>
	</a>

	<!-- Emoji Icon (right side) -->
	{#if !emojiOnLeft}
		<div
			class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-4xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl sm:h-24 sm:w-24 sm:text-5xl md:h-32 md:w-32 md:text-6xl"
		>
			{project.emoji}
		</div>
	{/if}
</div>
