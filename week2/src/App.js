import React from "react";

import DexHeaderContianer from "./containers/DexHeaderContainer";
import { createGlobalStyle } from "styled-components";
import DexTemplate from "./componenets/DexTemplate";
import DexBody from "./componenets/DexBody";

const GlobalStyle = createGlobalStyle`
  body {
    background:		#f15b6c;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <DexTemplate>
        <DexHeaderContianer />
        <DexBody />
      </DexTemplate>
    </div>
  );
}

export default App;
