import React from "react";
import styled from "styled-components";
import broomlogo from "../../res/broomlogo.svg";
import { useHistory } from "react-router-dom";

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

  .logo-wrapper {
    display: flex;
    align-items: center;
    height: 60px;

    margin-right: 10px;
  }

  img {
    height: 50px;
  }

  user-select: none;
`;

function Header() {
  let history = useHistory();
  return (
    <HeaderStyle
      onClick={() => {
        history.push("/");
      }}
    >
      <div className="logo-wrapper">
        <img src={broomlogo} alt="logo" />
      </div>
      <div>부름 관리자 페이지</div>
    </HeaderStyle>
  );
}

export default Header;
