<script context="module">
    import {fetchModelById} from '../../stores/modelStore.js';

    export async function load({params}) {
        const model = await fetchModelById(params.id);
        return {props: {model}};
    }
</script>

<script>
    import SuccessBadge from "../../components/badges/successBadge.svelte";
    import WarningBadge from "../../components/badges/warningBadge.svelte";
    import DoubleArrowRight from "../../components/icons/doubleArrowRight.svelte";
    import ThunderIcon from "../../components/icons/thunderIcon.svelte";
    import MediaImage from "../../components/icons/mediaImage.svelte"
    import {fetchContainerInfoByModelId} from "../../stores/containerRepo.js";
    import {fetchDockerHubInfoByName} from "../../stores/dockerHubRepo.js";
    import {getResponseFromContainerByModelId} from "../../stores/containerRepo.js"
    import {fade} from 'svelte/transition';
    import {poll} from "../../polls/poll.js";
    import {addBase64Prefix} from "../../utils/utils.js";

    export let model;

    let containerInfo;
    let dockerHubInfo;

    let imageToProcess;
    let processedImage;
    let fileInput;

    let processing = false;

    poll(async () => {
        containerInfo = await fetchContainerInfoByModelId(model.id);
        dockerHubInfo = await fetchDockerHubInfoByName(model.dockerHubImageUrl);
    }, 5000);

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            imageToProcess = e.target.result;
        };
    }
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
            <img alt={model.name} class="card-image bg-gray-200 rounded-xl" src="https://robohash.org/{model.name}"/>
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
                {#if dockerHubInfo}
                    {#if dockerHubInfo.dockerHubImageExist}
                        <SuccessBadge text="Available"/>
                    {:else}
                        <WarningBadge text="Unavailable"/>
                    {/if}
                {/if}
            </div>
            <div class="flex pb-1 justify-between flex-row">
                <p>Docker container status:</p>
                {#if dockerHubInfo}
                    {#if containerInfo.dockerContainerActive}
                        <SuccessBadge text="Running"/>
                    {:else}
                        <WarningBadge text="Stalled"/>
                    {/if}
                {/if}

            </div>

        </div>
        <div class="p-4 m-4 border-2 border-gray-200 rounded-xl">
            <p class="text-xl font-bold pb-2 ">Example</p>
            <div class="flex flex-row justify-center gap-5 items-center ">
                <div class="w-60 h-60 flex justify-center items-center border rounded-xl">
                    <MediaImage/>
                </div>
                <div>
                    <DoubleArrowRight/>
                </div>
                <div class="w-60 h-60 flex justify-center items-center border rounded-xl">
                    <MediaImage/>
                </div>
            </div>
        </div>
        <div class="p-4 m-4 border-2 border-gray-200 rounded-xl">
            <p class="text-xl font-bold pb-2 ">Try by your own</p>
            <div class="flex flex-row justify-center gap-5 items-center ">
                <div on:click={()=>{fileInput.click();}}>
                    {#if imageToProcess}
                        <img class="object-cover w-60 h-60 rounded-xl" src="{imageToProcess}" alt="d"/>
                    {:else}
                        <label class="w-60 h-60 flex flex-col items-center justify-center px-4 py-6 rounded-lg tracking-wide uppercase border cursor-pointer">
                            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                            </svg>
                            <span class="mt-2 text-base leading-normal">Select a file</span>
                        </label>
                    {/if}
                    <input accept=".jpg, .jpeg, .png" bind:this={fileInput} on:change={(e)=>onFileSelected(e)}
                           style="display:none" type="file">

                </div>
                <div>
                    <div>
                        <button class="{processing === false ? '' : 'animate-pulse'}" type="button"
                                on:click={() => {
                                    processing = true;
                                    getResponseFromContainerByModelId(model.id, imageToProcess)
                                        .then((result) => processedImage = result)
                                        .finally(() => processing = false);
                                }}>
                            <ThunderIcon/>
                        </button>
                    </div>

                </div>
                <div>
                    {#if processedImage}
                        <img class="object-cover w-60 h-60 rounded-xl" src="{addBase64Prefix(processedImage)}" alt="d"/>
                    {:else}
                        <div class="animate w-60 h-60 flex justify-center items-center border rounded-xl">
                            <MediaImage/>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
