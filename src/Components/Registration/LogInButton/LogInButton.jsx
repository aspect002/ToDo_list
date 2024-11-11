import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginButtonContainer, LoginText, LoginLink } from "./styled";

const LoginInButton = () => {
  const navigate = useNavigate();

  return (
    <LoginButtonContainer>
      <LoginText>Already have an account?</LoginText>
      <LoginLink onClick={() => navigate("/authorization")}>Log in</LoginLink>
    </LoginButtonContainer>
  );
};

export default LoginInButton;
