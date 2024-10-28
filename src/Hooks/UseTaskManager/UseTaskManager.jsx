// src/Hooks/UseTaskManager.js
import { useState } from "react";

const UseTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    const newTask = { id: Date.now(), text: task, isCompleted: false }; // Добавляем isCompleted
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleUpdateTask = (index, updatedTask) => {
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
