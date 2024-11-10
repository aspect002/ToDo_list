import React from "react";
import { TaskText, CompletedTaskText, ButtonContainer, TaskContainer } from "./styled";
import ButtonEdit from "../../../Utils/TaskTrackingUtils/ButtonEdit/ButtonEdit";
import DeleteTask from "../DeleteTask/DeleteTask"; // Импортируйте компонент удаления

const DoneTask = ({ task, onToggle, onEdit, fetchTasks }) => {
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
        <DeleteTask taskId={task.id} fetchTasks={fetchTasks} /> {/* Передаем taskId и fetchTasks */}
      </ButtonContainer>
    </TaskContainer>
  );
};

export default DoneTask;
