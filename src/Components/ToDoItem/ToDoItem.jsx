
import React, { useState } from "react";
import { ToDoItemStyled,ButtonContainer,TaskText } from "./styled";
import DeleteTask from "../DeleteTask/DeleteTask";
import ButtonEdit from "../../Utils/ButtonEdit/ButtonEdit";
import EditTask from "../EditTask/EditTask";


const ToDoItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <ToDoItemStyled>
      {isEditing ? (
        <EditTask
          task={task}
          onUpdate={(updatedTask) => {
            onUpdate(updatedTask); // Обновляем задачу
            setIsEditing(false); // Выходим из режима редактирования
          }}
        />
      ) : (
        <>
          <TaskText>{task}</TaskText> {/* Используем стилизованный компонент для текста */}
          <ButtonContainer> {/* Используем новый контейнер для кнопок */}
            <ButtonEdit onClick={handleEditClick} /> {/* Кнопка редактирования */}
            <DeleteTask onDelete={onDelete} /> {/* Кнопка удаления */}
          </ButtonContainer>
        </>
      )}
    </ToDoItemStyled>
  );
};

export default ToDoItem;
