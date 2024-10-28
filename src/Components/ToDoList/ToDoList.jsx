import  React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import AddTask from "../AddTask/AddTask";
import { ToDoListStyled,DoWorkText } from "./styled";
import UseTaskManager from "../../Hooks/UseTaskManager/UseTaskManager";


const ToDolist = () => {
  const { tasks, handleAddTask, handleDeleteTask,handleUpdateTask } = UseTaskManager();

  return (
    <ToDoListStyled>
      <DoWorkText>Get things done!</DoWorkText>
      <AddTask onAdd={handleAddTask} />
      {tasks.map((task, index) => (
        <ToDoItem
          key={index.id}
          task={task}
          onDelete={() => handleDeleteTask(index)}
          onUpdate={(updatedTask) => handleUpdateTask(index, updatedTask)}
        />
      ))}
    </ToDoListStyled>
  );
};

export default ToDolist;
