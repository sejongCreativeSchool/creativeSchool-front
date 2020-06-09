import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  z-index: 3;
  box-shadow: 1px 1px 1px 1px lightgray;
  background-color: white;

  font-family: "S-CoreDream-6Bold";
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  padding-left: 30px;
`;

function Header() {
  return (
    <HeaderStyle>
      <div>BROOM 관리자</div>
    </HeaderStyle>
  );
}

export default Header;
