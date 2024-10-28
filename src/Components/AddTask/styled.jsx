import styled from "styled-components";

export const AddTaskContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  max-width: 100%;
  margin: 15px;
`;

export const InputAddTaskWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
`;

export const InputAddTask = styled.input`
  width: 100%;
  max-width: 100%;
  color: white;
  padding: 10px;
  background-color: #053865e8;
  outline: none;
  border: 1px solid #053865e8;
  box-sizing: border-box;

  &:focus {
    border-color: #8c54ff;
  }
`;

export const ButtonAddTask = styled.button`
  width: 100px;
  max-width: 100%;
  height: 100%;
  background-color: #8c54ff;
  color: #ffffff;
  padding: 11px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a4bc3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;
