import axios from 'axios';

const api = axios.create({
    baseUrl:'http://127.0.0.1:8000/api/auth'
});

api.defaults.timeout=10000;


export default api;