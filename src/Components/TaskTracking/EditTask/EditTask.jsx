import React, { useState } from "react";
import {
  InputOutputContainer,
  InputField,
  StyledButtonUpdate,
  ErrorText,
  EditContainer,
} from "./styled";

const EditTask = ({ task, onUpdate, onCancel }) => {
  const [newTask, setNewTask] = useState(task);
  const [error, setError] = useState("");

  const handleUpdateClick = () => {
    if (!newTask.trim()) {
      setError("We don't do empty things! Fill in the field, slacker!");
      return;
    }
    setError("");
    onUpdate(newTask);
    onCancel();
  };

  return (
    <EditContainer>
      <InputOutputContainer>
        <InputField
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Edit task"
        />
        <StyledButtonUpdate onClick={handleUpdateClick}>
          Update
        </StyledButtonUpdate>
      </InputOutputContainer>
      {error && <ErrorText>{error}</ErrorText>}{" "}
    </EditContainer>
  );
};

export default EditTask;
