<script>
    import {fade} from 'svelte/transition';

    export let model;
    const humanReadableCategoryName = {
        NLP: 'Natural language processing',
        CLASSIC: 'Classic machine learning',
        CV: 'Computer vision',
    };
    console.log(JSON.stringify(model));
</script>

<a class="group block relative p-6 rounded-3xl"
   href={`/models/${model.id}`}
   in:fade>
    <div class="flex h-60 rounded-3xl border-4 border-black bg-white p-6 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
<!--        <span class="absolute right-6 top-6 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">4.3</span>-->
        <div class="flex justify-between p-8 w-96 transition-opacity group-hover:absolute group-hover:opacity-0">
            <img class="w-32 h-32 border-4 rounded-3xl bg-gray-200" src="https://robohash.org/{model.name}"
                 alt={model.name}/>
            <div class="justify-center m-auto">
                <p class="text-xl font-bold sm:text-2xl">{model.name}</p>
            </div>
        </div>

        <div class="flex justify-between absolute p-8 w-96 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
            <div>
                <p class="text-xl pb-2 font-bold sm:text-2xl">{model.name}</p>
                <p class="text-left">Author: {model.createdBy ? model.createdBy.username + ' ' + model.createdBy.lastName : "Skynet"}</p>
                <p class="text-left">Category: {humanReadableCategoryName[model.category]}</p>
                <p class="text-left">Published at: {model.createdAt}</p>
            </div>
        </div>

    </div>
</a>
