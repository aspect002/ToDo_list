// src/api/tasks.api.js
import axiosInstance from './axiosInstance';
import { tokenService } from '../services/tokenService';

// Получение всех задач
export const getAllTasks = async (isCompleted) => {
  try {
    const token = tokenService.getToken();
    const params = {};
    if (isCompleted !== undefined) {
      params.isCompleted = isCompleted;
    }
    const response = await axiosInstance.get('/todos', {
      headers: {
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

// Создание новой задачи
export const createTodo = async (taskData, token) => {
  try {
    const response = await axiosInstance.post('/todos', taskData, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Обновление названия существующей задачи
export const updateTodo = async (taskId, taskData, token) => {
  try {
    const response = await axiosInstance.patch(`/todos/${taskId}`, taskData, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Удаление задачи
export const deleteTodo = async (taskId, token) => {
  try {
    const response = await axiosInstance.delete(`/todos/${taskId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Переключение на зачеркивание
export const toggleTodoCompletion = async (taskId, token) => {
  try {
    const response = await axiosInstance.patch(`/todos/${taskId}/isCompleted`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
