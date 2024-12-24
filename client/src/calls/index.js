import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://pagesummarizerai.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    }
})

