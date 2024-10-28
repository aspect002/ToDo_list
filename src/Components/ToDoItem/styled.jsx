// styled.jsx
import styled from 'styled-components';

export const ToDoItemStyled = styled.div`
  list-style-type: none;
  margin: 5px 0;
  background-color: #8C54FF;
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
  gap: 8px; /* Отступ между кнопками */
`;
export const TaskText = styled.span`
  flex-grow: 1; /* Позволяет тексту занимать доступное пространство */
`;
