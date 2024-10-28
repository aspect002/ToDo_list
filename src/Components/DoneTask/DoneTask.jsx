// src/Components/DoneTask/DoneTask.jsx
import React from 'react';
import { TaskText, CompletedTaskText, ButtonContainer } from './styled';
import ButtonEdit from "../../Utils/ButtonEdit/ButtonEdit";
import DeleteTask from "../DeleteTask/DeleteTask";

const DoneTask = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <div onClick={onToggle} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {task.isCompleted ? (
        <CompletedTaskText>{task.text}</CompletedTaskText>
      ) : (
        <TaskText>{task.text}</TaskText>
      )}
      <ButtonContainer>
        <ButtonEdit onClick={(e) => { e.stopPropagation(); onEdit(); }} />
        <DeleteTask onDelete={(e) => { e.stopPropagation(); onDelete(); }} />
      </ButtonContainer>
    </div>
  );
};

export default DoneTask;
