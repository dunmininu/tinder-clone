import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8001/api/main'
    // baseURL: 'https://mynodebackend.onrender.com/api/main'
})

export default instance;