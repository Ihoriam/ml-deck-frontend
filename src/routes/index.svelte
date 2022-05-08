<script>
	import { models, fetchModels } from '../stores/modelstore.js';
	import ModelCard from '../components/modelCard.svelte';

	fetchModels();

	let searchTerm = '';
	let filteredModels = [];
	$: {
		if (searchTerm) {
			filteredModels = $models.filter((model) =>
				model.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredModels = [...$models];
		}
	}
</script>

<svelte:head>
	<title>Welcome to ModelDeck</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">ModelDeck</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
	placeholder="Search model"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredModels as model}
		<ModelCard {model} />
	{/each}
</div>
