import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const MessagesList = () => {
  const { messages, loading } = useGetMessages();
  // console.log("messages", messages);

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <>
            <div key={message.id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          </>
          // console.log(message);
        ))}
      {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {/* <MessageSkeleton /> */}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default MessagesList;
