import sendRequest from "./sendRequest";

const BASE_URL = 'http://localhost:3000/api/homes'

export async function getAllHomes(){
    console.log('Sending request to getAllHomes')
    return await sendRequest(`${BASE_URL}/all`, 'POST')
}

export async function likeHome(id, dir){
    return await sendRequest(`${BASE_URL}/like`, 'POST', {id:id, dir:dir})
}

export async function addNewHome(details){
    console.log(details)
    return await sendRequest(`${BASE_URL}/add`, 'POST', details)
}