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
<div class="max-w-screen-xl px-4 pt-10 pb-5 mx-auto text-center lg:pt-28 lg:pb-10">
    <h1 class="text-4xl font-bold text-gray-900 sm:text-6xl">{model.name}</h1>
</div>
<div class="flex flex-row" in:fade>
    <div class="flex flex-col justify-between w-1/3">
        <div class="p-4 m-4 border-2 border-gray-200 rounded-xl">
            <img class="card-image bg-gray-200 rounded-xl" src="https://robohash.org/{model.name}" alt={model.name}/>
        </div>
        <div class="p-4 m-4 h-2/3 border-2 border-gray-200 rounded-xl">
            <p class="text-xl font-bold pb-2 ">General info</p>
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
        <div class="p-4 m-4 border-2 border-gray-200 rounded-xl">
            <p class="text-xl font-bold pb-2 ">Container info</p>
            <div class="flex pb-1 justify-between flex-row">
                <p>DockerHub image status:</p>
                <SuccessBadge text="Loaded"/>
            </div>
            <div class="flex pb-1 justify-between flex-row">
                <p>Docker container status:</p>
                <WarningBadge text="Stalled"/>
            </div>

        </div>
        <div class="p-4 m-4 border-2 border-gray-200 rounded-xl">
            <p class="text-xl font-bold pb-2 ">Example</p>
            <div class="flex flex-row justify-center gap-5 items-center ">
                <div>
                    <img class="w-60 h-60 bg-gray-200 rounded-xl" src="" alt="">
                </div>
                <div>
                    <img class="w-20 h-20 bg-gray-200 rounded-xl" src="" alt="">
                </div>
                <div>
                    <img class="w-60 h-60 bg-gray-200 rounded-xl" src="" alt="">
                </div>
            </div>
        </div>
        <div class="p-4 m-4 border-2 border-gray-200 rounded-xl">
            <p class="text-xl font-bold pb-2 ">Try by your own</p>
            <div class="flex flex-row justify-center gap-5 items-center ">
                <div>
                    <img class="w-60 h-60 bg-gray-200 rounded-xl" src="" alt="">
                </div>
                <div>
                    <img class="w-20 h-20 bg-gray-200 rounded-xl" src="" alt="">
                </div>
                <div>
                    <img class="w-60 h-60 bg-gray-200 rounded-xl" src="" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
