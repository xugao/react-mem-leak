import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ChildWindow } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Cleaner } from "./components/Cleaner";

const WaitToRenderChildwindow = 1000;

function renderCleaner() {
  const div = window.document.createElement("div");
  window.document.body.appendChild(div);
  ReactDOM.render(<Cleaner />, div);

  ReactDOM.unmountComponentAtNode(div);
  window.document.body.removeChild(div);
}

setTimeout(() => {
  ChildWindow(renderCleaner);
}, WaitToRenderChildwindow);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
