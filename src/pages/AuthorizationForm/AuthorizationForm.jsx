import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../Utils/AuthorizationUtils/validationSchema";
import SignUpButton from "../../Components/Authorization/SignUpButton/SignUpButton";
import { useNavigate } from "react-router-dom";
import { authorizationUserApi } from "../../api/auth.api";
import { tokenService } from "../../services/tokenService";
import {
  ContainerAuthorizationForm,
  FieldContainer,
  Label,
  InputField,
  MessegeValidation,
  LogInButton,
  ContainerSignUpButton,
} from "./styled";

const AuthorizationForm = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {
    try {
      const response = await authorizationUserApi.login(data);
      tokenService.setToken(response.token);
      console.log("Token: ", response.token);
      navigate("/tasks");
    } catch (error) {
      setServerError("Такого пользователя нет!");
      console.error(error.message);
    }
  };
  return (
    <>
      <ContainerAuthorizationForm onSubmit={handleSubmit(onSubmit)}>
        <FieldContainer>
          <Label htmlFor="email">Email</Label>
          <InputField
            id="email"
            type="email"
            {...register("email")}
            placeholder="send.offer.here@gmail.com"
          />
          {errors.email && (
            <MessegeValidation>{errors.email.message}</MessegeValidation>
          )}
        </FieldContainer>

        <FieldContainer>
          <Label htmlFor="password">Password</Label>
          <InputField {...register("password")} placeholder="1Sq_22qw" />
          {errors.password && (
            <MessegeValidation>{errors.password.message}</MessegeValidation>
          )}
          {serverError && <MessegeValidation>{serverError}</MessegeValidation>}
        </FieldContainer>

        <LogInButton type="submit">Log In</LogInButton>
      </ContainerAuthorizationForm>
      <ContainerSignUpButton>
        <SignUpButton />
      </ContainerSignUpButton>
    </>
  );
};

export default AuthorizationForm;
