import styled from "styled-components";

export const ContainerRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: #053865e8;
    border-radius: 10px;
    width: 400px;
    margin: auto;
    
`;

export const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 10px;
`;

export const NameField = styled.label`
    color: white;
    flex: 1;
    margin-right: 10px;
    font-size: 18px;
`;

export const InputField = styled.input`
    flex: 3;
    margin: 0;
    width: 100%;
    padding: 8px;
    font-size: 14px;
    color: white;
    background-color: #053865e8;
    border: 2px solid transparent;
    transition: border-color 0.3s;

    &:focus {
        border-color: #8c54ff;
        outline: none;
    }
`;

export const MessegeValidation = styled.span`
    color: red;
    text-align: center;
    font-size: 15px;
    margin-bottom: 10px;
    width: 100%;
`;

export const ButtonGender = styled.button`
    background-color: #053865e8;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &.error {
        background-color: red;
    }
    &:hover {
        background-color: #8c54ff;
    }
    input[type="radio"] {
        display: none;
    }
    input[type="radio"]:checked + & {
        background-color: #8c54ff;
    }
`;
export const HiddenRadioGender = styled.input.attrs({ type: 'radio' })`
    display: none;
`;

export const ButtonRegistration = styled.button`
    background-color: #8c54ff;
    color: white;
    padding: 10px 20px; /* Добавьте отступы для удобства */
    border: none;
    border-radius: 5px; /* Закругление углов */
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #7a4bcf;
    }
`;
export const ContainerLoginButton = styled.div`
display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
