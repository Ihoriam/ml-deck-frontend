<script>
    import { fade } from 'svelte/transition'
    export let model;
</script>

<a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/models/${model.id}`} in:fade>
    <img class="h-40 w-40" src={model.imageUrl} alt={model.name}>
    <h2>{model.name}</h2>
</a>