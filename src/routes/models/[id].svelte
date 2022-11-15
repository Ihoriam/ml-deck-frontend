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

<div class="flex flex-col" in:fade>
	<h1 class="text-4xl text-center my-8 uppercase">{model.name}</h1>

	<div>
		<div>
			<img class="card-image" src="https://robohash.org/{model.name}" alt={model.name} />
		</div>
		<div>
			<p>Name: <strong>{model.name}</strong></p>
			<p>Author: <strong>{model.author}</strong></p>
			<p>Description: <strong>{model.description}</strong></p>
			<p>Category: <strong>{model.category}</strong></p>
			<p>Docker Image: <strong>{model.dockerHubImageUrl}</strong></p>
			<p>Created at: <strong>{model.createdAt}</strong></p>
			<p>Updated at: <strong>{model.updatedAt}</strong></p>
			<p></p>
		</div>
	</div>
	<div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>
