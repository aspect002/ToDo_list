import React, { useEffect, useState } from "react";
import ToDoItem from "../../Components/TaskTracking/ToDoItem/ToDoItem";
import AddTask from "../../Components/TaskTracking/AddTask/AddTask";
import { ToDoListStyled, DoWorkText, ContainerLogOutButton } from "./styled";
import UseTaskManager from "../../Hooks/TaskTrackingHooks/UseTaskManager/UseTaskManager";
import withLogger from "../../HOCs/loggingTaskTracking/withLogger";
import LogOutButton from "../../Components/TaskTracking/LogOutButton/LogOutButton";
import { getAllTasks } from '../../api/tasks.api'; // Импортируйте функцию
import DeleteTask from "../../Components/TaskTracking/DeleteTask/DeleteTask";


const ToDolist = () => {
  const [fetchedTasks, setFetchedTasks] = useState([]);

  // Определите функцию fetchTasks
  const fetchTasks = async () => {
    try {
      const data = await getAllTasks();
      console.log("getAllTasks список задач пользователя", data);
      setFetchedTasks(data || []);
    } catch (error) {
      console.error("Ошибка при получении задач:", error);
    }
  };

  const { handleAddTask, handleDeleteTask, handleUpdateTask } = UseTaskManager(setFetchedTasks);

  useEffect(() => {
    fetchTasks(); // Вызовите функцию при монтировании
  }, []);



  return (
    <>
      <ToDoListStyled>
        <DoWorkText>Get things done!</DoWorkText>
        <AddTask onAdd={handleAddTask} fetchTasks={fetchTasks} /> {/* Передаем fetchTasks */}
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
