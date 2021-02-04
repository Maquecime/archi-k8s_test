import axios from 'axios';

export const HTTP = axios.create({
    baseURL: (process.env.VUE_APP_BACKEND_URL ? process.env.VUE_APP_BACKEND_URL : "/api/")
});