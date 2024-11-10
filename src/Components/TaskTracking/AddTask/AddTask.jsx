import React from "react";
import { useForm } from "react-hook-form";
import { createTodo } from '../../../api/tasks.api';
import { tokenService } from '../../../services/tokenService';
import {
  AddTaskContainer,
  InputAddTaskWrapper,
  InputAddTask,
  ButtonAddTask,
  ErrorMessage,
} from "./styled";



const AddTask = ({ onAdd,fetchTasks }) => {
  const {register,handleSubmit,formState: { errors },reset,} = useForm();

  const onSubmit = async (data) => {
    if (data.task.trim()) {
      const token = tokenService.getToken(); // Получите токен
      try {
        const newTask = await createTodo({ title: data.task }, token); // Создайте задачу
        console.log('createTodo Созданная задача:', newTask)
        onAdd(newTask);
        fetchTasks(); // Вызовите onAdd с новой задачей
        reset();
      } catch (error) {
        console.error('Ошибка при создании задачи:', error);
      }
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
