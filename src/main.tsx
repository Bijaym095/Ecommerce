import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/styles/index.css";

import AuthState from "./context/Auth/AuthState";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>
);
