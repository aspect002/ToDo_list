import axiosTasksInstance from './axiosTasksInstance';

export const getAllTasks = async (isCompleted) => {
  try {
    const params = {};
    if (isCompleted !== undefined) {
      params.isCompleted = isCompleted;
    }
    const response = await axiosTasksInstance.get('/todos', { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTodo = async (taskData) => {
  try {
    const response = await axiosTasksInstance.post('/todos', taskData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Обновление названия существующей задачи
export const updateTodo = async (taskId, taskData) => {
  try {
    const response = await axiosTasksInstance.patch(`/todos/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Удаление задачи
export const deleteTodo = async (taskId) => {
  try {
    const response = await axiosTasksInstance.delete(`/todos/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Переключение на зачеркивание
export const toggleTodoCompletion = async (taskId) => {
  try {
    const response = await axiosTasksInstance.patch(`/todos/${taskId}/isCompleted`, {});
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
