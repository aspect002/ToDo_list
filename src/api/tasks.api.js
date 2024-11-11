import axios from 'axios';
import { tokenService } from '../services/tokenService';
const API_BASE_URL = 'https://todo-redev.herokuapp.com/api';

const apiTasks = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

//------------------- Получение всех задач ---------------//
export const getAllTasks = async (isCompleted) => {
  try {
    const token = tokenService.getToken();
    const params = {};
    if (isCompleted !== undefined) {
      params.isCompleted = isCompleted;
    }
    const response = await apiTasks.get('/todos', {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//------------------- Создание новой задачи ---------------//
export const createTodo = async (taskData, token) => {
  try {
    const response = await apiTasks.post('/todos', taskData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// Обновление названия задачи
export const updateTodo = async (id, taskData, token) => {
  try {
    const response = await apiTasks.patch(`/todos/${id}`, taskData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// Функция для удаления задачи по ID
export const deleteTodo = async (id, token) => {
  try {
    const response = await apiTasks.delete(`/todos/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Функция для зачеркивания по свойству isCompleted
export const toggleTodoCompletion = async (id, token) => {
  try {
    const response = await apiTasks.patch(`/todos/${id}/isCompleted`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
