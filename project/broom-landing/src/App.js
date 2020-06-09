import React from "react";
import { createGlobalStyle } from "styled-components";

import Footer from "./components/common/Footer";

import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";

const GlobalStyle = createGlobalStyle`
@font-face { 
  font-family: 'S-CoreDream-6Bold'; 
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff'); 
  font-weight: normal; 
  font-style: normal; 
}
  
  body {
		padding: 0;
		margin: 0;
	}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <Footer />
    </>
  );
}

export default App;
