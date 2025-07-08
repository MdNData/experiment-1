import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { AppContext } from "./context.jsx";

createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <AppContext>
      <App />
    </AppContext>
  </React.Fragment>
);
