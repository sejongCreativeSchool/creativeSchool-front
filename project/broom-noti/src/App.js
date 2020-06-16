import React from "react";
import NoticeListPage from "./pages/NoticeListPage";
import { Route } from "react-router";
import NoticeViewerPage from "./pages/NoticeViewerPage";

function App() {
  return (
    <>
      <Route path="/" component={NoticeListPage} exact />
      <Route path="/:id" component={NoticeViewerPage} exact />
    </>
  );
}

export default App;
