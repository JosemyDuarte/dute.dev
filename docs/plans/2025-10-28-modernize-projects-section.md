# Modernize Personal Projects Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the Personal Projects section into a modern, visually appealing showcase with structured data, reusable components, technology badges, and enhanced animations.

**Architecture:** Extract project data into a structured format, create a dedicated ProjectCard component for DRY principles, add technology tags, implement modern glassmorphism design with improved animations, and enhance responsive behavior.

**Tech Stack:** SvelteKit 2, Svelte 5, Tailwind CSS, TypeScript

---

## Task 1: Create Projects Data Structure

**Files:**

- Create: `src/lib/data/projects.ts`

**Step 1: Create projects data file**

```typescript
export interface Project {
	id: string;
	title: string;
	description: string;
	url: string;
	emoji: string;
	technologies: string[];
	featured?: boolean;
}

export const projects: Project[] = [
	{
		id: 'devsquotesprinter',
		title: 'DevsQuotesPrinter',
		description:
			'A GoLang service that builds an image with the provided text printed on it. Used for automating sharing quotes on social media.',
		url: 'https://github.com/JosemyDuarte/DevsQuotesPrinter',
		emoji: '🖨️',
		technologies: ['Go', 'Image Processing', 'Automation'],
		featured: true
	},
	{
		id: 'feed2pocket',
		title: 'feed2pocket',
		description:
			'Feeds2Pocket fetches and store RSS links into Pocket. I wanted a simple way to read my RSS feeds on my Kobo e-reader. It runs as a cron job in Cloudflare Workers.',
		url: 'https://github.com/JosemyDuarte/feed2pocket',
		emoji: '📚',
		technologies: ['Cloudflare Workers', 'RSS', 'TypeScript'],
		featured: true
	},
	{
		id: 'fire-calculator',
		title: 'FIRE Calculator',
		description:
			'FIRE (Financial Independence, Retire Early) quickly calculates how much you need to save to comfortably retire and live off your investments.',
		url: 'https://calculadorafire.netlify.app/',
		emoji: '💰',
		technologies: ['Svelte', 'Finance', 'Calculator'],
		featured: true
	}
];
```

**Step 2: Verify the file compiles**

Run: `yarn check`
Expected: No TypeScript errors

**Step 3: Commit**

```bash
git add src/lib/data/projects.ts
git commit -m "feat: add structured projects data with TypeScript types"
```

---

## Task 2: Create ProjectCard Component

**Files:**

- Create: `src/components/ProjectCard.svelte`

**Step 1: Create the ProjectCard component**

```svelte
<script lang="ts">
	import type { Project } from '$lib/data/projects';

	interface Props {
		project: Project;
		index: number;
	}

	let { project, index }: Props = $props();

	// Determine if emoji should be on left or right based on index
	const emojiOnLeft = index % 2 === 0;
</script>

<div
	class="group relative flex {emojiOnLeft
		? 'flex-col md:flex-row'
		: 'flex-col-reverse md:flex-row'} items-center gap-8 md:gap-12"
>
	<!-- Emoji Icon -->
	{#if emojiOnLeft}
		<div
			class="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-5xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl md:h-32 md:w-32 md:text-6xl"
		>
			{project.emoji}
		</div>
	{/if}

	<!-- Project Card -->
	<a
		href={project.url}
		target="_blank"
		rel="noopener noreferrer"
		class="relative w-full overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/50 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl md:w-2/3"
	>
		<!-- Animated gradient overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		></div>

		<!-- Accent line -->
		<div
			class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-2"
		></div>

		<div class="relative">
			<!-- Title -->
			<h4
				class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
			>
				{project.title}
			</h4>

			<!-- Description -->
			<p class="mt-4 leading-relaxed text-gray-700">
				{project.description}
			</p>

			<!-- Technology Tags -->
			<div class="mt-6 flex flex-wrap gap-2">
				{#each project.technologies as tech}
					<span
						class="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200/50 transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-400"
					>
						{tech}
					</span>
				{/each}
			</div>

			<!-- Call to Action -->
			<div
				class="mt-6 flex items-center font-semibold text-blue-600 transition-colors duration-300 group-hover:text-indigo-600"
			>
				<span>Explore Project</span>
				<svg
					class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</div>
		</div>
	</a>

	<!-- Emoji Icon (right side) -->
	{#if !emojiOnLeft}
		<div
			class="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-5xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl md:h-32 md:w-32 md:text-6xl"
		>
			{project.emoji}
		</div>
	{/if}
</div>
```

**Step 2: Verify the component compiles**

Run: `yarn check`
Expected: No TypeScript or Svelte errors

**Step 3: Commit**

```bash
git add src/components/ProjectCard.svelte
git commit -m "feat: create modern ProjectCard component with animations and tech tags"
```

---

## Task 3: Update Hero Component to Use New Structure

**Files:**

- Modify: `src/components/Hero.svelte:49-188`

**Step 1: Update Hero.svelte imports and projects section**

Replace the entire projects section (lines 49-188) with:

```svelte
<script>
	import CtAs from './CTAs.svelte';
	import Header from './Header.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<!-- Keep existing hero section (lines 7-47) unchanged -->

<SectionWrapper id="projects">
	<div class="mx-auto w-full max-w-6xl px-4 py-16">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<div class="relative inline-block">
				<h3
					class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
				>
					Personal Projects
				</h3>
				<span class="absolute -right-12 -top-2 animate-bounce text-4xl">🚀</span>
			</div>
			<p class="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
				Building tools that solve real problems and make life easier
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="relative space-y-20 md:space-y-28">
			<!-- Animated background elements -->
			<div class="absolute inset-0 -z-10 overflow-hidden">
				<div class="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>
				<div
					class="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-100/30 blur-3xl"
				></div>
			</div>

			<!-- Project Cards -->
			{#each projects as project, index}
				<ProjectCard {project} {index} />
			{/each}
		</div>
	</div>
</SectionWrapper>
```

**Step 2: Verify the changes compile**

Run: `yarn check`
Expected: No errors

**Step 3: Run dev server to visually verify**

Run: `yarn dev`
Expected: Dev server starts, navigate to localhost to see modernized projects section

**Step 4: Commit**

```bash
git add src/components/Hero.svelte
git commit -m "feat: integrate ProjectCard component and structured data in Hero"
```

---

## Task 4: Add Custom Tailwind Animations

**Files:**

- Modify: `tailwind.config.ts`

**Step 1: Extend Tailwind config with custom animations**

```typescript
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'scale-in': 'scaleIn 0.3s ease-out'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				scaleIn: {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			}
		}
	},

	plugins: [typography]
} satisfies Config;
```

**Step 2: Verify Tailwind config compiles**

Run: `yarn build`
Expected: Build succeeds without errors

**Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: add custom animations to Tailwind config"
```

---

## Task 5: Add Stagger Animation to Project Cards

**Files:**

- Modify: `src/components/Hero.svelte` (projects section)

**Step 1: Add animation delay to ProjectCard wrapper**

Update the projects iteration in Hero.svelte:

```svelte
<!-- Project Cards -->
{#each projects as project, index}
	<div
		class="animate-slide-up opacity-0"
		style="animation-delay: {index * 150}ms; animation-fill-mode: forwards;"
	>
		<ProjectCard {project} {index} />
	</div>
{/each}
```

**Step 2: Test animations in browser**

Run: `yarn dev`
Expected: Cards animate in with staggered timing

**Step 3: Commit**

```bash
git add src/components/Hero.svelte
git commit -m "feat: add staggered entrance animations to project cards"
```

---

## Task 6: Enhance Mobile Responsiveness

**Files:**

- Modify: `src/components/ProjectCard.svelte`

**Step 1: Improve mobile layout in ProjectCard**

Update the ProjectCard component to improve mobile experience:

```svelte
<div
	class="group relative flex {emojiOnLeft
		? 'flex-col md:flex-row'
		: 'flex-col-reverse md:flex-row'} items-center gap-6 md:gap-12"
>
	<!-- Emoji Icon -->
	{#if emojiOnLeft}
		<div
			class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-4xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl sm:h-24 sm:w-24 sm:text-5xl md:h-32 md:w-32 md:text-6xl"
		>
			{project.emoji}
		</div>
	{/if}

	<!-- Project Card -->
	<a
		href={project.url}
		target="_blank"
		rel="noopener noreferrer"
		class="relative w-full overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl sm:p-8 md:w-2/3"
	>
		<!-- ... rest of card content remains the same ... -->
	</a>

	<!-- Emoji Icon (right side) -->
	{#if !emojiOnLeft}
		<div
			class="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-4xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl sm:h-24 sm:w-24 sm:text-5xl md:h-32 md:w-32 md:text-6xl"
		>
			{project.emoji}
		</div>
	{/if}
</div>
```

**Step 2: Test on mobile viewport**

Run: `yarn dev` and test in browser with responsive design mode
Expected: Cards look good on mobile, tablet, and desktop

**Step 3: Commit**

```bash
git add src/components/ProjectCard.svelte
git commit -m "feat: improve mobile responsiveness for project cards"
```

---

## Task 7: Run Final Build and Format

**Files:**

- All modified files

**Step 1: Format all code**

Run: `yarn format`
Expected: All files formatted with Prettier

**Step 2: Run linter**

Run: `yarn lint`
Expected: No linting errors

**Step 3: Run type check**

Run: `yarn check`
Expected: No TypeScript errors

**Step 4: Build for production**

Run: `yarn build`
Expected: Production build succeeds

**Step 5: Preview build locally**

Run: `yarn preview`
Expected: Preview server starts and site displays correctly

**Step 6: Final commit**

```bash
git add .
git commit -m "chore: format code and verify build"
```

---

## Summary

This plan modernizes the Personal Projects section by:

1. **Structured Data**: Projects are now defined in a typed TypeScript file for easy maintenance
2. **Reusable Component**: ProjectCard component follows DRY principles
3. **Modern Design**: Glassmorphism, gradients, better shadows, and improved spacing
4. **Technology Tags**: Each project displays relevant technologies
5. **Enhanced Animations**: Smooth transitions, hover effects, and staggered entrance animations
6. **Better UX**: Improved mobile responsiveness and visual hierarchy
7. **Maintainability**: Easy to add/edit projects by updating the data file

All changes maintain the existing SvelteKit 2 + Svelte 5 architecture and use Tailwind CSS for styling.
