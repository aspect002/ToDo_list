// DoneTask.jsx
import React from "react";

const DoneTask = ({ isCompleted, onToggle }) => {
  return (
    <span
      onClick={onToggle}
      style={{ textDecoration: isCompleted ? 'line-through' : 'none', cursor: 'pointer' }}
    >
      {/* Вы можете добавить дополнительные стили или элементы здесь */}
    </span>
  );
};

export default DoneTask;
