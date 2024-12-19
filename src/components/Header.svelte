<script>
	import { openModal } from '../store';
</script>

<header class="relative z-20 flex flex-col">
	<div class="mx-auto flex w-full max-w-[1400px] items-center justify-between p-4 py-6">
		<a href="/">
			<h1 class="text-xl font-semibold md:text-2xl">
				dute.<span class="text-green-500">dev</span>
			</h1>
		</a>
		<button
			aria-label="Open Modal"
			on:click={() => ($openModal = true)}
			class="grid place-items-center md:hidden"
		>
			<i class="fa-solid fa-bars"></i>
		</button>
		<nav class="hidden items-center gap-4 md:flex lg:gap-6">
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
