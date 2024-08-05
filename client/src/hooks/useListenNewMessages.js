import React, { useEffect, useState } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenNewMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    // clean up func
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenNewMessages;
