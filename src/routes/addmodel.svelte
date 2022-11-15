<script>
    import {createModel} from "../stores/modelstore.js";

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

<!--page where user can add new model-->
<h1 class="text-4xl text-center my-8 uppercase">Add model</h1>
<div>
    <form class="flex flex-col">
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
        <input type="text" id="image" bind:value={model.imageUrl} class="border-2 rounded-md p-2 my-2">
        <label for="description">Description</label>
        <textarea id="description" bind:value={model.description} class="resize-none h-48 border-2 rounded-md p-2 my-2"></textarea>
        <button type="submit" class="bg-black text-white rounded-md p-2 my-2" on:click={createModel(model)}>Add</button>
    </form>
</div>