import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://page-summarizer-ai.vercel.app/',
    headers: {
        'Content-Type': 'application/json',
    }
})

