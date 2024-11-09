import axios from 'axios';
import { tokenService } from '../services/tokenService';
const API_BASE_URL = 'https://todo-redev.herokuapp.com/api';

const apiTasks = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

//------------------- Получение всех задач ---------------//
export const getAllTasks = async (isCompleted) => {
  try {
    const token = tokenService.getToken();
    if (!token) {
      throw new Error("Токен отсутствует. Необходимо выполнить вход.");
    }

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
    console.error('Ошибка получения задач:', error);
    throw error; // Пробрасываем ошибку для дальнейшей обработки
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
