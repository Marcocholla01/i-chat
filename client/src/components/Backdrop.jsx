import React from "react";

const Backdrop = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        {children}
      </div>
    </div>
  );
};

export default Backdrop;
