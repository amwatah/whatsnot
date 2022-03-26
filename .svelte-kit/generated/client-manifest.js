export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\status.svelte"),
	() => import("..\\..\\src\\routes\\calls.svelte"),
	() => import("..\\..\\src\\routes\\chat.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"status": [[0, 3], [1]],
	"calls": [[0, 4], [1]],
	"chat": [[0, 5], [1]]
};