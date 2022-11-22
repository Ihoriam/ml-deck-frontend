<script>
    import {createModel} from "../stores/modelstore.js";
    import {fade} from 'svelte/transition';

    let model = {
        name: null,
        category: null,
        description: null,
        imageUrl: null,
    };
</script>

<svelte:head>
    <title>Add new model</title>
</svelte:head>

<div class="max-w-screen-xl px-4 pt-10 pb-5 mx-auto text-center lg:pt-28 lg:pb-10">
    <h1 class="text-4xl font-bold text-gray-900 sm:text-6xl">Add new</h1>
</div>
<div>
    <form class="flex flex-col" in:fade>
        <label for="name">Name</label>
        <input type="text" id="name" bind:value={model.name} class="border-2 rounded-md p-2 my-2">
        <label for="category">Category</label>
        <!--        <input type="text" id="category" bind:value={$model.category} class="border-2 rounded-md p-2 my-2">-->
        <select id="category" bind:value={model.category} class="border-2 rounded-md p-2 my-2">
            <option value="NLP">Natural Language Processing</option>
            <option value="CV">Computer vision</option>
            <option value="CLASSIC">Classic machine learning</option>
        </select>
        <label for="image">DockerHub image url</label>
        <input type="text" id="image" bind:value={model.dockerHubImageUrl} class="border-2 rounded-md p-2 my-2">
        <label for="description">Description</label>
        <textarea id="description" bind:value={model.description} class="resize-none h-48 border-2 rounded-md p-2 my-2"></textarea>
        <button type="submit" class="bg-black text-white rounded-md p-2 my-2" on:click={createModel(model)}>Add</button>
    </form>
</div>