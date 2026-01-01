// src/api/axios.ts
import axios from 'axios';

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL;

  if(!axios.defaults.baseURL){
    throw new Error("VITE_API_URL is not set. Please check your .env file.")
  }

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
