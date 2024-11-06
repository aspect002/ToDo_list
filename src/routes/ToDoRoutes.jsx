import React from 'react';
import { Route, Routes,} from 'react-router-dom';
import ToDoList from '../Components/TaskTracking/ToDoList/ToDoList';
import RegistrationForm from '../Components/Registration/RegistrationForm/RegistrationForm';
import AuthorizationForm from '../Components/Authorization/authorizationForm';


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
