import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import "./CSS/Main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
