import styled from 'styled-components';

export const TaskText = styled.span`
  // Ваши стили для обычного текста
`;

export const CompletedTaskText = styled.span`
  text-decoration: line-through; // Зачеркивание текста
  color: #120f0f; // Цвет для завершенных задач
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Пробел между кнопками */
  margin-left: auto; /* Сдвигает контейнер вправо */
  align-items: center; /* Выравнивание кнопок по центру */
`;
