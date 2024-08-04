// // src/context/ToastContext.js
// import React, { createContext, useContext, useState } from "react";
// import Toast from "../components/Toast";

// export const ToastContext = createContext();

// export const useToastContext = () => {
//   return useContext(ToastContext);
// };

// export const ToastContextProvider = ({ children }) => {
//   const [toasts, setToasts] = useState([]);
//   const [nextZIndex, setNextZIndex] = useState(1000);
//   const [nextTop, setNextTop] = useState("16px");

//   const addToast = (type, message, duration = 5000) => {
//     setToasts((prevToasts) => [
//       ...prevToasts,
//       { type, message, id: Date.now(), duration, zIndex: nextZIndex },
//     ]);
//     setNextTop(nextTop + "16px");
//     setNextZIndex(nextZIndex + 10);
//   };

//   const removeToast = (id) => {
//     setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
//   };

//   return (
//     <ToastContext.Provider value={{ addToast }}>
//       {children}
//       <div className="fixed top-4 [nextTop] left-1/2 transform -translate-x-1/2 w-full max-w-sm">
//         {toasts.map((toast) => (
//           <Toast
//             key={toast.id}
//             type={toast.type}
//             message={toast.message}
//             visible={true}
//             onClose={() => removeToast(toast.id)}
//             duration={toast.duration}
//             zIndex={toast.zIndex}
//             top={toast.top}
//           />
//         ))}
//       </div>
//     </ToastContext.Provider>
//   );
// };
// // export const useToastContext = () => useContext(ToastContext);

// PRIMEREACT TOAST
import React, { createContext, useContext, useRef } from "react";
import { Toast } from "primereact/toast";

const ToastContext = createContext(null);

export const ToastContextProvider = ({ children }) => {
  const toastRef = useRef(null);

  const showToast = (severity, summary, detail) => {
    toastRef.current.show({ severity, summary, detail, life: 3000 });
  };

  return (
    <ToastContext.Provider value={showToast}>
      <Toast ref={toastRef} position="top-center" />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
