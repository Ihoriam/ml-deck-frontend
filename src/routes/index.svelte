<script>
    import {fetchModels, models} from '../stores/modelStore.js';
    import ModelCard from '../components/modelCard.svelte';
    import {onMount} from 'svelte';

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

<div class="max-w-screen-xl px-4 py-10 mx-auto text-center lg:py-28">
    <h1 class="text-4xl font-bold text-gray-900 sm:text-6xl">ML Deck</h1>
    <h2 class="mt-4 text-gray-700">Library of all kind of machine leaning models</h2>
    <p class="max-w-lg mx-auto mt-4 text-sm leading-relaxed text-gray-500">
        <!--        Write intro -->
        ML Deck is a collection of machine learning models. It is easy to bring them into your own applications.
        You can also contribute to this project by adding your own models. Share your models with the world!
    </p>
    <a class="mt-4 group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:text-indigo-500"
       href="/addModel">
        <span class=" rounded-xl absolute inset-0 translate-x-0.5 translate-y-0.5 bg-black transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span class=" rounded-xl relative block border border-current bg-white px-8 py-3">Add your model</span>
    </a>
</div>

<div class="flex justify-center">
    <input
            class="w-2/5 rounded-xl text-lg p-2 mx-2 border-2 border-gray-200"
            bind:value={searchTerm}
            placeholder="Search model"
    />
<!--    <button class="{category === 'classic' ? 'bg-slate-100' : ''} border-2 rounded-xl w-1/5 mx-2"-->
<!--            on:click={() => (category = 'classic')}>Classic-->
<!--    </button>-->
    <button class="{category === 'cv' ? 'bg-slate-100' : ''} border-2 rounded-xl w-1/5 mx-2"
            on:click={() => (category = 'cv')}>CV
    </button>
    <button class="{category === 'nlp' ? 'bg-slate-100' : ''} border-2 rounded-xl w-1/5 mx-2"
            on:click={() => (category = 'nlp')}>NLP
    </button>
    <button on:click={cleanFilters}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="24" fill="currentColor"
        >
            <path
                    d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
            />
        </svg
        >
    </button>
</div>
<div class="py-4 grid gap-4 lg:grid-cols-2 grid-cols-1">
    {#each filteredModels as model}
        <ModelCard {model}/>
    {/each}
</div>
