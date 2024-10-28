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

  display: flex;
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

export const InputField = styled.input`
  flex-grow: 1; /* Занимает всё доступное пространство */
  padding: 10px; /* Отступ внутри поля */
  margin-right: 8px; /* Отступ между полем и кнопкой */
  border: 1px solid #ccc; /* Стилизация границы */
  border-radius: 4px; /* Скругление углов */
  font-size: 16px; /* Размер шрифта */
`;

export const StyledButtonUpdate = styled.button`
  padding: 10px 15px; /* Отступ внутри кнопки */
  background-color: #0be712; /* Цвет фона кнопки */
  color: white; /* Цвет текста */
  border: none; /* Убираем границу */
  border-radius: 4px; /* Скругление углов */
  cursor: pointer; /* Указатель при наведении */
  height: 100%; /* Занимает всю высоту родительского контейнера */

  &:hover {
    background-color:  #06f050; /* Цвет фона при наведении */
  }
`;
export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%; /* Занимает всю ширину родительского элемента */
`;
