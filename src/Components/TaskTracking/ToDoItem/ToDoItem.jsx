import React, { useState } from "react";
import { ToDoItemStyled } from "./styled";
import DoneTask from "../DoneTask/DoneTask";
import EditTask from "../EditTask/EditTask";

const ToDoItem = ({ task, onDelete, onUpdate, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ToDoItemStyled>
      {isEditing ? (
        <EditTask
          task={task}
          onUpdate={(updatedTask) => {
            onUpdate(updatedTask);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <DoneTask
          task={task}
          onToggle={() => onUpdate({ ...task, isCompleted: !task.isCompleted })}
          onEdit={() => setIsEditing(true)}
          fetchTasks={fetchTasks} // Передаем fetchTasks для обновления списка задач
        />
      )}
    </ToDoItemStyled>
  );
};

export default ToDoItem;
