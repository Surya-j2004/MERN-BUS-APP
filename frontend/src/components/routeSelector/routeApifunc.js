import axios from 'axios';

const apiBase = process.env.REACT_APP_API_URL;

export async function getRoutesFromApi(startCity, destination) {
    const apiUrl = `${apiBase}/booking/`;
    const response = await axios.post(apiUrl, { startCity, destination });
    return response;
}
