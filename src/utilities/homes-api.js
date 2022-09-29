import sendRequest from "./sendRequest";

const BASE_URL = 'http://localhost:3000/api/homes'

export async function getAllHomes(){
    console.log('Sending request to getAllHomes')
    return await sendRequest(`${BASE_URL}/all`, 'POST')
}

export async function likeHome(id){
    return await sendRequest(`${BASE_URL}/like`, 'POST', {id})
}