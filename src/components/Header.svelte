<script>
    import { openModal } from "../store";
</script>

<header class="flex flex-col relative z-20">
    <div
        class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6"
    >
        <a href="/">
            <h1 class="font-semibold text-xl md:text-2xl">
                dute.<span class="text-green-500">dev</span>
            </h1>
        </a>
        <button
            on:click={() => ($openModal = true)}
            class="md:hidden grid place-items-center"
        >
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
            <button class="specialBtn">
                <a
                    href="https://drive.google.com/file/d/1fqSuTNF9Ii-ImAOyJ-lrj3jQnpFMEH1S/view?usp=sharing."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>Download Resume</p>
                </a>
            </button>
        </nav>
    </div>
</header>
