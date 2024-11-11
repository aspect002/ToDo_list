import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOutContainer, LogOutLink } from "./styled";
import { tokenService } from "../../../services/tokenService";

const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = tokenService.getToken();
    if (token) {
      console.log(`Удаление токена: ${token}`);
    }

    tokenService.removeToken();

    localStorage.clear();
    console.log("LocalStorage очищен.");

    navigate("/authorization");
  };

  return (
    <LogOutContainer>
      <LogOutLink onClick={handleLogout}>Log out</LogOutLink>
    </LogOutContainer>
  );
};

export default LogOutButton;
