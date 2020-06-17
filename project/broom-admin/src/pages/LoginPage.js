import React from "react";
import { createGlobalStyle } from "styled-components";
import LoginTemplate from "../components/Login/LoginTemplate";
import BroomLogo from "../components/Login/BroomLogo";
import LoginInputContainer from "../containers/Login/LoginInputContainer";

const GlobalStyle = createGlobalStyle`
html {
  height:100%;
}
body {
  background-color: #0105ac;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
}
`;

function LoginPage({ history }) {
  return (
    <>
      <GlobalStyle />
      <LoginTemplate>
        <BroomLogo />
        <LoginInputContainer history={history} />
      </LoginTemplate>
    </>
  );
}

export default LoginPage;
