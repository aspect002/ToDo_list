import React from "react";
import { TaskText, CompletedTaskText, ButtonContainer, TaskContainer } from "./styled";
import ButtonEdit from "../../../Utils/TaskTrackingUtils/ButtonEdit/ButtonEdit";
import DeleteTask from "../DeleteTask/DeleteTask"; // Импортируйте компонент удаления

const DoneTask = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <TaskContainer onClick={onToggle}>
      {task.isCompleted ? (
        <CompletedTaskText>{task.title}</CompletedTaskText>
      ) : (
        <TaskText>{task.title}</TaskText>
      )}
      <ButtonContainer>
        <ButtonEdit
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        />
        <DeleteTask taskId={task.id} onDelete={onDelete} /> {/* Передаем onDelete */}
      </ButtonContainer>
    </TaskContainer>
  );
};

export default DoneTask;
