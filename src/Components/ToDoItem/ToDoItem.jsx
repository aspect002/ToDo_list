import React from "react";
import { ToDoItemStyled } from "./styled";
import DeleteTask from "../DeleteTask/DeleteTask";

const ToDoItem = ({ task, onDelete,onToggleCompletion, isCompleted }) => {
  return (
    <ToDoItemStyled>
      <span>{task}</span>
      <DeleteTask onDelete={onDelete} />
    </ToDoItemStyled>
  );
};
export default ToDoItem;
