import styled from "styled-components";
import IconButton from '@mui/material/IconButton';


export const StyledButtonDelete = styled(IconButton)`
  margin-left: auto; /* Отодвигаем кнопку к правому краю */
  color: white; /* Устанавливаем цвет иконки в белый */
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: #df0909; /* Цвет при наведении (опционально) */
  }
`;
