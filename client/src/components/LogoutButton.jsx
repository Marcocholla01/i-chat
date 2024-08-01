import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <>
      <div className="mt-auto">
        <div className="tooltip tooltip-right" data-tip="Logout">
          <BiLogOut className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default LogoutButton;
