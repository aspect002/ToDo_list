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
      params.isCompleted = isCompleted; // Добавляем фильтр, если он передан
    }
    const response = await apiTasks.get('/todos', {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}` // Убедитесь, что токен установлен
      },
      params,
    });
    return response.data; // Возвращаем массив задач
  } catch (error) {
    console.error("Для работы нужен токен!", error);
  }
};

//------------------- Создание новой задачи ---------------//
export const createTodo = async (taskData, token) => {
  try {
    const response = await apiTasks.post('/todos', taskData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Возвращаем данные о созданной задаче
  } catch (error) {
    console.error('Ошибка создания задачи:', error);
    throw error; // Пробрасываем ошибку для дальнейшей обработки
  }
};
// Обновление названия задачи
export const updateTodo = async (id, taskData, token) => {
  try {
    const response = await apiTasks.patch(`/todos/${id}`, taskData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Возвращаем обновленные данные задачи
  } catch (error) {
    console.error('Ошибка обновления задачи:', error);
    throw error; // Пробрасываем ошибку для дальнейшей обработки
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

// Функция для обновления свойства isCompleted задачи по ID
export const toggleTodoCompletion = async (id, token) => {
  try {
    const response = await apiTasks.patch(`/todos/${id}/isCompleted`, {}, { // Измените null на пустой объект
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Возвращаем обновленные данные задачи
  } catch (error) {
    console.error('Ошибка обновления состояния задачи:', error);
    throw error; // Пробрасываем ошибку для дальнейшей обработки
  }
};
