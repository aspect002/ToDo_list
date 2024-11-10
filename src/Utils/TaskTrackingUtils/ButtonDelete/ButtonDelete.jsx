import * as React from "react";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledButtonDelete } from "./styled";
import { deleteTodo } from '../../../api/tasks.api'; // Импортируйте функцию
import { tokenService } from '../../../services/tokenService';

export default function ButtonDelete({ taskId, onDelete }) {
  const handleDelete = async () => {
    const token = tokenService.getToken(); // Получите токен
    try {
      const deletedTask = await deleteTodo(taskId, token); // Удалите задачу
      console.log(`Задача удалена:`, deletedTask); // Логируем удаленную задачу
      onDelete(taskId); // Обновите состояние в родительском компоненте
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Ошибка: Для работы нужен токен!'); // Обработка 401 ошибки
      } else {
        console.error('Ошибка при удалении задачи:', error);
      }
    }
  };

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <StyledButtonDelete
        aria-label="delete"
        size="small"
        onClick={handleDelete} // Используем handleDelete
        sx={{ color: "white" }}
      >
        <DeleteIcon fontSize="inherit" />
      </StyledButtonDelete>
    </Stack>
  );
}
