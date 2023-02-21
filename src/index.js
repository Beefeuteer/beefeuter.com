import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import "./stylesheets/main.scss";
import { ThemeProvider } from "react-bootstrap";
import RandomWalkerGenerator from "./components/RandomWalker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minBreakpoint="xxs"
  >
    <RandomWalkerGenerator />
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
