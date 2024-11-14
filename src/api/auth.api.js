import axiosInstance from "./axiosInstance";

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
      const loginUrl = '/auth/login';
      console.log("Logging in at:", loginUrl);
      console.log("User data:", userData);

      const response = await axiosInstance.post(loginUrl, userData);
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      throw error;
    }
  },
}
