<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<a href="#main-content" class="skip-to-content">Skip to content</a>
<Header />
<main id="main-content" tabindex="-1">
	<slot />
</main>
