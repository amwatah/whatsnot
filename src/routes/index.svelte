<script>
import { goto } from "$app/navigation";

import Icon from "@iconify/svelte";
import { Button, Tile } from "carbon-components-svelte";



</script>

<div class="page pt-[16vh] grid grid-cols-12 items-center h-screen ">
    <figure class="icon col-span-12  justify-self-center ">
        <Icon icon="logos:whatsapp" width="200"  />
    </figure>
    <header class="font-bold col-span-12 justify-self-center ">
        Welcome to  Whatsapp
    </header>
    
        <div class=" col-span-12 justify-self-center transition hover:scale-[1.2]  duration-700 ">
            <Button on:click={ ()=>{ goto('/chat') }}   >
                AGREE AND CONTINUE
            </Button>
        </div>
        
    
</div>