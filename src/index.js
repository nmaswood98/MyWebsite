import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import App from "./App";
var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
