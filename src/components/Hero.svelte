<script>
	import CtAs from './CTAs.svelte';
	import Header from './Header.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
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
	<div class="mx-auto w-full max-w-4xl px-4 py-8">
		<div class="mb-12 text-center">
			<h3
				class="relative inline-block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				Personal Projects
				<span class="absolute -right-8 -top-1 text-2xl">🚀</span>
			</h3>
			<p class="mt-3 text-lg text-gray-600">
				Here are some of my recent side projects that showcase my passion for building useful tools
			</p>
		</div>

		<div class="relative space-y-24">
			<!-- Background decoration -->
			<div class="absolute inset-0 -z-10 overflow-hidden">
				<div
					class="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-50 opacity-40 blur-3xl"
				></div>
			</div>

			<!-- Project 1: Emoji on the left -->
			<div class="relative flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
				<div class="text-8xl md:w-1/3">🖨️</div>
				<a
					href="https://github.com/JosemyDuarte/DevsQuotesPrinter"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative w-full overflow-hidden rounded-xl border border-gray-100 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:w-2/3"
				>
					<div
						class="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
					<div class="relative">
						<h4 class="text-2xl font-semibold text-blue-600">DevsQuotesPrinter</h4>
						<p class="mt-3 leading-relaxed text-gray-700">
							A GoLang service that builds an image with the provided text printed on it. Used for
							automating sharing quotes on social media.
						</p>
						<div class="mt-4 flex items-center font-medium text-blue-500">
							Learn more
							<svg
								class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
					</div>
				</a>
			</div>

			<!-- Project 2: Emoji on the right -->
			<div
				class="relative flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:gap-12"
			>
				<a
					href="https://github.com/JosemyDuarte/feed2pocket"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative w-full overflow-hidden rounded-xl border border-gray-100 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:w-2/3"
				>
					<div
						class="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
					<div class="relative">
						<h4 class="text-2xl font-semibold text-blue-600">feed2pocket</h4>
						<p class="mt-3 leading-relaxed text-gray-700">
							Feeds2Pocket fetches and store RSS links into Pocket. I wanted a simple way to read my
							RSS feeds on my Kobo e-reader. It runs as a cron job in Cloudflare Workers.
						</p>
						<div class="mt-4 flex items-center font-medium text-blue-500">
							Learn more
							<svg
								class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
					</div>
				</a>
				<div class="text-8xl md:w-1/3">📚</div>
			</div>

			<!-- Project 3: Emoji on the left -->
			<div class="relative flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
				<div class="text-8xl md:w-1/3">💰</div>
				<a
					href="https://calculadorafire.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative w-full overflow-hidden rounded-xl border border-gray-100 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:w-2/3"
				>
					<div
						class="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
					<div class="relative">
						<h4 class="text-2xl font-semibold text-blue-600">FIRE Calculator</h4>
						<p class="mt-3 leading-relaxed text-gray-700">
							FIRE (Financial Independence, Retire Early) quickly calculates how much you need to
							save to comfortably retire and live off your investments.
						</p>
						<div class="mt-4 flex items-center font-medium text-blue-500">
							Learn more
							<svg
								class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</SectionWrapper>
