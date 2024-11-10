import React from "react";
import { TaskText, CompletedTaskText, ButtonContainer, TaskContainer } from "./styled";
import ButtonEdit from "../../../Utils/TaskTrackingUtils/ButtonEdit/ButtonEdit";
import DeleteTask from "../DeleteTask/DeleteTask";
import ButtonDelete from "../../../Utils/TaskTrackingUtils/ButtonDelete/ButtonDelete"; // Импортируйте компонент удаления
import { toggleTodoCompletion } from '../../../api/tasks.api'; // Импортируйте функцию
import { tokenService } from '../../../services/tokenService';
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
        <ButtonDelete taskId={task.id} onDelete={onDelete} />
      </ButtonContainer>
    </TaskContainer>
  );
};
export default DoneTask;
