<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { colors, typography, spacing, animation } from '$lib/brand';

	const colorSwatches = [
		{
			name: '--color-primary',
			hex: colors.primary,
			twClass: 'bg-brand-primary',
			label: 'Primary',
			usage: 'CTAs, focus rings, interactive borders'
		},
		{
			name: '--color-primary-dark',
			hex: colors.primaryDark,
			twClass: 'bg-brand-primary-dark',
			label: 'Primary Dark',
			usage: 'Hover states for primary elements'
		},
		{
			name: '--color-accent',
			hex: colors.accent,
			twClass: 'bg-brand-accent',
			label: 'Accent',
			usage: '".dev" wordmark, success states'
		},
		{
			name: '--color-surface-dark',
			hex: colors.surfaceDark,
			twClass: 'bg-surface-dark',
			label: 'Surface Dark',
			usage: 'Projects section, brand page background'
		},
		{
			name: '--color-surface-light',
			hex: colors.surfaceLight,
			twClass: 'bg-surface-light',
			label: 'Surface Light',
			usage: 'Hero section, card backgrounds'
		},
		{
			name: '--color-text-base',
			hex: colors.textBase,
			twClass: 'text-slate-800',
			label: 'Text Base',
			usage: 'Body text on light backgrounds'
		},
		{
			name: '--color-text-muted',
			hex: colors.textMuted,
			twClass: 'text-slate-500',
			label: 'Text Muted',
			usage: 'Secondary text, captions, metadata'
		},
		{
			name: 'border-dark',
			hex: colors.borderDark,
			twClass: 'border-white/8',
			label: 'Border Dark',
			usage: 'Card borders on dark backgrounds'
		}
	];

	const typeScale = [
		{ scale: 'Display', size: '6rem / 96px', usage: 'Section hero headings', tw: 'text-8xl' },
		{ scale: 'H1', size: '3rem / 48px', usage: 'Page titles', tw: 'text-5xl' },
		{ scale: 'H2', size: '1.875rem / 30px', usage: 'Featured card titles', tw: 'text-3xl' },
		{ scale: 'H3', size: '1.5rem / 24px', usage: 'Card headings', tw: 'text-2xl' },
		{ scale: 'Body', size: '1rem / 16px', usage: 'General prose', tw: 'text-base' },
		{ scale: 'Small', size: '0.875rem / 14px', usage: 'Labels, metadata', tw: 'text-sm' },
		{ scale: 'Caption', size: '0.75rem / 12px', usage: 'Category tags, captions', tw: 'text-xs' }
	];

	const poppinsWeights = [
		{ weight: '400', label: 'Regular', class: 'font-normal' },
		{ weight: '600', label: 'Semibold', class: 'font-semibold' },
		{ weight: '700', label: 'Bold', class: 'font-bold' },
		{ weight: '900', label: 'Black', class: 'font-black' }
	];

	const voiceDos = [
		'"scalable and reliable"',
		'"ensuring service stability"',
		'"Building tools that solve real problems"',
		'Self-deprecating humor about the work',
		'Concrete tech names (Go, Cloudflare Workers)',
		'One emoji per card/item as a visual anchor'
	];

	const voiceDonts = [
		'"world-class solutions"',
		'"passionate about technology"',
		'"I love coding"',
		'Hyperbole about skills',
		'"cutting-edge", "innovative", "synergy"',
		'Emoji clusters for decoration'
	];

	const motionExamples = [
		{
			id: 'fade',
			animClass: 'animate-fade-in',
			label: 'fade-in',
			details: '300ms · ease-in · forwards',
			usage: 'Sticky header entrance on scroll'
		},
		{
			id: 'slide',
			animClass: 'animate-slide-up',
			label: 'slide-up',
			details: '500ms · ease-out',
			usage: 'Project card entrance on page load'
		},
		{
			id: 'scale',
			animClass: 'animate-scale-in',
			label: 'scale-in',
			details: '300ms · ease-out',
			usage: 'Modal / overlay entrance'
		}
	];

	let activeMotion: string[] = $state([]);

	function triggerMotion(id: string) {
		if (!browser) return;
		activeMotion = activeMotion.filter((x) => x !== id);
		// Allow DOM to reset before re-applying the class
		setTimeout(() => {
			activeMotion = [...activeMotion, id];
		}, 20);
	}

	onMount(() => {
		// Auto-trigger on first load
		setTimeout(() => triggerMotion('fade'), 100);
		setTimeout(() => triggerMotion('slide'), 300);
		setTimeout(() => triggerMotion('scale'), 500);
	});

	function contrastColor(hex: string): string {
		if (hex.startsWith('rgba') || hex.startsWith('rgb')) return '#ffffff';
		const raw = hex.replace('#', '');
		const r = parseInt(raw.substring(0, 2), 16);
		const g = parseInt(raw.substring(2, 4), 16);
		const b = parseInt(raw.substring(4, 6), 16);
		const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
		return luminance > 0.5 ? '#1e293b' : '#ffffff';
	}
</script>

<svelte:head>
	<title>Brand Kit — dute.dev</title>
	<meta name="description" content="Design system and brand guidelines for dute.dev" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="min-h-screen bg-[#0d1117] text-white">
	<!-- Dot pattern background -->
	<div
		class="pointer-events-none fixed inset-0 opacity-[0.03]"
		style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 24px 24px;"
	></div>

	<div class="relative mx-auto max-w-5xl px-6 py-20">
		<!-- ─── HEADER ─── -->
		<section class="mb-24">
			<div class="mb-4 font-mono text-sm tracking-widest text-slate-500">dute.dev / v1.0</div>
			<h1 class="poppins mb-6 text-7xl font-black leading-none tracking-tight">
				Brand<br /><span class="text-[#0834c4]">Kit</span>
			</h1>
			<p class="max-w-xl text-base leading-relaxed text-slate-400">
				The visual and verbal identity for <span class="text-white">dute.dev</span>. This is an
				internal design reference — not a marketing page. Use it to keep things consistent across
				the site and any external materials.
			</p>
			<div class="mt-8 flex gap-3">
				<a href="/" class="specialBtn button text-sm text-white">← Back to site</a>
				<a
					href="/brand#voice"
					class="button text-sm text-slate-300 transition-colors hover:text-white"
				>
					Skip to Voice & Tone
				</a>
			</div>
		</section>

		<!-- ─── WORDMARK ─── -->
		<section class="mb-24" id="wordmark">
			<div class="mb-8 border-b border-white/10 pb-4">
				<h2 class="poppins text-xs font-semibold uppercase tracking-widest text-slate-500">
					01 · Wordmark
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<!-- Dark context -->
				<div class="rounded-2xl border border-white/8 bg-white/[0.03] p-8">
					<p class="mb-6 text-xs text-slate-500">On dark background</p>
					<div class="mb-4 flex flex-col gap-4">
						<span class="poppins text-4xl font-bold"
							>dute.<span class="text-green-500">dev</span></span
						>
						<span class="poppins text-2xl font-bold"
							>dute.<span class="text-green-500">dev</span></span
						>
						<span class="poppins text-lg font-bold"
							>dute.<span class="text-green-500">dev</span></span
						>
					</div>
					<p class="mt-6 text-xs text-slate-600">Poppins Bold · green-500 accent on ".dev"</p>
				</div>

				<!-- Light context -->
				<div class="rounded-2xl border border-slate-200 bg-white p-8">
					<p class="mb-6 text-xs text-slate-400">On light background</p>
					<div class="mb-4 flex flex-col gap-4">
						<span class="poppins text-4xl font-bold text-slate-900"
							>dute.<span class="text-green-500">dev</span></span
						>
						<span class="poppins text-2xl font-bold text-slate-900"
							>dute.<span class="text-green-500">dev</span></span
						>
						<span class="poppins text-lg font-bold text-slate-900"
							>dute.<span class="text-green-500">dev</span></span
						>
					</div>
					<p class="mt-6 text-xs text-slate-400">Poppins Bold · green-500 accent on ".dev"</p>
				</div>
			</div>

			<div class="mt-4 rounded-xl border border-red-900/30 bg-red-950/20 p-4">
				<p class="text-xs text-red-400">
					<strong>Don't:</strong> Remove the green from ".dev", change the font, or use the wordmark
					in all-caps.
				</p>
			</div>
		</section>

		<!-- ─── COLOR PALETTE ─── -->
		<section class="mb-24" id="colors">
			<div class="mb-8 border-b border-white/10 pb-4">
				<h2 class="poppins text-xs font-semibold uppercase tracking-widest text-slate-500">
					02 · Color Palette
				</h2>
			</div>

			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
				{#each colorSwatches as swatch}
					<div class="overflow-hidden rounded-xl border border-white/8">
						<!-- Swatch rectangle -->
						<div
							class="h-20 w-full"
							style="background-color: {swatch.hex};"
						></div>
						<!-- Swatch info -->
						<div class="bg-white/[0.03] p-3">
							<p class="mb-0.5 text-xs font-semibold text-white">{swatch.label}</p>
							<p class="font-mono text-[10px] text-slate-500">{swatch.hex}</p>
							<p class="mt-1 font-mono text-[10px] text-slate-600">{swatch.name}</p>
							<p class="mt-2 text-[10px] leading-tight text-slate-500">{swatch.usage}</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- ─── TYPOGRAPHY ─── -->
		<section class="mb-24" id="typography">
			<div class="mb-8 border-b border-white/10 pb-4">
				<h2 class="poppins text-xs font-semibold uppercase tracking-widest text-slate-500">
					03 · Typography
				</h2>
			</div>

			<div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
				<!-- Poppins -->
				<div class="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
					<p class="mb-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
						Poppins · Headings
					</p>
					<div class="flex flex-col gap-3">
						{#each poppinsWeights as w}
							<div class="flex items-baseline justify-between gap-2">
								<span class="poppins text-xl text-white" style="font-weight: {w.weight};"
									>Aa Bb Cc</span
								>
								<span class="text-xs text-slate-600">{w.label} / {w.weight}</span>
							</div>
						{/each}
					</div>
					<p class="mt-6 poppins text-4xl font-black leading-tight text-white">
						dute.dev<br />builds things<br />that scale.
					</p>
				</div>

				<!-- Open Sans -->
				<div class="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
					<p class="mb-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
						Open Sans · Body
					</p>
					<div class="flex flex-col gap-3">
						<div class="flex items-baseline justify-between">
							<span class="text-xl text-white font-normal">Aa Bb Cc</span>
							<span class="text-xs text-slate-600">Regular / 400</span>
						</div>
						<div class="flex items-baseline justify-between">
							<span class="text-xl text-white font-semibold">Aa Bb Cc</span>
							<span class="text-xs text-slate-600">Semibold / 600</span>
						</div>
						<div class="flex items-baseline justify-between">
							<span class="text-xl text-white font-bold">Aa Bb Cc</span>
							<span class="text-xs text-slate-600">Bold / 700</span>
						</div>
						<div class="flex items-baseline justify-between">
							<span class="text-xl text-white italic font-normal">Aa Bb Cc</span>
							<span class="text-xs text-slate-600">Italic / 400</span>
						</div>
					</div>
					<p class="mt-6 text-sm leading-relaxed text-slate-300">
						I assist companies in creating scalable and reliable cloud applications, ensuring service
						stability through technical excellence.
					</p>
				</div>
			</div>

			<!-- Type scale table -->
			<div class="overflow-hidden rounded-2xl border border-white/8">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b border-white/8 bg-white/[0.03]">
							<th class="px-4 py-3 text-left text-xs font-semibold text-slate-500">Scale</th>
							<th class="px-4 py-3 text-left text-xs font-semibold text-slate-500">Size</th>
							<th class="px-4 py-3 text-left text-xs font-semibold text-slate-500">Usage</th>
							<th class="px-4 py-3 text-left text-xs font-semibold text-slate-500">Tailwind</th>
						</tr>
					</thead>
					<tbody>
						{#each typeScale as row, i}
							<tr class="border-b border-white/5 {i % 2 === 0 ? '' : 'bg-white/[0.02]'}">
								<td class="px-4 py-3 font-medium text-white">{row.scale}</td>
								<td class="px-4 py-3 font-mono text-xs text-slate-400">{row.size}</td>
								<td class="px-4 py-3 text-slate-400">{row.usage}</td>
								<td class="px-4 py-3 font-mono text-xs text-[#22c55e]">{row.tw}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<!-- ─── COMPONENTS ─── -->
		<section class="mb-24" id="components">
			<div class="mb-8 border-b border-white/10 pb-4">
				<h2 class="poppins text-xs font-semibold uppercase tracking-widest text-slate-500">
					04 · Components
				</h2>
			</div>

			<!-- Buttons on dark -->
			<div class="mb-6 rounded-2xl border border-white/8 bg-white/[0.03] p-6">
				<p class="mb-6 font-mono text-[10px] uppercase tracking-widest text-slate-500">
					Buttons · Dark context
				</p>
				<div class="flex flex-wrap gap-3">
					<button class="text-white">Default</button>
					<button class="specialBtn text-white">Special</button>
					<button class="specialBtnDark">Primary CTA</button>
					<button disabled class="cursor-not-allowed opacity-40 text-white">Disabled</button>
				</div>
				<p class="mt-4 text-xs text-slate-600">
					Default: white bg, primary border on hover · specialBtn: 2px primary border · specialBtnDark: filled primary bg
				</p>
			</div>

			<!-- Buttons on light -->
			<div class="mb-6 rounded-2xl border border-slate-200 bg-white p-6">
				<p class="mb-6 font-mono text-[10px] uppercase tracking-widest text-slate-400">
					Buttons · Light context
				</p>
				<div class="flex flex-wrap gap-3">
					<button class="text-slate-800">Default</button>
					<button class="specialBtn text-slate-800">Special</button>
					<button class="specialBtnDark">Primary CTA</button>
				</div>
			</div>

			<!-- Badges -->
			<div class="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
				<p class="mb-6 font-mono text-[10px] uppercase tracking-widest text-slate-500">
					Badges & Pills
				</p>
				<div class="flex flex-wrap gap-3">
					<span
						class="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
					>
						Category
					</span>
					<span
						class="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
					>
						Cloudflare Workers
					</span>
					<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
					>
						TypeScript
					</span>
					<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
					>
						Go
					</span>
					<span class="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400"
					>
						Active
					</span>
				</div>
				<p class="mt-4 text-xs text-slate-600">
					Blue variant: project categories · Neutral: tech tags · Green: status indicators
				</p>
			</div>
		</section>

		<!-- ─── VOICE & TONE ─── -->
		<section class="mb-24" id="voice">
			<div class="mb-8 border-b border-white/10 pb-4">
				<h2 class="poppins text-xs font-semibold uppercase tracking-widest text-slate-500">
					05 · Voice & Tone
				</h2>
			</div>

			<p class="mb-8 max-w-2xl text-sm leading-relaxed text-slate-400">
				The dute.dev voice is <strong class="text-white">professional but never stuffy</strong>.
				Confident without bragging. Direct and concrete — short taglines grounded by a single explanatory
				sentence. Self-deprecating humor shows up occasionally, always punching at the work, never the person.
			</p>

			<!-- We say / don't say -->
			<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="rounded-2xl border border-green-900/40 bg-green-950/20 p-6">
					<p class="mb-4 text-xs font-semibold uppercase tracking-widest text-green-500">✓ We say</p>
					<ul class="flex flex-col gap-2">
						{#each voiceDos as item}
							<li class="text-sm text-slate-300">{item}</li>
						{/each}
					</ul>
				</div>
				<div class="rounded-2xl border border-red-900/40 bg-red-950/20 p-6">
					<p class="mb-4 text-xs font-semibold uppercase tracking-widest text-red-400">✗ We don't say</p>
					<ul class="flex flex-col gap-2">
						{#each voiceDonts as item}
							<li class="text-sm text-slate-400">{item}</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Canonical examples -->
			<div class="space-y-4">
				<p class="text-xs font-semibold uppercase tracking-widest text-slate-500">
					Canonical examples
				</p>

				<div class="rounded-xl border border-white/8 bg-white/[0.03] p-5">
					<p class="mb-1 text-[10px] uppercase tracking-widest text-slate-600">
						Hero opener · direct + warm
					</p>
					<blockquote class="text-sm italic text-slate-200">
						"Hello 👋, I'm Josemy Duarte. I assist companies in creating scalable and reliable cloud
						applications, ensuring service stability through technical excellence."
					</blockquote>
				</div>

				<div class="rounded-xl border border-white/8 bg-white/[0.03] p-5">
					<p class="mb-1 text-[10px] uppercase tracking-widest text-slate-600">
						Project tagline · understated humor
					</p>
					<blockquote class="text-sm italic text-slate-200">
						"Find out exactly how many days of your life you've donated to the screen. Because someone
						had to put a number on your TV addiction."
					</blockquote>
					<p class="mt-2 text-[10px] text-slate-600">
						TraktWastedTime — humor about the use case, not about the engineer
					</p>
				</div>

				<div class="rounded-xl border border-white/8 bg-white/[0.03] p-5">
					<p class="mb-1 text-[10px] uppercase tracking-widest text-slate-600">
						Section subheadline · maker mindset
					</p>
					<blockquote class="text-sm italic text-slate-200">
						"Building tools that solve real problems and make life easier through code and creativity."
					</blockquote>
				</div>
			</div>
		</section>

		<!-- ─── MOTION ─── -->
		<section class="mb-24" id="motion">
			<div class="mb-8 border-b border-white/10 pb-4">
				<h2 class="poppins text-xs font-semibold uppercase tracking-widest text-slate-500">
					06 · Motion
				</h2>
			</div>

			<p class="mb-8 text-sm text-slate-400">
				Three animation primitives — click each to replay.
			</p>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{#each motionExamples as ex}
					<button
						class="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-left transition-colors hover:border-white/20"
						onclick={() => triggerMotion(ex.id)}
					>
						<!-- Preview box -->
						<div class="mb-4 flex h-16 items-center justify-center">
							<div
								class="h-10 w-10 rounded-xl bg-[#0834c4] {activeMotion.includes(ex.id)
									? ex.animClass
									: 'opacity-0'}"
							></div>
						</div>

						<p class="mb-1 font-mono text-sm font-semibold text-white">.animate-{ex.label}</p>
						<p class="mb-3 font-mono text-[10px] text-slate-500">{ex.details}</p>
						<p class="text-xs text-slate-400">{ex.usage}</p>
						<p class="mt-3 text-[10px] text-slate-600 group-hover:text-slate-400 transition-colors">
							Click to replay →
						</p>
					</button>
				{/each}
			</div>

			<div class="mt-6 rounded-xl border border-white/8 bg-white/[0.03] p-4">
				<p class="text-xs text-slate-500">
					<strong class="text-slate-400">Rule:</strong> One orchestrated entrance per page load creates
					more delight than scattered micro-interactions. Use stagger delays of
					<code class="text-[#22c55e]">{animation.staggerDelayMs}ms</code> between sequential elements.
					All animations respect <code class="text-[#22c55e]">prefers-reduced-motion</code> via Tailwind's
					motion-safe utilities.
				</p>
			</div>
		</section>

		<!-- ─── FOOTER ─── -->
		<footer class="border-t border-white/10 pt-8 text-center">
			<p class="font-mono text-xs text-slate-600">
				dute.dev brand kit · <a href="/brand#colors" class="hover:text-slate-400 transition-colors">Colors</a>
				· <a href="/brand#typography" class="hover:text-slate-400 transition-colors">Type</a>
				· <a href="/brand#components" class="hover:text-slate-400 transition-colors">Components</a>
				· <a href="/brand#voice" class="hover:text-slate-400 transition-colors">Voice</a>
				· <a href="/brand#motion" class="hover:text-slate-400 transition-colors">Motion</a>
			</p>
			<p class="mt-2 font-mono text-[10px] text-slate-700">
				Tokens: <a href="https://github.com/JosemyDuarte/dute.dev" class="hover:text-slate-500 transition-colors">src/lib/brand.ts</a>
				· Positioning: .agents/product-marketing-context.md
			</p>
		</footer>
	</div>
</main>
