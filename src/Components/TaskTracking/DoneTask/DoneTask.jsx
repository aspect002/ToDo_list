import React from "react";
import { TaskText, CompletedTaskText, ButtonContainer, TaskContainer } from "./styled"; // Импортируйте новый компонент
import ButtonEdit from "../../../Utils/TaskTrackingUtils/ButtonEdit/ButtonEdit";
import DeleteTask from "../DeleteTask/DeleteTask";

const DoneTask = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <TaskContainer onClick={onToggle}>
      {task.isCompleted ? (
        <CompletedTaskText>{task.text}</CompletedTaskText>
      ) : (
        <TaskText>{task.text}</TaskText>
      )}
      <ButtonContainer>
        <ButtonEdit
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        />
        <DeleteTask
          onDelete={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        />
      </ButtonContainer>
    </TaskContainer>
  );
};

export default DoneTask;
