import React from "react";
import User from "./User";
import useGetConversations from "../../hooks/useGetConversations";
import Notifications from "../mainPanel/Notifications/Notifications";
import Menu from "../mainPanel/Menu/Menu";

const UsersList = () => {
  const { conversations } = useGetConversations();
  return (
    <>
      <div className="flex flex-row  w-full items-center justify-between">
        <div className="py-2 flex flex-row  items-center gap-2 px-4 mt-3">
          {conversations &&
            conversations.map((conversation, idx) => (
              <User key={conversation._id} conversation={conversation} />
            ))}
        </div>
        <div className="mr-2 flex gap-3">
          <Notifications />
          <Menu />
        </div>
      </div>
    </>
  );
};

export default UsersList;
