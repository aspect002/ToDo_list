import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const SignUpText = styled.span`
  color: #ffffff;
`;

export const SignUpLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #efedf3;
  font-weight: bold;

  &:hover {
    color: #fcfaff;
  }
`;
