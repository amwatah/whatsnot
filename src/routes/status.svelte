<script>
// @ts-nocheck

import StatusCard from "$lib/StatusCard.svelte";
import { onMount , onDestroy } from "svelte";
 

 let status = [1, ]

 function addStatus(){
     status =  [...status, 1]
 }

 onMount(()=>{
     setInterval( addStatus,4000)
 })

 onDestroy(
    ()=>clearInterval()
 )



</script>



<div class="page pt-[16vh] grid grid-cols-12">
     <section class=" col-span-12"  >
         <StatusCard></StatusCard>
     </section>
     <section  class="col-span-12">
        <h4>RECENT UPDATES</h4>
        {#each status as status}
            <StatusCard who="MY CONTACTS"  ></StatusCard>
        {/each}
     </section>
</div>