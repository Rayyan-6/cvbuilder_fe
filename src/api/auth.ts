import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

if(!API_URL){
  throw new Error("VITE_API_URL is not set. Please check your .env file.")
}

export const signup = (data: { email: string; password: string }) =>
  axios.post(`${API_URL}/auth/register`, data);

export const login = (data: { email: string; password: string }) =>
  axios.post(`${API_URL}/auth/login`, data);
