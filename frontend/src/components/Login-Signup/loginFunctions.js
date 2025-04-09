import axios from 'axios';

const apiBase = process.env.REACT_APP_API_URL;

export function logUserIn(userCredentials) {
    let apiUrl = `${apiBase}/login`;
    return axios.post(apiUrl, userCredentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export function loadRoutes() {
    const authToken = sessionStorage.getItem('authToken') || '';
    let apiUrl = `${apiBase}/user/profile?secret_token=${authToken}`;
    return axios.get(apiUrl);
}

export function getCurrentUserDetails(authToken) {
    const token = authToken;
    let apiUrl = `${apiBase}/user/profile?secret_token=${token}`;
    return axios.get(apiUrl);
}
