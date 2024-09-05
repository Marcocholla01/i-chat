import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { useToast } from "../contexts/ToastContext";
import { SERVER_URL } from "../config/config";
import axios from "../config/axiosConfig";
// import useToast from "./useToast";

const useGetMessages = () => {
  //   const { showToast } = useToast();
  const showToast = useToast();
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  //   console.log("selectedCon", selectedConversation._id);

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        // Replace with your actual API URL
        const response = await axios.get(
          `${SERVER_URL}/api/v0/messages/${selectedConversation._id}`,
        );
        const data = await response.data;
        if (data.success === false) throw new Error(data.message);

        setMessages(data.messages);
        // console.log(data.messages);
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
    if (selectedConversation?._id) getMessage();
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
};

export default useGetMessages;
