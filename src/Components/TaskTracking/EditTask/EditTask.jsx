import React, { useState } from "react";
import { updateTodo } from '../../../api/tasks.api'; // Импортируйте функцию
import { tokenService } from '../../../services/tokenService';
import {
  InputOutputContainer,
  InputField,
  StyledButtonUpdate,
  ErrorText,
  EditContainer,
} from "./styled";

const EditTask = ({ task, onUpdate, onCancel }) => {
  // Проверка на наличие task
  if (!task) {
    return <div>Задача не найдена.</div>; // Или любое другое сообщение об ошибке
  }

  const [newTask, setNewTask] = useState(task.title); // Используйте task.title
  const [error, setError] = useState("");

  const handleUpdateClick = async () => {
    if (!newTask.trim()) {
      setError("Мы не делаем пустые вещи! Заполните поле, ленивец!");
      return;
    }
    setError("");

    const token = tokenService.getToken(); // Получите токен
    try {
      console.log(`UpdateTodo Обновление задачи с ID: ${task.id} на новое название: "${newTask}"`);
      const updatedTask = await updateTodo(task.id, { title: newTask }, token); // Обновите задачу
      onUpdate(updatedTask); // Передайте обновленную задачу в родительский компонент
      onCancel(); // Закройте режим редактирования
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Ошибка: Для работы нужен токен!'); // Обработка 401 ошибки
      } else {
        console.error('Ошибка при обновлении задачи:', error);
      }
    }
  };

  return (
    <EditContainer>
      <InputOutputContainer>
        <InputField
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Редактировать задачу"
        />
        <StyledButtonUpdate onClick={handleUpdateClick}>
          UpDate
        </StyledButtonUpdate>
      </InputOutputContainer>
      {error && <ErrorText>{error}</ErrorText>}{" "}
    </EditContainer>
  );
};

export default EditTask;
