<script>
    import CtAs from "./CTAs.svelte";
    import Header from "./Header.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper>
    <Header />
    <div
        class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <div class="hero">
            <img
                src="assets/profile.png"
                class="rounded-full shadow-lg w-40 h-auto sm:w-52 sm:h-auto md:w-60 md:h-auto lg:w-72 lg:h-auto mx-auto"
                alt="Josemy Duarte"
            />
        </div>
        <h2
            class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"
        >
            Hello👋, I'm <span class="text-blue-500">Josemy Duarte</span>
        </h2>
        <p
            class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full"
        >
            <span class="italic">Software Engineer,</span> based in Barcelona, Spain
        </p>
        <CtAs />
    </div>
</SectionWrapper>
