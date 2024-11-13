import axiosInstance from './axiosInstance';

// Регистрация пользователя
export const registrationUserApi = {
  register: async (userData) => {
    try {
      const response = await axiosInstance.post('/users/register', userData);
      return response;
    } catch (error) {
      throw error;
    }
  },
}

// Авторизация пользователя
export const authorizationUserApi = {
  login: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
}
