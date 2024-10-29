import React from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    const logAction = (action, details) => {
      console.log(`Action: ${action}`, details);
    };

    const handleAddTask = (task) => {
      logAction("Add Task", task);
      props.onAdd(task);
    };

    const handleUpdateTask = (updatedTask) => {
      logAction("Update Task", updatedTask);
      props.onUpdate(updatedTask);
    };

    const handleDeleteTask = (task) => {
      logAction("Delete Task", task);
      props.onDelete(task);
    };

    return (
      <WrappedComponent
        {...props}
        onAdd={handleAddTask}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
      />
    );
  };
};

export default withLogger;
