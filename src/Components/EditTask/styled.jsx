import styled from "styled-components";

export const ToDoItemStyled = styled.div`
  list-style-type: none;
  margin: 5px 0;
  background-color: #8c54ff;
  border-radius: 4px;
  width: 400px;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const TaskText = styled.span`
  flex-grow: 1;
`;

export const InputField = styled.input`
  flex-grow: 1;
  padding: 10px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledButtonUpdate = styled.button`
  padding: 10px 15px;
  background-color: #0be712;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 100%;

  &:hover {
    background-color: #06f050;
  }
`;
export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
