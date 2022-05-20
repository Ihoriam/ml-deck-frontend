<script>
    import { fade } from 'svelte/transition';
    export let model;
    const humanReadableCategoryName = {
        NLP: 'Netural language processing',
        CLASSIC: 'Classic machine learning',
        CV: 'Computer vision',
    };
</script>

<a
    class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-lg hover:shadow-md flex flex-col items-start"
    href={`/models/${model.id}`}
    in:fade
>
    <h2 class="font-bold text-lg mb-5 text-center">{model.name}</h2>
    <div class="flex">
        <div class="h-40 w-40">
            <img class="border-4 rounded-md bg-gray-200" src="https://robohash.org/{model.name}" alt={model.name} />
        </div>
        <div class="h-40 w-max flex flex-col justify-between content-start">
            <p class="text-left pl-5">Author: {model.author.firstName + ' ' + model.author.lastName}</p>
            <p class="text-left pl-5">Category: {humanReadableCategoryName[model.category]}</p>
            <p class="text-left pl-5">Published at: {model.createdAt}</p>
        </div>
    </div>
</a>
