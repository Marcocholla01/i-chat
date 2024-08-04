// // src/components/Toast.js
// import React, { useEffect } from "react";
// import { BiCross } from "react-icons/bi";
// import {
//   FaExclamationTriangle,
//   FaCheckCircle,
//   FaInfoCircle,
// } from "react-icons/fa";

// const iconMap = {
//   success: <FaCheckCircle className="text-green-500 h-6 w-6" />,
//   error: <FaExclamationTriangle className="text-red-500 h-6 w-6" />,
//   info: <FaInfoCircle className="text-blue-500 h-6 w-6" />,
// };

// const Toast = ({
//   type,
//   message,
//   visible,
//   onClose,
//   duration = 5000,
//   zIndex,
// }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose();
//     }, duration);
//     return () => clearTimeout(timer);
//   }, [duration, onClose]);

//   if (!visible) return null;

//   return (
//     <div
//       className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm z-[zIndex]"
//       style={{ zIndex }}
//     >
//       <div
//         className={`alert shadow-md rounded-md border-l-4 ${
//           type === "success"
//             ? "alert-success"
//             : type === "error"
//             ? "alert-error"
//             : "alert-info"
//         }`}
//       >
//         <div className="flex items-center">
//           <div className="flex-shrink-0">{iconMap[type]}</div>
//           <div className="ml-3 flex-1">
//             <p className="font-medium">{message}</p>
//           </div>
//           <button
//             onClick={onClose}
//             className="ml-5 btn btn-sm btn-circle btn-outline bg-white text-black font-semibold text-[16px]"
//           >
//             &times;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Toast;
