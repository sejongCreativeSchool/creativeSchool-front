import React from "react";
import { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";

import Header from "./components/Common/Header";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Common/Nav";
import ErrandsPage from "./pages/ErrandsPage";
import UserPage from "./pages/UserPage";
import NoticePage from "./pages/NoticePage";
import NoticeWritePage from "./pages/NoticeWritePage";

import ErrandDetailContainer from "./containers/errands/ErrandDetailContainer";
import UserDetailContainer from "./containers/user/UserDetailContainer";
import NoticeViewerContainer from "./containers/notice/NoticeViewerContainer";
import NoticeViewerPage from "./pages/NoticeViewerPage";
import NoticeFixContainer from "./containers/notice/NoticeFixContainer";
import NoticeFixPage from "./pages/NoticeFixPage";

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
      <Header />
      <Nav />
      <Route path="/errands" component={ErrandsPage} exact />
      <Route
        path="/errands/:id"
        component={ErrandDetailContainer}
        exact={false}
      />

      <Route path="/users" component={UserPage} exact />
      <Route
        path="/user/:accessToken"
        component={UserDetailContainer}
        exact={false}
      />

      <Route path="/notice" component={NoticePage} exact />
      <Route path="/notice/edit/:id" component={NoticeFixPage} exact />
      <Route path="/notice/write" component={NoticeWritePage} exact />
      <Route path="/notice/id/:id" component={NoticeViewerPage} exact />
    </>
  );
}

export default App;
