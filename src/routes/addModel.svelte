<script>
    import {createModel} from "../stores/modelstore.js";
    import {fade} from 'svelte/transition';

    let isDockerHubImageExist;
    let model = {};

    $: {
        console.log(model);
        isDockerHubImageExist = checkDockerHubImageExist(model.imageUrl) === true;
        console.log(isDockerHubImageExist);
    }

    async function checkDockerHubImageExist() {
        const response = await fetch(`http://localhost:9090/api/dockerhub/repositories/check?name=${model.dockerHubImageUrl}`);
        const data = await response.json();
        return data;
    }


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
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <input type="text" id="name" placeholder="GPT, BART, R-CNN..." bind:value={model.name} class="border-2  rounded-md p-2 pl-10 my-2 w-full">
        </div>
        <label for="category">Category</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 6h12M4 6.01l.01-.011M4 12.01l.01-.011M4 18.01l.01-.011M8 12h12M8 18h12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <select id="category" bind:value={model.category} class="border-2 rounded-md p-2 pl-10 my-2 w-full">
                <option value="" disabled selected>Select category</option>
                <option value="NLP">Natural Language Processing</option>
                <option value="CV">Computer Vision</option>
                <!--            <option value="CLASSIC">Classic machine learning</option>-->
            </select>
        </div>
        <label for="image">DockerHub image url</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z" stroke="#000000" stroke-width="1.5"></path><path d="M12 8c-3.273 0-3.273 2-3.273 3C7.818 11 6 11.5 6 13.5S7.818 16 8.727 16h6.546c.909 0 2.727-.5 2.727-2.5S16.182 11 15.273 11c0-1 0-3-3.273-3z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path></svg>
            </div>
            <input type="text" id="image" placeholder="myrepo/yolo" bind:value={model.dockerHubImageUrl} class="border-2 rounded-md p-2 pl-10 my-2 w-full">
        </div>
        <label for="description">Description</label>
        <textarea id="description" placeholder="My awesome model..." bind:value={model.description}
                  class="resize-none h-48 border-2 rounded-md p-2 my-2"></textarea>
        <button type="submit" class="bg-black text-white rounded-md p-2 my-2" on:click={createModel(model)}>Add
        </button>
    </form>
</div>