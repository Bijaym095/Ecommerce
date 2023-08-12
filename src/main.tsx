import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/styles/index.css";

import AuthState from "./context/Auth/AuthState";
import CartState from "./context/Cart/CartState";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthState>
    <CartState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartState>
  </AuthState>
);
