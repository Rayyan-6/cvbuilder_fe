import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export const signup = (data: { email: string; password: string }) =>
  axios.post(`${API_URL}/auth/register`, data);

export const login = (data: { email: string; password: string }) =>
  axios.post(`${API_URL}/auth/login`, data);
