import React from "react";
import { LoginButtonContainer, LoginText, LoginLink } from "./styled";

const LoginInButton = () => {
    return (
      <LoginButtonContainer>
        <LoginText>Already have an account?</LoginText>
        <LoginLink>Log in</LoginLink>
      </LoginButtonContainer>
    );
  };

  export default LoginInButton;
