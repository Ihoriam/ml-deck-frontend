import {AppSettings} from "../AppSettings.js";

export async function fetchContainerInfoByModelId(id) {
    console.log("fetch container info");
    try {
        const url = AppSettings.API_URL + `/models/${id}/container/info`;
        const res = await fetch(url);
        const data = await res.json();
        return {
            dockerContainerActive: data.dockerContainerActive,
        };
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function getResponseFromContainerByModelId(id, prompt) {
    console.log("get response from container");
    // console.log(prompt)
    const response = await fetch(AppSettings.API_URL + `/models/${id}/container/response`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
            })
        });
    const result = await response.json();
    console.log(result.result)
    return result.result;
}