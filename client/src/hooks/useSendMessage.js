import React, { useState } from "react";
// import useToast from "./useToast";
import useConversation from "../zustand/useConversation";
import { useToast } from "../contexts/ToastContext";

const useSendMessage = () => {
    //   const { showToast } = useToast();
      const showToast = useToast();
    const [loading, setLoading] = useState();
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      };

      // Replace with your actual API URL
      const response = await fetch(
        `/api/v0/messages/send/${selectedConversation._id}`,
        config
      );
      const data = await response.json();
      if (data.success === false) throw new Error(data.message);

      setMessages([...messages, data.message]);
      //   console.log(data.message);
    } catch (error) {
      // Handle general errors
      showToast(
        "error", "Error",
        error?.response?.data?.message || "Something went wrong",
        5000
      );
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
