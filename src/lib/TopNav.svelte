<script>
import { goto } from '$app/navigation';

	import Icon from '@iconify/svelte';
	import {  Toggle } from 'carbon-components-svelte';

	export let toggleTheme;
</script>

<nav class="nav  h-[15vh] fixed top-0 left-0 right-0 p-1 grid grid-cols-12     ">
	<section class="title flex  col-span-12 items-center  ">
		<h1 on:click={ ()=> goto('/') }  class="title-text font-bold text-lg flex-[7]  ">WhatsApp</h1>
		<figure class="search text-lg    flex-1">
			<Icon icon="ant-design:search-outlined" class="mt-4" />
		</figure>
		<figure class="mode flex-1 flex  ">
			<Toggle
				size="sm"
				labelA=""
				labelB=""
				on:change={() => {
					toggleTheme();
				}}
				class=" pt-[2%]"
			/>
			<Icon icon="carbon:light" class=" mt-4  " />
		</figure>
	</section>
	<section class="tab col-span-12 flex justify-evenly  ">
		<a href="/chat"> <button class=" focus:border-b-2 focus:border-b-green-500">CHATS</button></a>
        <a href="/status"> <button class=" focus:border-b-2 focus:border-b-green-500">STATUS</button></a>
		<a href="/calls"> <button class=" focus:border-b-2 focus:border-b-green-500">CALLS</button></a>
	</section>
</nav>
