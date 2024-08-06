import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../contexts/SocketContext";
import UsersSkeleton from "../skeletons/UsersSkeleton";

const User = ({ conversation }) => {
  const { loading, setSelectedConversation } = useConversation();

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  if (loading) return <UsersSkeleton />;
  return (
    <>
      <div
        className={`avatar cursor-pointer tooltip tooltip-top mt-2`}
        data-tip={
          isOnline
            ? `${conversation.userName} - online`
            : `${conversation.userName} - offline`
        }
        onClick={() => setSelectedConversation(conversation)}
      >
        <div
          className={`w-10 rounded-full border-2 ${
            isOnline ? "border-green-500" : "border-gray-800"
          }`}
        >
          <img
            src={conversation?.avatar ? conversation?.avatar : "/avatar.png"}
            alt={`${conversation.userName} avatar`}
          />
        </div>
      </div>
    </>
  );
};

export default User;
