import React, { useState } from "react";
import { updateTodo } from '../../../api/tasks.api';
import { tokenService } from '../../../services/tokenService';
import {
  InputOutputContainer,
  InputField,
  StyledButtonUpdate,
  ErrorText,
  EditContainer,
} from "./styled";


const EditTask = ({ task, onUpdate, onCancel }) => {
  const [newTask, setNewTask] = useState(task.title);
  const [error, setError] = useState("");

  const handleUpdateClick = async () => {
    if (!newTask.trim()) {
      setError("do things, fill out the field!");
      return;
    }
    setError("");

    if (newTask.trim() === task.title) {
      console.log(`Название задачи не изменилось, обновление не требуется.`);
      onCancel();
      return; 
    }

    const token = tokenService.getToken();
    try {
      console.log(`UpdateTodo Обновление задачи с ID: ${task.id} на новое название: "${newTask}"`);
      const updatedTask = await updateTodo(task.id, { title: newTask }, token);
      onUpdate(updatedTask);
      onCancel();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <EditContainer>
      <InputOutputContainer>
        <InputField
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="edit task"
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
