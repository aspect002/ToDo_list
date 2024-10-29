import React from "react";
import { useForm } from "react-hook-form";
import {
  AddTaskContainer,
  InputAddTaskWrapper,
  InputAddTask,
  ButtonAddTask,
  ErrorMessage,
} from "./styled";

const AddTask = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data.task.trim()) {
      onAdd(data.task);
      reset();
    }
  };

  return (
    <AddTaskContainer onSubmit={handleSubmit(onSubmit)}>
      <InputAddTaskWrapper>
        <InputAddTask
          placeholder="What is the task today?"
          {...register("task", {
            required: "Error, input field is empty, enter a task",
            validate: (value) =>
              value.trim() !== "" ||
              "Error, input field is empty, enter a task",
          })}
        />
        <ButtonAddTask type="submit">Add task</ButtonAddTask>
      </InputAddTaskWrapper>
      {errors.task && <ErrorMessage>{errors.task.message}</ErrorMessage>}
    </AddTaskContainer>
  );
};

export default AddTask;
