import { describe, it, expect } from 'vitest';
import { projects, type Project } from './projects';

describe('projects data', () => {
	it('should have exactly 3 projects', () => {
		expect(projects).toHaveLength(3);
	});

	it('should have all required fields for each project', () => {
		projects.forEach((project) => {
			expect(project).toHaveProperty('id');
			expect(project).toHaveProperty('title');
			expect(project).toHaveProperty('description');
			expect(project).toHaveProperty('url');
			expect(project).toHaveProperty('emoji');
			expect(project).toHaveProperty('technologies');
		});
	});

	it('should have unique ids for all projects', () => {
		const ids = projects.map(p => p.id);
		const uniqueIds = new Set(ids);
		expect(uniqueIds.size).toBe(projects.length);
	});

	it('should have valid URLs for all projects', () => {
		projects.forEach((project) => {
			expect(project.url).toMatch(/^https?:\/\/.+/);
		});
	});

	it('should have non-empty strings for title and description', () => {
		projects.forEach((project) => {
			expect(project.title.length).toBeGreaterThan(0);
			expect(project.description.length).toBeGreaterThan(0);
		});
	});

	it('should have at least one technology for each project', () => {
		projects.forEach((project) => {
			expect(Array.isArray(project.technologies)).toBe(true);
			expect(project.technologies.length).toBeGreaterThan(0);
		});
	});

	it('should have emoji for each project', () => {
		projects.forEach((project) => {
			expect(project.emoji.length).toBeGreaterThan(0);
		});
	});

	it('should have all projects marked as featured', () => {
		projects.forEach((project) => {
			expect(project.featured).toBe(true);
		});
	});
});

describe('Project type validation', () => {
	it('should conform to Project interface structure', () => {
		const mockProject: Project = {
			id: 'test-id',
			title: 'Test Project',
			description: 'Test description',
			url: 'https://example.com',
			emoji: '🚀',
			technologies: ['TypeScript'],
			featured: true
		};

		expect(mockProject).toHaveProperty('id');
		expect(mockProject).toHaveProperty('title');
		expect(mockProject).toHaveProperty('description');
		expect(mockProject).toHaveProperty('url');
		expect(mockProject).toHaveProperty('emoji');
		expect(mockProject).toHaveProperty('technologies');
		expect(mockProject.featured).toBe(true);
	});
});
