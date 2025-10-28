# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with SvelteKit 2 and deployed to Cloudflare Pages. The site showcases projects and provides information about Josemy Duarte.

## Development Commands

Package manager: `yarn` (v4.5.3)

Common commands:

- `yarn dev` - Start development server
- `yarn build` - Build for production (outputs to `.svelte-kit/cloudflare`)
- `yarn preview` - Build and preview with Cloudflare Pages locally
- `yarn test:unit` - Run tests in watch mode
- `yarn test` - Run tests once (equivalent to `yarn test:unit -- --run`)
- `yarn lint` - Check formatting and linting (runs prettier check + eslint)
- `yarn format` - Auto-format code with Prettier
- `yarn check` - Type-check Svelte components with svelte-check
- `yarn check:watch` - Type-check in watch mode
- `yarn deploy` - Build and deploy to Cloudflare Pages
- `yarn cf-typegen` - Generate TypeScript types for Cloudflare Workers

## Architecture

### Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5
- **Styling**: Tailwind CSS with Typography plugin
- **Deployment**: Cloudflare Pages (via `@sveltejs/adapter-cloudflare`)
- **Testing**: Vitest
- **Linting**: ESLint 9 + Prettier

### Project Structure

**Routes** (`src/routes/`):

- `+layout.svelte` - Global layout with sticky header behavior and mobile modal menu
- `+page.svelte` - Homepage (renders Hero component)
- All pages are pre-rendered (`export const prerender = true` in layout)

**Components** (`src/components/`):

- `Hero.svelte` - Main hero section and projects showcase
- `Header.svelte` - Site header navigation
- `CTAs.svelte` - Call-to-action buttons
- `SectionWrapper.svelte` - Reusable section container

**State Management** (`src/store/`):

- Uses Svelte's built-in stores (writable)
- `openModal` - Controls mobile menu modal visibility

**Styling**:

- Global styles in `src/app.css`
- Tailwind configuration in `tailwind.config.ts` and `tailwind.config.js`
- Uses Poppins font family for text elements

### Key Features

- Responsive design with mobile-first approach
- Sticky header that appears on scroll
- Mobile modal menu for navigation
- Pre-rendered static pages for optimal performance
- Personal projects section with hover animations
- FontAwesome icons integration

### Deployment Configuration

- `wrangler.toml` configures Cloudflare Pages deployment
- Build output directory: `.svelte-kit/cloudflare`
- Compatibility date: 2024-12-16
- The site uses Cloudflare Pages adapter for edge deployment

### Testing

- Test files use `.test.ts` or `.spec.ts` extension
- Tests are located in `src/` directory alongside source files
- Vitest configuration in `vite.config.ts`
