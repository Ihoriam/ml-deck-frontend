<script context="module">
    import {fetchModelById} from '../../stores/modelstore';
    import {fade} from 'svelte/transition';
    import SuccessBadge from "../../components/badges/successBadge.svelte";
    import WarningBadge from "../../components/badges/warningBadge.svelte";

    export async function load({params}) {
        const model = await fetchModelById(params.id);
        return {props: {model}};
    }

</script>

<script>
    export let model;
</script>

<svelte:head>
    <title>ModelDeck - {model.name}</title>
</svelte:head>
<!--<div class="max-w-screen-xl px-4 py-10 mx-auto text-center lg:py-28">-->
<!--    <h1 class="text-4xl font-bold text-gray-900 sm:text-6xl">{model.name}</h1>-->
<!--</div>-->
<div class="flex flex-row" in:fade>
    <div class="flex flex-col flex-initial justify-between w-1/3">
        <div class="p-8">
            <img class="card-image" src="https://robohash.org/{model.name}" alt={model.name}/>
        </div>
        <div class="p-8">
            <p class="text-xl font-bold pb-2 underline">General info</p>
            <p>Name: {model.name}</p>
            <p>Author: {model.createdBy ? model.createdBy.username + ' ' + model.createdBy.lastName : "Skynet"}</p>
            <p>Description: {model.description}</p>
            <p>Category: {model.category}</p>
            <p>Docker Image: {model.dockerHubImageUrl}</p>
            <p>Created at: {model.createdAt}</p>
            <p>Updated at: {model.updatedAt}</p>
        </div>
    </div>
    <div class="flex flex-col flex-initial w-2/3">
        <div class="p-8">
            <p class="text-xl font-bold pb-2 underline">Container info</p>
            <p>DockerHub image status:
                <SuccessBadge text="Loaded"/>
            </p>
            <p>Docker container status:
                <WarningBadge text="Stalled"/>
            </p>
        </div>
        <div class="p-8">
            <p class="text-xl font-bold pb-2 underline">Example</p>
            <div class="inline-flex">
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <img src="" alt="">
                </div>
            </div>
        </div>
        <div class="p-8">
            <p class="text-xl font-bold pb-2 underline">Try by your own</p>

        </div>
    </div>
</div>
