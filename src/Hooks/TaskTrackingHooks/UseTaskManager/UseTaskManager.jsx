import { useState } from "react";

const UseTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    console.log("Adding task:", task);
    const newTask = { id: Date.now(), text: task, isCompleted: false };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    console.log("Deleting task at index:", index);
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleUpdateTask = (index, updatedTask) => {
    console.log("Updating task at index:", index, "to:", updatedTask);
    const newTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(newTasks);
  };

  return {
    tasks,
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
  };
};

export default UseTaskManager;
