import React, { useEffect, useState } from "react";
import ToDoItem from "../../Components/TaskTracking/ToDoItem/ToDoItem";
import AddTask from "../../Components/TaskTracking/AddTask/AddTask";
import { ToDoListStyled, DoWorkText, ContainerLogOutButton } from "./styled";
import UseTaskManager from "../../Hooks/TaskTrackingHooks/UseTaskManager/UseTaskManager";
import withLogger from "../../HOCs/loggingTaskTracking/withLogger";
import LogOutButton from "../../Components/TaskTracking/LogOutButton/LogOutButton";
import { getAllTasks } from '../../api/authWithTasks.api';
;;
const ToDolist = () => {
  const [fetchedTasks, setFetchedTasks] = useState([]);
;;;
  const fetchTasks = async () => {
    console.log('Fetching tasks...');
    try {
        const data = await getAllTasks();
        console.log('Tasks fetched:', data);
        setFetchedTasks(data || []);
    } catch (error) {
        console.error(error.response ? error.response.data.message : error.message);
    }
};

  const { handleDeleteTask, handleUpdateTask, handleAddTask } = UseTaskManager(setFetchedTasks);

  useEffect(() => {
    console.log('Компонент монтируется, вызываем getAllTasks');
    fetchTasks();
  }, []);

  return (
    <>
      <ToDoListStyled>
        <DoWorkText>Get things done!</DoWorkText>
        <AddTask onAdd={handleAddTask} />
        {fetchedTasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
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
