import styled from "styled-components";

export const ContainerAuthorizationForm = styled.form`
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
  margin: 10px 0;
  width: 100%;
  display: flex;
  color: white;
  margin: 12px;
  flex-direction: column;
  align-items: center;
`;

// Стили для метки
export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  text-align: center;
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
  margin-top: 10px;
  width: 100%;
`;
export const LogInButton = styled.button`
  background-color: #8c54ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7a4bcf;
  }
`;
export const ContainerSignUpButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
