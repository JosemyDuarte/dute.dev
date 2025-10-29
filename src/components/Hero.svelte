<script>
	import CtAs from './CTAs.svelte';
	import Header from './Header.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
	import { getAnimationDelay } from '$lib/utils/animation';
</script>

<SectionWrapper id="hero">
	<Header />
	<div class="flex flex-1 flex-col items-center justify-center gap-10 pb-10 md:pb-14">
		<div class="hero">
			<img
				src="assets/profile.png"
				class="mx-auto h-auto w-40 rounded-full shadow-lg sm:h-auto sm:w-52 md:h-auto md:w-60 lg:h-auto lg:w-72"
				alt="Josemy Duarte"
			/>
		</div>

		<h2
			class="mx-auto w-full max-w-[1200px] text-center text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl"
		>
			Hello👋, I'm <span class="text-blue-500">Josemy Duarte</span>
		</h2>
		<p class="mx-auto w-full max-w-[1000px] text-center text-xl sm:text-2xl md:text-3xl">
			I assist companies in creating <span class="font-semibold italic">scalable</span> and
			<span class="font-semibold italic">reliable</span> cloud applications, ensuring service
			stability through <span class="font-semibold italic">technical excellence</span>.
		</p>
		<CtAs />

		<a
			href="#projects"
			class="mt-16 flex animate-bounce flex-col items-center text-gray-600 transition duration-200 hover:text-blue-500"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
			<span class="mt-1 text-sm">Personal Projects</span>
		</a>
	</div>
</SectionWrapper>

<SectionWrapper id="projects">
	<div class="mx-auto w-full max-w-6xl px-4 py-16">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<div class="relative inline-block">
				<h3
					class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
				>
					Personal Projects
				</h3>
				<span class="absolute -right-12 -top-2 animate-bounce text-4xl">🚀</span>
			</div>
			<p class="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
				Building tools that solve real problems and make life easier
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="relative space-y-20 md:space-y-28">
			<!-- Animated background elements -->
			<div class="absolute inset-0 -z-10 overflow-hidden">
				<div class="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>
				<div
					class="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl"
				></div>
			</div>

			<!-- Project Cards -->
			{#each projects as project, index}
				<div
					class="animate-slide-up"
					style="animation-delay: {getAnimationDelay(index)}; animation-fill-mode: forwards;"
				>
					<ProjectCard {project} {index} />
				</div>
			{/each}
		</div>
	</div>
</SectionWrapper>
