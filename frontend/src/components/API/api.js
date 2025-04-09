import axios from 'axios';

const apiBase = process.env.REACT_APP_API_URL;

export default axios.create({
    baseURL: apiBase
});
