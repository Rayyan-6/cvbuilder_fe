import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; 

export const signup = (data: { email: string; password: string }) =>
  axios.post(`${API_URL}/auth/register`, data);

export const login = (data: { email: string; password: string }) =>
  axios.post(`${API_URL}/auth/login`, data);
