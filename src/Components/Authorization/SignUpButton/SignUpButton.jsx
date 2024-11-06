import React from "react";
import { SignUpContainer, SignUpText, SignUpLink } from "./styled";

const SignUpButton = () => {
    return (
      <SignUpContainer>
        <SignUpText>Don`t have an account?</SignUpText>
        <SignUpLink>Sign Up!</SignUpLink>
      </SignUpContainer>
    );
  };

  export default SignUpButton;
