<script>
	export let side = 2;
	export let text;
</script>

{#if side % 2 == 0}
	<div class="sent  min-h-[5vh] bg-blue-600  rounded-l-full ml-[30%] p-4  ">
		{text}
        <p>
            { new  Date().toLocaleString() }
        </p>
	</div>
{:else}
	<div class="sent min-h-[5vh] bg-gray-700  rounded-r-full mr-[30%] p-4 ">
		{text}
        <p>
            { new  Date().toLocaleString() }
        </p>
	</div>
{/if}
