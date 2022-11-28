import {writable} from "svelte/store";
import {AppSettings} from "../AppSettings.js";

export const models = writable([])

const modelDetailsCached = {};
let loaded = false;

export async function fetchModels() {
    if (loaded) return;
    const url = AppSettings.API_URL + '/models';
    const res = await fetch(url);
    const data = await res.json();
    const loadedModels = data.map((data) => {
        return {
            id: data.id,
            name: data.name,
            category: data.category,
            dockerHubImageUrl: data.dockerHubImageUrl,
            description: data.description,
            createdBy: data.createdBy,
            createdAt: data.createdAt,
            updatedBy: data.updatedBy,
            updatedAt: data.updatedAt
        }
    })
    models.set(loadedModels);
    loaded = true;
}

export async function fetchModelById(id) {
    if (modelDetailsCached[id]) return modelDetailsCached[id];
    try {
        const url = AppSettings.API_URL + `/models/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        modelDetailsCached[id] = data;
        return {
            id: data.id,
            name: data.name,
            category: data.category,
            dockerHubImageUrl: data.dockerHubImageUrl,
            description: data.description,
            createdBy: data.createdBy,
            createdAt: data.createdAt,
            updatedBy: data.updatedBy,
            updatedAt: data.updatedAt
        };
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function createModel(model) {
    try {
        const url = AppSettings.API_URL + `/models`;
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