import axios from 'axios';

const apiBase = process.env.REACT_APP_API_URL;

export function registerUser(newUserDetails) {
    const apiUrl = `${apiBase}/register`;
    return axios.post(apiUrl, newUserDetails, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
