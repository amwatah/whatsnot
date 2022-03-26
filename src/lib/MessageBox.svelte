<script>
	import Icon from '@iconify/svelte';

	import { TextInput } from 'carbon-components-svelte';
	import { createEventDispatcher } from 'svelte';
	import { newMessage } from '../stores';
	let message = '';
	const dispatch = createEventDispatcher();

	function sendMessage() {
		
		dispatch("newIn")
	}
</script>

<div class="box p-2   fixed bottom-0 w-screen  grid grid-cols-12 ">
	<div class="col-span-10 col-start-2">
		<TextInput bind:value={$newMessage} class=" " />
	</div>
	<button on:click={sendMessage}>
		<Icon icon="fluent:send-20-regular" class=" justify-self-center ml-4 pt-2 text-3xl" />
	</button>
</div>
