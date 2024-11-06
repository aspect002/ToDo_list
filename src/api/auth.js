import axios from 'axios';

const API_BASE_URL = 'https://todo-redev.herokuapp.com/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const authApi = {
  register: async (userData) => {
    try {
      const response = await apiClient.post('/users/register', userData);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else {
        throw new Error('An unexpected error occurred. Please try again.');
      }
    }
  },
};
