import React from "react";
import ReactDOM from "react-dom/client";
import MicroFrontend from "./MicroFrontend";
import "./index.css";

const container = document.getElementById("root")!;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <main>
      <MicroFrontend />
    </main>
  </React.StrictMode>,
);
