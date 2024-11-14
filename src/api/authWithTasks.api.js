import axios from 'axios';
import { tokenService } from '../services/tokenService';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// болванка
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

//  интерсептор на токен
axiosInstance.interceptors.request.use((config) => {
  const token = tokenService.getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// получить все таски
export const getAllTasks = async (isCompleted) => {
  try {
    const params = {};
    if (isCompleted !== undefined) {
      params.isCompleted = isCompleted;
    }
    const response = await axiosInstance.get('/todos', { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//создание задачи
export const createTodo = async (taskData) => {
  try {
    const response = await axiosInstance.post('/todos', taskData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//изменение названия
export const updateTodo = async (taskId, taskData) => {
  try {
    const response = await axiosInstance.patch(`/todos/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//удаление
export const deleteTodo = async (taskId) => {
  try {
    const response = await axiosInstance.delete(`/todos/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//зачеркивание задачи
export const toggleTodoCompletion = async (taskId) => {
  try {
    const response = await axiosInstance.patch(`/todos/${taskId}/isCompleted`, {});
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// регистрация
export const registrationUserApi = {
  register: async (userData) => {
    try {
      const response = await axiosInstance.post('/users/register', userData);
      return response;
    } catch (error) {
      throw error;
    }
  },
};


//вход
export const authorizationUserApi = {
  login: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      throw error;
    }
  },
};
