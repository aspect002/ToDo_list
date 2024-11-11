import React from "react";
import {
  TaskText,
  CompletedTaskText,
  ButtonContainer,
  TaskContainer,
} from "./styled";
import ButtonEdit from "../../../Utils/TaskTrackingUtils/ButtonEdit/ButtonEdit";
import DeleteTask from "../DeleteTask/DeleteTask";
import { toggleTodoCompletion } from "../../../api/tasks.api";
import { tokenService } from "../../../services/tokenService";

const DoneTask = ({ task, onToggle, onEdit, onDelete }) => {
  const handleToggleCompletion = async () => {
    const token = tokenService.getToken();
    try {
      const updatedTask = await toggleTodoCompletion(task.id, token);
      onToggle(updatedTask);
      console.log(`Задача обновлена:`, updatedTask);
    } catch (error) {
      console.error("Ошибка при переключении завершенности задачи:", error);
    }
  };

  return (
    <TaskContainer onClick={handleToggleCompletion}>
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
        <DeleteTask taskId={task.id} onDelete={onDelete} />{" "}
      </ButtonContainer>
    </TaskContainer>
  );
};

export default DoneTask;
