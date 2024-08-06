import React, { useEffect } from "react";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";
import useConversation from "../../zustand/useConversation";
import { BsArrowRightCircle } from "react-icons/bs";
import NoChatSelected from "./NoChatSelected";
import useGetConversations from "../../hooks/useGetConversations";
import { useSocketContext } from "../../contexts/SocketContext";
import UsersList from "../users/UsersList";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // const noChatSelected = true;
  const { conversations } = useGetConversations();
  const conversation = conversations.find(
    (c) => c._id === selectedConversation?._id
  );

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation?._id);

  const status = isOnline ? "online" : "";

  useEffect(() => {
    // clean up function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <>
      <div className="md:min-w-[650px] min-h-[200px] flex flex-col h-full max-w-[250px]">
      <UsersList />
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="flex flex-row justify-between bg-slate-500 px-4 py-2 mb-2">
              <div className="flex flex-col">
                <div>
                  <span className="label-text">To:</span>
                  <span className="text-gray-900 font-bold ml-2">
                    {selectedConversation?.fullName}
                  </span>
                </div>
                <span className="text-center text-white ">{status}</span>
              </div>

              <div className="tooltip tooltip-top" data-tip="Close chat">
                <button
                  type="button"
                  className="btn btn-circle bg-sky-500 text-white"
                  onClick={() => setSelectedConversation(null)}
                >
                  <BsArrowRightCircle className="w-6 h-6 outline-none" />
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
              <MessagesList />
              <MessageInput />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MessageContainer;
