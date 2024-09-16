<script>
    import "../app.css";
    import Header from "../components/Header.svelte";

    import { openModal } from "../store";

    export const prerender = true;

    let y;
    $: outerHeight = 0;
</script>

{#if $openModal}
    <div
        class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden"
    >
        <div class="flex items-center justify-between gap-4 border-b pb-2">
            <h1 class="font-semibold">
                dute.<span class="text-green-500">dev</span>
            </h1>
            <button
                on:click={() => ($openModal = false)}
                class="outline-none border-none"
            >
                <i class="fa-solid fa-xmark text-2xl"></i>
            </button>
        </div>
        <div class="flex flex-col gap-4 flex-1">
            <button>
                <a
                    href="https://drive.google.com/file/d/1fqSuTNF9Ii-ImAOyJ-lrj3jQnpFMEH1S/view?usp=sharing."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p
                        class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold"
                    >
                        Download Resume <i
                            class="fa-solid fa-chevron-right text-xl pl-4"
                        />
                    </p>
                </a>
            </button>
        </div>
    </div>
{/if}

{#if y > outerHeight}
    <div
        class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn"
    >
        <Header />
    </div>
{/if}
<slot />
<!-- <Footer /> -->
<svelte:window bind:scrollY={y} bind:outerHeight />
