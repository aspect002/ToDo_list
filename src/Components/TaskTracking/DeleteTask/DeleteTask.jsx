import React from "react";
import ButtonDelete from "../../../Utils/TaskTrackingUtils/ButtonDelete/ButtonDelete";
import { deleteTodo } from '../../../api/tasks.api'; // Импортируйте функцию
import { tokenService } from '../../../services/tokenService';

const DeleteTask = ({ taskId, onDelete }) => {
  const handleDelete = async () => {
    const token = tokenService.getToken(); // Получите токен
    try {
      const deletedTask = await deleteTodo(taskId, token); // Удалите задачу
      console.log(`Задача удалена:`, deletedTask); // Логируем удаленную задачу
      onDelete(taskId); // Передаем taskId для удаления из списка
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };

  return (
    <ButtonDelete onClick={handleDelete} /> // Передаем handleDelete в ButtonDelete
  );
};

export default DeleteTask;
