import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  // console.log(message);

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser.userId;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;

  const bubbleBgColor = fromMe ? "" : "bg-blue-500";

  return (
    <>
      <div className={`chat ${chatClassName} pb-8`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user-avatar" src="/avatar-2.webp" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50 ml-2">12:45</time>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>
          {message?.message}
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>

      {/* <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user-avatar" src="/avatar.png" />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50 ml-2">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}
    </>
  );
};

export default Message;
