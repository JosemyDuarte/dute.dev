# Testing Strategy

## Overview

This project uses a lightweight, efficient testing approach focused on unit testing pure logic without browser automation.

## Test Coverage

### What We Test

1. **Store Logic** (`src/store/index.test.js`)
   - openModal state management
   - Store subscriptions and updates

2. **Data Validation** (`src/lib/data/projects.test.ts`)
   - Project data integrity
   - Type conformance
   - URL validity
   - Required fields

3. **Component Logic** (`src/components/ProjectCard.test.ts`)
   - Emoji positioning calculation
   - Pure function logic

### What We Don't Test

- DOM rendering (handled by Svelte compiler)
- Visual appearance (manual QA)
- Browser compatibility (verified through manual testing)
- User interactions (lightweight portfolio site doesn't need E2E)

## Running Tests

```bash
# Run all tests once
yarn test

# Run tests in watch mode
yarn test:unit

# Run specific test file
yarn test src/store/index.test.js
```

## Test Philosophy

- **DRY:** Don't Repeat Yourself - test logic, not framework features
- **YAGNI:** You Aren't Gonna Need It - no over-engineering
- **TDD:** Test-Driven Development - tests verify behavior
- **Lightweight:** Fast, simple tests that provide confidence without burden

## Coverage Goal

We aim for **100% coverage of business logic**, not 100% code coverage. Since this is a presentational portfolio site with minimal logic, our 19 tests provide excellent confidence.
