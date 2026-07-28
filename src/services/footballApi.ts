const BACKEND_URL = 'BACKEND_URL';

export async function getMatchesByDate(date: string){
    const requestUrl = `${BACKEND_URL}/matches?date=${date}`;
    const response = await fetch(requestUrl);
    if(response.ok){
        const data = await response.json();
        return data;
    }else{
        throw new Error(`Request failed with status: ${response.status}`);
    }
}