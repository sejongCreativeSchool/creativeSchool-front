import React from "react";

import PageOne from "./components/PageOne";
import { Route } from "react-router-dom";
import PageTwo from "./components/PageTwo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={PageOne} exact />
      <Route path="/detail" component={PageTwo} exact />
    </div>
  );
}

export default App;
