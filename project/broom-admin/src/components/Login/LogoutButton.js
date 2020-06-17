import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const LogoutStyledButton = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 30px;

  font-family: "S-CoreDream-6Bold";
  font-size: 1.5rem;
  color: white;

  user-select: none;

  &:hover {
    color: #bbbbbb;
    font-size: 1.6rem;
  }
`;

function LogoutButton({ logout }) {
  return (
    <LogoutStyledButton onClick={logout}>
      <span>로그아웃</span>
    </LogoutStyledButton>
  );
}

export default LogoutButton;
