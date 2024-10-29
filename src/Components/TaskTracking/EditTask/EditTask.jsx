import React, { useState } from "react";
import { StyledButtonUpdate, InputField, EditContainer } from "./styled";

const EditTask = ({ task, onUpdate, onCancel }) => {
  const [newTask, setNewTask] = useState(task);

  const handleUpdateClick = () => {
    onUpdate(newTask);
    onCancel();
  };

  return (
    <EditContainer>
      <InputField
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Edit task"
      />
      <StyledButtonUpdate onClick={handleUpdateClick}>
        Update
      </StyledButtonUpdate>
    </EditContainer>
  );
};

export default EditTask;
