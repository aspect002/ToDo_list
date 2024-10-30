import styled from "styled-components";

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputOutputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  flex-grow: 1;
  margin-right: 8px;

`;

export const StyledButtonUpdate = styled.button`
  padding: 10px 15px; 
  background-color: #0be712;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #06f050;
  }
`;

export const ErrorText = styled.span`
  color: #0a0202;
  margin-top: 8px;
  width: 100%;
  text-align: center;
  font-weight:bolder;
`;
