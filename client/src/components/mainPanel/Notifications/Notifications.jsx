import React from "react";
import { IoNotifications } from "react-icons/io5";

const Notifications = () => {
  return (
    <div className="tooltip tooltip-bottom indicator " data-tip="Notifications">
      <span className="indicator-item indicator-start badge badge-info">
        99<sup>+</sup>
      </span>
      <button type="button" className="btn btn-circle bg-sky-500 text-white">
        <IoNotifications className="w-5 h-5 outline-none" />
      </button>
    </div>
  );
};

export default Notifications;
