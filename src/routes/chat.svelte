<script>
	// @ts-nocheck

	import MessageBox from '$lib/MessageBox.svelte';
import MessageDispalay from '$lib/MessageDispalay.svelte';

	import { newMessage } from '../stores';
	let recievedMessages = [];
	function addNewMessage() {
		recievedMessages = [...recievedMessages, $newMessage];
	}
</script>

<div class="page pt-[16vh] grid grid-cols-4 gap-1 pb-[10vh]  ">
   
	
	{#each recievedMessages as sentMessage , index (index)}
        <div class="msg-box col-span-4 ">
            <MessageDispalay side={index} text={ sentMessage } />
        </div> 
      
	{/each}
    
		<MessageBox on:newIn={() => addNewMessage()}    />
	

</div>
