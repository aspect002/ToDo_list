import React from 'react';
import { Route, Routes,} from 'react-router-dom';
import ToDoList from '../pages/TasksList/ToDoList';
import RegistrationForm from '../pages/RegistrationForm/RegistrationForm';
import AuthorizationForm from '../pages/AuthorizationForm/AuthorizationForm';


const ToDoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RegistrationForm /> } />
      <Route path="/tasks" element={<ToDoList />} />
      <Route path="/authorization" element={<AuthorizationForm />} />
    </Routes>
  );
};

export default ToDoRoutes;
