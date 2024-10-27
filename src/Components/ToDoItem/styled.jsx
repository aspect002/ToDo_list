// ToDoItem.styled.js
import styled from 'styled-components';

export const ToDoItemStyled = styled.div`
  list-style-type: none; /* Убираем маркеры списка */
  margin: 5px 0; /* Отступы между элементами */
  background-color: #8C54FF; /* Фоновый цвет */
  border-radius: 4px; /* Закругленные углы */
  width: 400px; /* Фиксированная ширина */
  max-width: 100%; /* Ограничение максимальной ширины */
  white-space: nowrap; /* Запрет переноса строк */
  overflow: hidden; /* Обрезка длинного текста */
  text-overflow: ellipsis; /* Отображение троеточия для обрезанного текста */
  padding: 10px; /* Внутренние отступы */
  border: 5px solid red;
  color: white;

  display: flex; /* Включаем Flexbox */
  justify-content: space-between; /* Элементы начинаются с левого края */
  align-items: center; /* Центрируем по вертикали */
`;
