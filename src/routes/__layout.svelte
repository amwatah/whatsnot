<script>
	// @ts-nocheck

	import 'carbon-components-svelte/css/all.css';
	import '../app.css';

	import TopNav from '$lib/TopNav.svelte';


	const lightTheme = 'https://unpkg.com/carbon-components-svelte/css/g10.css';
	const darkTheme = 'https://unpkg.com/carbon-components-svelte/css/g90.css';
	

	let activeTheme = darkTheme


	function toggleTheme() {
        alert("Changing Theme")
	    if(activeTheme=== darkTheme ){
			 activeTheme = lightTheme
		}else{
			activeTheme = darkTheme
		}
        
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={activeTheme} />
</svelte:head>

<div class=" min-h-screen w-screen overflow-x-hidden font-mono ">
	<TopNav {toggleTheme} />

	<slot />
</div>
