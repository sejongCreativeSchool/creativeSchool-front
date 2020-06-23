import React from "react";
import NoticeListPage from "./pages/NoticeListPage";
import { Route } from "react-router";
import NoticeViewerPage from "./pages/NoticeViewerPage";
import Terms from "./components/Terms";

function App() {
  return (
    <>
      <Route path="/" component={NoticeListPage} exact />
      <Route path="/noti/:id" component={NoticeViewerPage} exact />
      <Route path="/terms" component={Terms} exact />
    </>
  );
}

export default App;
