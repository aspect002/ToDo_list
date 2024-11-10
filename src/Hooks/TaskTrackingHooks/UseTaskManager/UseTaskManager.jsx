const UseTaskManager = (setFetchedTasks) => {
  const handleAddTask = (newTask) => {
    setFetchedTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setFetchedTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const handleUpdateTask = (updatedTask) => {
    setFetchedTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return {
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
  };
};
export default UseTaskManager
