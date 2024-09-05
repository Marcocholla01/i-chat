import React, { useState } from "react";
// import useToast from "./useToast";
import useConversation from "../zustand/useConversation";
import { useToast } from "../contexts/ToastContext";
import { SERVER_URL } from "../config/config";
import axios from "../config/axiosConfig";

const useSendMessage = () => {
  //   const { showToast } = useToast();
  const showToast = useToast();
  const [loading, setLoading] = useState();
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      // Replace with your actual API URL
      const response = await axios.post(
        `${SERVER_URL}/api/v0/messages/send/${selectedConversation._id}`,
        { message }
      );
      const data = await response.data;
      if (data.success === false) throw new Error(data.message);

      setMessages([...messages, data.message]);
      //   console.log(data.message);
    } catch (error) {
      // Handle general errors
      showToast(
        "error",
        "Error",
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
