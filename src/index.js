import React, { Suspense } from "react";
import App from "./App";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";
import "./assets/style.css";
//import {History} from './History'
import Spinner from "./views/Spinner/Spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>

  <Suspense fallback={<Spinner />}>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
  //   <React.StrictMode>
);
