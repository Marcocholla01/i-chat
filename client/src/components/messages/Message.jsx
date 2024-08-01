import React from "react";

const Message = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user-avatar" src="/avatar-2.webp" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50 ml-2">12:45</time>
        </div>
        <div className="chat-bubble text-white bg-blue-500">
          You were the Chosen One!
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
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
      </div>
    </>
  );
};

export default Message;
