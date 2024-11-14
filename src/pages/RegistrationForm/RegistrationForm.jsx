import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../Utils/RegistrationUtils/validationSchema/validationSchema";
import { registrationUserApi } from "../../api/authWithTasks.api";
import {
  ContainerRegisterForm,
  FieldContainer,
  NameField,
  InputField,
  MessegeValidation,
  ButtonGender,
  HiddenRadioGender,
  ButtonRegistration,
  ContainerLoginButton,
} from "./styled";
import LoginInButton from "../../Components/Registration/LogInButton/LogInButton";

const RegistrationForm = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await registrationUserApi.register(data);
      console.log("Зарегистрированный пользователь:", response.data);
      navigate("/authorization");
    } catch (error) {
      setServerError(
        "Ошибка при регистрации, введенныe username и email уже используются"
      );
      console.error(error.response.data.message);
    }
  };

  const renderError = (fieldName) => {
    return errors[fieldName] ? (
      <MessegeValidation>{errors[fieldName].message}</MessegeValidation>
    ) : null;
  };

  return (
    <>
      <ContainerRegisterForm onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <FieldContainer>
          <NameField>user name</NameField>
          <InputField {...register("username")} placeholder="Stas23" />
        </FieldContainer>
        {renderError("username")}

        {/* Email */}
        <FieldContainer>
          <NameField>email</NameField>
          <InputField
            {...register("email")}
            placeholder="send.offer.here@gmail.com"
          />
        </FieldContainer>
        {renderError("email")}

        {/* Password */}
        <FieldContainer>
          <NameField>password</NameField>
          <InputField
            {...register("password")}
            placeholder="1Sq_22qw"
            type="password"
          />
        </FieldContainer>
        {renderError("password")}

        {/* Gender */}

        <FieldContainer>
          <NameField>gender</NameField>
          <>
            <HiddenRadioGender value="male" {...register("gender")} id="male" />
            <ButtonGender
              className={errors.gender ? "error" : ""}
              onClick={() => document.getElementById("male").click()}
            >
              Male
            </ButtonGender>

            <HiddenRadioGender
              value="female"
              {...register("gender")}
              id="female"
            />
            <ButtonGender
              className={errors.gender ? "error" : ""}
              onClick={() => document.getElementById("female").click()}
            >
              Female
            </ButtonGender>
          </>
        </FieldContainer>
        {renderError("gender")}

        {/* Age */}
        <FieldContainer>
          <NameField>age</NameField>
          <InputField {...register("age")} placeholder="27" type="number" />
        </FieldContainer>
        {renderError("age")}

        {serverError && <MessegeValidation>{serverError}</MessegeValidation>}

        <ButtonRegistration type="submit">Register</ButtonRegistration>
      </ContainerRegisterForm>

      <ContainerLoginButton>
        <LoginInButton />
      </ContainerLoginButton>
    </>
  );
};

export default RegistrationForm;
