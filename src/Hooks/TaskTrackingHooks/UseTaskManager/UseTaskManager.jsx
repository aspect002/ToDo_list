import { useCallback } from 'react';

const UseTaskManager = (setFetchedTasks) => {
  const handleAddTask = useCallback((newTask) => {
    setFetchedTasks((prevTasks) => [...prevTasks, newTask]);
  }, [setFetchedTasks]);

  const handleDeleteTask = useCallback((id) => {
    setFetchedTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  }, [setFetchedTasks]);

  const handleUpdateTask = useCallback((updatedTask) => {
    setFetchedTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }, [setFetchedTasks]);

  return {
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
  };
};
export default UseTaskManager
