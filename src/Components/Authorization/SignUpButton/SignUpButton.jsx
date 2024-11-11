import React from "react";
import { useNavigate } from "react-router-dom";
import { SignUpContainer, SignUpText, SignUpLink } from "./styled";

const SignUpButton = () => {
    const navigate = useNavigate();

    return (
      <SignUpContainer>
        <SignUpText>Don't have an account?</SignUpText>
        <SignUpLink onClick={() => navigate('/registration')}>Sign Up!</SignUpLink>
      </SignUpContainer>
    );
};

export default SignUpButton;
