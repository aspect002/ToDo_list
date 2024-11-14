import axiosAuthInstance from "./axiosAuthInstance";

// Регистрация пользователя
export const registrationUserApi = {
  register: async (userData) => {
    try {
      const response = await axiosAuthInstance.post('/users/register', userData);
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
      const response = await axiosAuthInstance.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      throw error;
    }
  },
}
