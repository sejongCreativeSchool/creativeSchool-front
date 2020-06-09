import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom"; // * BrowserRouter 불러오기

import "semantic-ui-css/semantic.min.css";

// src/index.js

// 리액트드래프드위지윅에서 제공하는 css 파일 import
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./res/editorStyle.css";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
