import React from "react";
import ButtonDelete from "../../../Utils/TaskTrackingUtils/ButtonDelete/ButtonDelete";
import { deleteTodo } from "../../../api/tasks.api";
import { tokenService } from "../../../services/tokenService";

const DeleteTask = ({ taskId, onDelete }) => {
  const handleDelete = async () => {
    const token = tokenService.getToken();
    try {
      const deletedTask = await deleteTodo(taskId, token);
      console.log(`Задача удалена:`, deletedTask);
      onDelete(taskId);
    } catch (error) {
      console.error(error);
    }
  };

  return <ButtonDelete onClick={handleDelete} />;
};

export default DeleteTask;
