<script>
    import { models, fetchModels } from '../stores/modelstore.js';
    import ModelCard from '../components/modelCard.svelte';
    import { onMount } from 'svelte';

    onMount(() => fetchModels());

    let searchTerm = '';
    let category = '';
    let filteredModels = [];

    $: {
        if (searchTerm && category) {
            filteredModels = $models.filter(
                (model) => model.name.toLowerCase().includes(searchTerm.toLowerCase()) && model.category.toLowerCase() == category.toLowerCase(),
            );
        } else if (searchTerm) {
            filteredModels = $models.filter((model) => model.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else if (category) {
            filteredModels = $models.filter((model) => model.category.toLowerCase() == category.toLowerCase());
        } else {
            filteredModels = [...$models];
        }
    }

    function cleanFilters() {
        searchTerm = '';
        category = '';
    }
</script>

<svelte:head>
    <title>Welcome to ModelDeck</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">ModelDeck</h1>
<div class="flex justify-center">
    <input
        class="w-2/5 rounded-md text-lg p-2 mx-2 border-2 border-gray-200"
        bind:value={searchTerm}
        placeholder="Search model"
    />
    <button class="{category === 'classic' ? 'bg-slate-100' : ''} border-2 rounded-md w-1/5 mx-2" on:click={() => (category = 'classic')}>Classic</button>
    <button class="{category === 'cv' ? 'bg-slate-100' : ''} border-2 rounded-md w-1/5 mx-2" on:click={() => (category = 'cv')}>CV</button>
    <button class="{category === 'nlp' ? 'bg-slate-100' : ''} border-2 rounded-md w-1/5 mx-2" on:click={() => (category = 'nlp')}>NLP</button>
    <button on:click={cleanFilters}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="24" fill="currentColor"
            ><path
                d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
            /></svg
        >
    </button>
</div>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredModels as model}
        <ModelCard {model} />
    {/each}
</div>
