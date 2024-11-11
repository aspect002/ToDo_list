import styled from "styled-components";

export const LogOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
`;

export const LogOutLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #efedf3;
  font-weight: bold;

  &:hover {
    color: #fcfaff;
  }
`;
