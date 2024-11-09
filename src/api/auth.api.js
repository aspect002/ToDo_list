import axios from 'axios';

const API_BASE_URL = 'https://todo-redev.herokuapp.com/api';

const apiUser = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});


//-------------------регистрация---------------//
export const registrationUserApi = {
  register: async (userData) => {
    const response = await apiUser.post('/users/register', userData);
    return response;
  },
};

//--------авторизация------------//
export const authorizationUserApi = {
  login: async (userData) => {
    try {
      const response = await apiUser.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      throw error;
    }
  },
}
