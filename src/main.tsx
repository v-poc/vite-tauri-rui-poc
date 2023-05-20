// import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { setupMock } from "./mock/index"; // setup mock
import "rui-next/css"; // lib css
import "./index.less"; // app styles

const container = document.getElementById("root") as HTMLElement;
createRoot(container).render(<App />);

// prod mock
if (!import.meta.env.DEV) {
  setupMock();
}
