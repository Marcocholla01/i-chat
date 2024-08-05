import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContextProvider } from "./contexts/ToastContext";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { SocketContextProvider } from "./contexts/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ToastContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </ToastContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
