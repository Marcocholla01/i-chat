import React, { useEffect, useRef } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import useConversation from "../../zustand/useConversation";
import { timeAgo } from "../../utils/timeAgo";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  // console.log(message);
  const messageBubbleRef = useRef(null);

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser.userId;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const avatar = fromMe ? authUser.avatar : selectedConversation.avatar;
  const time = timeAgo(message.createdAt);
  console.log(message.createdAt);
  console.log(time);

  const bubbleBgColor = fromMe ? "" : "bg-blue-500";

  const shakeClass = message.shouldShake ? "shake" : "";

  useEffect(() => {
    if (messageBubbleRef.current && message?.shouldShake) {
      // Force reflow to restart animation
      messageBubbleRef.current.classList.remove("shake");
      void messageBubbleRef.current.offsetWidth; // Trigger reflow
      messageBubbleRef.current.classList.add("shake");
    }
  }, [message?.shouldShake]);

  return (
    <>
      <div className={`chat ${chatClassName} pb-8`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user-avatar" src={avatar} />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50 ml-2">{time}</time>
        </div>
        <div
          ref={messageBubbleRef}
          className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}
        >
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
