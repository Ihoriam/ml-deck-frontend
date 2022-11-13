import {writable} from "svelte/store";

export const models = writable([])

const modelDetailsCached = {};
let loaded = false;

export async function fetchModels() {
    if (loaded) return;
    const url = 'http://localhost:9090/api/models';
    const res = await fetch(url);
    const data = await res.json();
    const loadedModels = data.map((data) => {
        return {
            id: data.id,
            name: data.name,
            category: data.category,
            description: data.description,
            imageUrl: data.imageUrl,
            createdBy: data.createdBy,
            createdAt: data.createdAt
        }
    })
    models.set(loadedModels);
    loaded = true;
}

export async function fetchModelById(id) {
    if (modelDetailsCached[id]) return modelDetailsCached[id];
    try {
        const url = `http://localhost:9090/api/models/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        modelDetailsCached[id] = data;
        return {
            id: data.id,
            name: data.name,
            category: data.category,
            description: data.description,
            imageUrl: data.imageUrl,
            createdBy: data.createdBy,
            createdAt: data.createdAt
        };
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function createModel(model) {
    try {
        const url = `http://localhost:9090/api/models`;
        console.log(JSON.stringify(model));
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}