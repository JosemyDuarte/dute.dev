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
	</div>
</SectionWrapper>
