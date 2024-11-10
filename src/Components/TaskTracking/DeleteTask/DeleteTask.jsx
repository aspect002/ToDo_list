import React from "react";
import ButtonDelete from "../../../Utils/TaskTrackingUtils/ButtonDelete/ButtonDelete";
import { deleteTodo } from '../../../api/tasks.api'; // Импортируйте функцию
import { tokenService } from '../../../services/tokenService';


const DeleteTask = ({ taskId,fetchTasks}) => {
  const handleDelete = async () => {
    const token = tokenService.getToken(); // Получите токен
    try {
      const deletedTask = await deleteTodo(taskId, token); // Удалите задачу
      console.log(`Задача удалена:`, deletedTask); // Логируем удаленную задачу
      handleDeleteTask(taskId); // Удаляем задачу из локального состояния через UseTaskManage// Обновите состояние в родительском компоненте
      fetchTasks(); // Обновите состояние в родительском компоненте
      console.log("getAllTasks список задач пользователя", fetchTasks());
    }
    catch (error) {
      console.log(error.message)
    }
  };

  return (
    <ButtonDelete onClick={handleDelete} />

  );
};

export default DeleteTask;
