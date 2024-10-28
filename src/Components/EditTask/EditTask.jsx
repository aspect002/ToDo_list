// EditTask.jsx
import React, { useState } from "react";
import { StyledButtonUpdate, InputField,EditContainer  } from "./styled"; // Импортируем стили

const EditTask = ({ task, onUpdate, onCancel }) => {
  const [newTask, setNewTask] = useState(task);

  const handleUpdateClick = () => {
    onUpdate(newTask); // Обновляем задачу
    onCancel(); // Убираем режим редактирования
  };

  return (
    <EditContainer >
      <InputField
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Edit task"
      />
      <StyledButtonUpdate onClick={handleUpdateClick}>
        Update
      </StyledButtonUpdate>
    </EditContainer >
  );
};

export default EditTask;
