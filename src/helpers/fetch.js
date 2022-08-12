export async function fetchFromApi(url){
    let response = await fetch(url);
    if (!response.ok) throw new Error(response.status);
    let data = await response.json();
    return data;
   // return response;
}