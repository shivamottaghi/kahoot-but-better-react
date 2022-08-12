export async function fetchFromApi(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
}