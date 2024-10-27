import { React, useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import AddTask from "../AddTask/AddTask";
import { ToDoListStyled,DoWorkText } from "./styled";

const ToDolist = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index)=>{
    const newTasks = tasks.filter((_,i)=> i !== index)
    setTasks(newTasks)
  }

  return (
    <ToDoListStyled>
      <DoWorkText>
        Get things done!
      </DoWorkText>
      <AddTask onAdd={handleAddTask} />
      {tasks.map((task, index) => (
        <ToDoItem
         key={index.id}
        task={task}
        onDelete={()=>handleDeleteTask(index)}
        />
      ))}
    </ToDoListStyled>
  );
};
export default ToDolist;
