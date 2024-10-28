// src/Components/ToDoItem/ToDoItem.jsx
import React, { useState } from "react";
import { ToDoItemStyled } from "./styled";
import DoneTask from "../DoneTask/DoneTask"; // Импортируем новый компонент
import EditTask from "../EditTask/EditTask";

const ToDoItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ToDoItemStyled>
      {isEditing ? (
        <EditTask
          task={task.text}
          onUpdate={(updatedText) => {
            onUpdate({ ...task, text: updatedText }); // Обновляем текст задачи
            setIsEditing(false); // Выходим из режима редактирования
          }}
        />
      ) : (
        <DoneTask
          task={task}
          onToggle={() => onUpdate({ ...task, isCompleted: !task.isCompleted })} // Переключаем завершенность
          onEdit={() => setIsEditing(true)} // Включаем режим редактирования
          onDelete={onDelete} // Удаляем задачу
        />
      )}
    </ToDoItemStyled>
  );
};

export default ToDoItem;
