// src/routes/ToDoRoutes.jsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ToDoList from '../pages/TasksList/ToDoList';
import RegistrationForm from '../pages/RegistrationForm/RegistrationForm';
import AuthorizationForm from '../pages/AuthorizationForm/AuthorizationForm';

const ToDoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/authorization" />} />
      <Route path="/authorization" element={<AuthorizationForm />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/tasks" element={<ToDoList />} />
    </Routes>
  );
};

export default ToDoRoutes;
