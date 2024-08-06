import React, { useEffect, useState } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConversation";

import notification from "/audio/notification-3.wav";
// import notification from "../../public/audio/notification-2.m4a";

const useListenNewMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notification);
      newMessage.shouldShake = true;
      sound.play();
      setMessages([...messages, newMessage]);
    });

    // clean up func
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenNewMessages;
