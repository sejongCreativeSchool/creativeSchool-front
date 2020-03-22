import React from "react";
import { createGlobalStyle } from "styled-components";
import CalcTemplate from "./componenets/CalcTemplate";
import SubjectCreateContainer from "./containers/SubjectCreateContainer";
import SubjectListContainer from "./containers/SubjectListContainer";
import CalcHeadContainer from "./containers/CalcHeadContainer";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <CalcTemplate>
        <CalcHeadContainer />
        <SubjectListContainer />
        <SubjectCreateContainer />
      </CalcTemplate>
    </div>
  );
}

export default App;
