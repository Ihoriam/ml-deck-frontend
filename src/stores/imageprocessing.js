import {AppSettings} from "../AppSettings.js";

export async function processImage(image) {
    console.log("process")
    const response = await fetch(AppSettings.API_URL + '/image-processing/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            base64Image: image,
        })
    });
    const result = await response.json();
    return result.base64Image;
}