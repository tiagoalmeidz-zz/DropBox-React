import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tiago-backend.herokuapp.com',
});

export default api;