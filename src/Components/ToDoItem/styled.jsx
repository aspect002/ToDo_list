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
