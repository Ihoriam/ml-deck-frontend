<script>
import {model} from "../stores/modelstore.js";
</script>

<svelte:head>
    <title>Add new model</title>
</svelte:head>

<!--page where user can add new model-->
<h1 class="text-4xl text-center my-8 uppercase">Add model</h1>
<div>
    <form class="flex flex-col">
        <label for="name">Name</label>
        <input type="text" id="name" bind:value={$model.name} class="border-2 rounded-md p-2 my-2">
        <label for="category">Price</label>
        <input type="text" id="category" bind:value={$model.category} class="border-2 rounded-md p-2 my-2">
        <label for="image">Image</label>
        <input type="text" id="image" bind:value={$model.imageUrl} class="border-2 rounded-md p-2 my-2">
        <label for="description">Description</label>
        <textarea id="description" bind:value={$model.description} class="border-2 rounded-md p-2 my-2"></textarea>
        <button type="submit" class="bg-black text-white rounded-md p-2 my-2">Add</button>
    </form>
</div>