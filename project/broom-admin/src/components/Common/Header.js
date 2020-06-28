import React from "react";
import styled from "styled-components";
import broomlogo from "../../res/broomlogo.svg";
import { useHistory } from "react-router-dom";

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;

  position: fixed;
  z-index: 3;

  width: 100vw;
  height: 60px;

  padding-left: 30px;

  box-shadow: 1px 1px 1px 1px lightgray;
  background-color: white;

  user-select: none;
  cursor: pointer;
`;

const LogoImgWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 60px;

  margin-right: 10px;

  img {
    display: block;
    height: 50px;
  }
`;

const LogoTextWrapper = styled.div`
  display: flex;
  align-content: center;
`;

const LogoText = styled.h1`
  font-family: "S-CoreDream-6Bold";
  font-size: 1.5rem;
`;

function Header() {
  let history = useHistory();

  return (
    <HeaderStyle
      onClick={() => {
        history.push("/");
      }}
    >
      <LogoImgWrapper>
        <img src={broomlogo} alt="broom_logo" />
      </LogoImgWrapper>

      <LogoTextWrapper>
        <LogoText>부름 관리자 페이지</LogoText>
      </LogoTextWrapper>
    </HeaderStyle>
  );
}

export default Header;
