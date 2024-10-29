import React, { useState } from "react";
import { ToDoItemStyled } from "./styled";
import DoneTask from "../DoneTask/DoneTask";
import EditTask from "../EditTask/EditTask";

const ToDoItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ToDoItemStyled>
      {isEditing ? (
        <EditTask
          task={task.text}
          onUpdate={(updatedText) => {
            onUpdate({ ...task, text: updatedText });
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <DoneTask
          task={task}
          onToggle={() => onUpdate({ ...task, isCompleted: !task.isCompleted })}
          onEdit={() => setIsEditing(true)}
          onDelete={onDelete}
        />
      )}
    </ToDoItemStyled>
  );
};

export default ToDoItem;
