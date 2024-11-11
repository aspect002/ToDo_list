import styled from "styled-components";

export const LogOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
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
