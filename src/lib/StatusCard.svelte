<script>
import Icon from "@iconify/svelte";
export let who ="MY STATUS"


</script>
<div class="status bg-gray-700 h-[10vh] flex items-center m-1">
    <Icon icon="tabler:circle-dotted" class="text-5xl  " />
     <p class="flex-[1] text-center" >{who}</p>
</div>