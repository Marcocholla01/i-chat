// src/context/ToastContext.js
import React, { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const ToastContext = createContext();

export const useToastContext = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [nextZIndex, setNextZIndex] = useState(1000);
  const [nextTop, setNextTop] = useState("16px");

  const addToast = (type, message, duration = 5000) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      { type, message, id: Date.now(), duration, zIndex: nextZIndex },
    ]);
    setNextTop(nextTop + "16px");
    setNextZIndex(nextZIndex + 10);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 [nextTop] left-1/2 transform -translate-x-1/2 w-full max-w-sm">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            visible={true}
            onClose={() => removeToast(toast.id)}
            duration={toast.duration}
            zIndex={toast.zIndex}
            top={toast.top}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
// export const useToastContext = () => useContext(ToastContext);
