import styled from 'styled-components';

// Контейнер для формы
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

// Контейнер для поля ввода и метки
export const FieldContainer = styled.div`
  margin: 10px 0; /* Отступ между полями */
  width: 100%; /* Ширина контейнера */
  display: flex;
  color:white;
  margin: 12px;
  flex-direction: column; /* Вертикальное расположение метки и поля ввода */
  align-items: center; /* Центрирование содержимого по горизонтали */
`;

// Стили для метки
export const Label = styled.label`
  margin-bottom: 10px; /* Отступ между меткой и полем ввода */
  font-size: 18px; /* Размер шрифта */
  text-align: center; /* Центрирование текста */
`;

// Стили для поля ввода
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
    padding: 10px 20px; /* Добавьте отступы для удобства */
    border: none;
    border-radius: 5px; /* Закругление углов */
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #7a4bcf;
    }
`
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
