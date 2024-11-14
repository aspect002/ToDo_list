import axios from 'axios';
import { tokenService } from '../services/tokenService';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosTasksInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosTasksInstance.interceptors.request.use((config) => {
  const token = tokenService.getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosTasksInstance;
