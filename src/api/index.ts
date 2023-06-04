import axios from 'axios';
import { API_URL } from './config';

const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('auth-token')}`;
  return config;
});

export default api