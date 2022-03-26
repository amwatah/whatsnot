<script>
	// @ts-nocheck

	import 'carbon-components-svelte/css/all.css';
	import '../app.css';

	import TopNav from '$lib/TopNav.svelte';



	let lightModeActive = false;
	
	const carbonDarkTheme = 'https://unpkg.com/carbon-components-svelte/css/g90.css';
	function toggleTheme() {
		if (lightModeActive) {
			lightModeActive = false;
		} else {
			lightModeActive = true;
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={ carbonDarkTheme }  />
</svelte:head>

<div class=" min-h-screen w-screen overflow-x-hidden font-mono ">
	<TopNav {toggleTheme} />

	<slot />
</div>
