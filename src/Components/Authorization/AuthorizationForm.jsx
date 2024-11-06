import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ContainerAuthorizationForm, FieldContainer, Label, InputField,MessegeValidation,LogInButton,ContainerSignUpButton} from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../Utils/AuthorizationUtils/validationSchema"
import SignUpButton from "./SignUpButton/SignUpButton";
const AuthorizationForm = () => {
    const [serverError, setServerError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationSchema)});
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
        <ContainerAuthorizationForm onSubmit={handleSubmit(onSubmit)}>
            <FieldContainer>
                <Label htmlFor="email">Email</Label>
                <InputField
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="send.offer.here@gmail.com"
                />
                {errors.email && <MessegeValidation>{errors.email.message}</MessegeValidation>}
            </FieldContainer>

            <FieldContainer>
                <Label htmlFor="password">Password</Label>
                <InputField
                    {...register("password")}
                    placeholder="1Sq_22qw"
                />
                {errors.password && <MessegeValidation>{errors.password.message}</MessegeValidation>}
            </FieldContainer>

            <LogInButton type="submit">Log In</LogInButton>
        </ContainerAuthorizationForm>
        <ContainerSignUpButton>
        <SignUpButton/>
        </ContainerSignUpButton>
        </>
    );
}

export default AuthorizationForm;
