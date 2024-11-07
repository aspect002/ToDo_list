// src/Components/TaskTracking/LogOutButton/LogOutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOutContainer, LogOutLink } from "./styled";

const LogOutButton = () => {
    const navigate = useNavigate();

    return (
      <LogOutContainer>
        <LogOutLink onClick={() => navigate('/authorization')}>Log out</LogOutLink>
      </LogOutContainer>
    );
};

export default LogOutButton;
