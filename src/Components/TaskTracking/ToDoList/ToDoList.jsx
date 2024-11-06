import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import AddTask from "../AddTask/AddTask";
import { ToDoListStyled, DoWorkText,ContainerLogOutButton} from "./styled";
import UseTaskManager from "../../../Hooks/TaskTrackingHooks/UseTaskManager/UseTaskManager";
import withLogger from "../../../HOCs/loggingTaskTracking/withLogger";
import LogOutButton from "../LogOutButton/LogOutButton";

const ToDolist = () => {
  const { tasks, handleAddTask, handleDeleteTask, handleUpdateTask } =
    UseTaskManager();

  return (
    <>
    <ToDoListStyled>
      <DoWorkText>Get things done!</DoWorkText>
      <AddTask onAdd={handleAddTask} />
      {tasks.map((task, index) => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={() => handleDeleteTask(index)}
          onUpdate={(updatedTask) => handleUpdateTask(index, updatedTask)}
        />
      ))}
    </ToDoListStyled>
    <ContainerLogOutButton>
      <LogOutButton>Log out</LogOutButton>
      </ContainerLogOutButton>
    </>
  );
};

export default withLogger(ToDolist);
