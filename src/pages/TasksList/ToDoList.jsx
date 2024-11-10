import React, { useEffect, useState } from "react";
import ToDoItem from "../../Components/TaskTracking/ToDoItem/ToDoItem";
import AddTask from "../../Components/TaskTracking/AddTask/AddTask";
import { ToDoListStyled, DoWorkText, ContainerLogOutButton } from "./styled";
import UseTaskManager from "../../Hooks/TaskTrackingHooks/UseTaskManager/UseTaskManager";
import withLogger from "../../HOCs/loggingTaskTracking/withLogger";
import LogOutButton from "../../Components/TaskTracking/LogOutButton/LogOutButton";
import { getAllTasks } from '../../api/tasks.api';


const ToDolist = () => {
  const [fetchedTasks, setFetchedTasks] = useState([]);
  const [taskChanged, setTaskChanged] = useState(false);
  const fetchTasks = async () => {
    try {
      const data = await getAllTasks();
      console.log("getAllTasks список задач пользователя", data);
      setFetchedTasks(data || []);
    } catch (error) {
      console.error( error.response.data.message);
    }
  };

  const { handleAddTask, handleDeleteTask, handleUpdateTask } = UseTaskManager(setFetchedTasks);

  useEffect(() => {
    fetchTasks();
  }, [taskChanged]);

  const handleAddTaskWithFetch = (newTask) => {
    handleAddTask(newTask);
    setTaskChanged(prev => !prev); 
  };

  return (
    <>
      <ToDoListStyled>
        <DoWorkText>Get things done!</DoWorkText>
        <AddTask onAdd={handleAddTaskWithFetch} />{/* Передаем fetchTasks */}
        {fetchedTasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
            fetchTasks={fetchTasks}
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
