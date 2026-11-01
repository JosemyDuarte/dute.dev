<script>
	import CtAs from './CTAs.svelte';
	import ContactActions from './ContactActions.svelte';
	import { EXTERNAL_LINKS } from '$lib/constants';
	import SectionWrapper from './SectionWrapper.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<SectionWrapper id="hero">
	<div class="flex flex-1 flex-col items-center justify-center gap-10 pb-10 pt-8 md:pb-14">
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
		<ContactActions />
		<CtAs />

		<a
			href="#projects"
			aria-label="Scroll down to view personal projects"
			class="mt-6 flex motion-safe:animate-bounce flex-col items-center text-gray-400 transition duration-200 hover:text-blue-400"
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
		<div class="relative mx-auto w-full max-w-6xl py-16 sm:px-4 md:py-24">
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

			<p class="mb-6 text-sm font-semibold uppercase tracking-widest text-blue-300">
				Featured projects
			</p>
			<div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
				{#each projects.filter((project) => project.featured) as project (project.id)}
					<ProjectCard {project} />
				{/each}
			</div>

			<div class="mb-6 mt-16">
				<h2 class="text-3xl font-bold text-white">More projects</h2>
				<p class="mt-3 text-slate-400">E-ink experiments and an earlier automation project.</p>
			</div>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
				{#each projects.filter((project) => !project.featured) as project (project.id)}
					<ProjectCard {project} />
				{/each}
			</div>
		</div>
	</SectionWrapper>
</div>

<section id="contact" aria-labelledby="contact-heading" class="px-6 py-24 text-center">
	<div class="mx-auto max-w-2xl">
		<p class="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-primary">
			Get in touch
		</p>
		<h2 id="contact-heading" class="text-4xl font-semibold sm:text-5xl">
			Let’s talk about your next project.
		</h2>
		<p class="mb-8 mt-6 text-lg leading-relaxed text-slate-600">
			Have a backend or cloud engineering challenge, a role to discuss, or a question about
			something I’ve built? I’d like to hear from you.
		</p>
		<ContactActions />
		<a
			href={EXTERNAL_LINKS.email}
			class="mt-6 inline-flex min-h-11 items-center text-slate-600 underline underline-offset-4 hover:text-brand-primary"
			>me@dute.dev</a
		>
	</div>
</section>
