import React from "react";

import PageOne from "./components/PageOne";
import { Route } from "react-router-dom";
import PageTwo from "./components/PageTwo";

function App() {
  return (
    <div className="App">
      <Route path="/" component={PageOne} exact />
      <Route path="/detail" component={PageTwo} exact />
    </div>
  );
}

export default App;
