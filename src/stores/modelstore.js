import { writable } from "svelte/store";

export const models = writable([])
const modelDetailsCached = {};
let loaded = false;

export async function fetchModels() {
    if (loaded) return;
    const url = 'http://localhost:8080/api/models';
    const res = await fetch(url);
    const data = await res.json();
    const loadedModels = data.map((data, index) => {
        return {
            id: data.id,
            name: data.name,
            author: data.author,
            imageUrl: data.imageUrl,
            createdAt: data.createdAt
        }
    })
    models.set(loadedModels);
    loaded = true;
}

export async function fetchModelById(id) {
    if (modelDetailsCached[id]) return modelDetailsCached[id];
    try {
        const url = `http://localhost:8080/api/models/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        modelDetailsCached[id] = data;
        return {
            id: data.id,
            name: data.name,
            author: data.author,
            imageUrl: data.imageUrl,
            createdAt: data.createdAt
        };
    } catch (err) {
        console.error(err);
        return null;
    }
};