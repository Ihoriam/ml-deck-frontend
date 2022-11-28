import {AppSettings} from "../AppSettings.js";

export async function fetchDockerHubInfoByName(name) {
    console.log("fetch data about docker hub image");
    try {
        const url = AppSettings.API_URL + `/dockerhub/repositories/check?name=${name}`;
        const res = await fetch(url);
        const data = await res.json();
        return {
            dockerHubImageExist: data.dockerHubImageExist,
        };
    } catch (err) {
        console.error(err);
        return null;
    }
}