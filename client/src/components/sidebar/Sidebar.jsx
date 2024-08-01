import React from "react";
import SerachInput from "./SerachInput";
import ConversationList from "./ConversationList";
import LogoutButton from "../LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SerachInput />
      <div className="divider px-3" />
      <ConversationList />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
