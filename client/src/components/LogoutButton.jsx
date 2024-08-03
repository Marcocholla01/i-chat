import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";
import Loader from "./Loader";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  if (loading)
    return (
      <div className="mt-auto">
        <span className="loading loading-spinner"></span>
      </div>
    );

  return (
    <>
      <div className="mt-auto">
        <div className="tooltip tooltip-right" data-tip="Logout">
          <BiLogOut className="w-8 h-8 cursor-pointer" onClick={handleLogout} />
        </div>
      </div>
    </>
  );
};

export default LogoutButton;
