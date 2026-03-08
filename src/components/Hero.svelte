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
				width="1292"
				height="824"
				loading="eager"
				fetchpriority="high"
				decoding="async"
				class="mx-auto h-auto w-40 rounded-full shadow-lg sm:h-auto sm:w-52 md:h-auto md:w-60 lg:h-auto lg:w-72"
				alt="Josemy Duarte"
			/>
		</div>

		<h1
			class="mx-auto w-full max-w-[1200px] text-center text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl"
		>
			Hello 👋, I'm <span class="text-brand-primary">Josemy Duarte</span>
		</h1>
		<p class="mx-auto w-full max-w-[1000px] text-center text-xl sm:text-2xl md:text-3xl">
			I assist companies in creating <span class="font-semibold italic">scalable</span> and
			<span class="font-semibold italic">reliable</span> cloud applications, ensuring service
			stability through <span class="font-semibold italic">technical excellence</span>.
		</p>
		<CtAs />

		<a
			href="#projects"
			aria-label="Scroll down to view personal projects"
			class="mt-16 flex animate-bounce flex-col items-center text-gray-400 transition duration-200 hover:text-blue-400"
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

<div class="bg-[#0d1117]">
	<SectionWrapper id="projects">
		<div class="relative mx-auto w-full max-w-6xl px-4 py-24">
			<!-- Dots background pattern -->
			<div
				class="absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]"
			></div>

			<!-- Section Header -->
			<div class="mb-16 text-center">
				<h2
					class="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl"
				>
					Personal Projects
				</h2>
				<p class="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-400 md:text-xl">
					Building tools that solve real problems and make life easier through code and creativity.
				</p>
			</div>

			<!-- Bento Grid -->
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each projects as project, index}
					<div
						class="animate-slide-up
							{index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
							{index === 4 ? 'lg:col-span-2' : ''}"
						style="animation-delay: {getAnimationDelay(index)}; animation-fill-mode: forwards;"
					>
						<ProjectCard {project} {index} />
					</div>
				{/each}
			</div>
		</div>
	</SectionWrapper>
</div>
