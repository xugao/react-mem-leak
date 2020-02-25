import * as React from "react";
import * as ReactDOM from "react-dom";
import { DetailsListFabric } from "./components/DetailsListFabric";

export function ChildWindow(callback: () => void) {
  const childWindow = window.open();

  if (childWindow) {
    const childDocument = childWindow.document;

    const windowRoot = childDocument.createElement("div");
    childDocument.body.appendChild(windowRoot);

    let dispose: (() => void) | undefined;

    ReactDOM.render(<DetailsListFabric />, windowRoot);
    dispose = () => {
      ReactDOM.unmountComponentAtNode(windowRoot);
    };

    const intervalId = setInterval(() => {
      if (childWindow.closed) {
        if (dispose) {
          dispose();
          dispose = undefined;
        }
        clearInterval(intervalId);
        callback();
      }
    }, 200);
  }
}
