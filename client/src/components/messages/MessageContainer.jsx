import React, { useEffect } from "react";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // const noChatSelected = true;

  useEffect(() => {
    // clean up function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[650px] min-h-[200px] flex flex-col h-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold ml-2">
              {selectedConversation?.fullName}
            </span>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <MessagesList />
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;
