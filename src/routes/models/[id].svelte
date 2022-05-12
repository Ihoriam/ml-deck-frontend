<script context="module">
	import { fetchModelById } from '../../stores/modelstore';
	import { fade } from 'svelte/transition';
	export async function load({ params }) {
		const model = await fetchModelById(params.id);
		return { props: { model } };
	}
</script>

<script>
	export let model;
</script>

<svelte:head>
	<title>ModelDeck - {model.name}</title>
</svelte:head>

<div class="flex flex-col items-center" in:fade>
	<h1 class="text-4xl text-center my-8 uppercase">{model.name}</h1>
	<p>Author: <strong>{model.author}</strong> | Created at: <strong>{model.createdAt}</strong></p>
	<img class="card-image" src="https://robohash.org/{model.name}" alt={model.name} />
</div>
