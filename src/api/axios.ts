// src/api/axios.ts
import axios from 'axios';

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL;

  if(!axios.defaults.baseURL){
    throw new Error("Please set the env variables")
  }

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
