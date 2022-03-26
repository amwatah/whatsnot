<script>
import Icon from "@iconify/svelte";

export let name


    


</script>

<div class="  col-span-12  call-card flex w-full  p-4   bg-gray-600 m-3 rounded-md transition duration-1000  hover:bg-blue-700 hover:scale-[0.85] ">
    <figure class="contact text-2xl text-white  ">
        <Icon icon="carbon:user-avatar-filled-alt" />

    </figure>
    <section  class="details flex-1 flex flex-col items-center text-white " >
          <h2>{name}</h2>
          <p>{new Date().toLocaleString()} </p>
    </section>
    <figure class="icons text-2xl text-green-600" >
        <Icon icon="fluent:call-16-filled" /> 
    </figure>
</div>