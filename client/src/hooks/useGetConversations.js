import React, { useEffect, useState } from "react";
import { useToast } from "../contexts/ToastContext";
import { SERVER_URL } from "../config/config";
import axios from "../config/axiosConfig";
// import useToast from "./useToast";

const useGetConversations = () => {
  // const { showToast } = useToast();
  const showToast = useToast();
  const [loading, setLoading] = useState();
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getCoverstions = async () => {
      setLoading(true);
      try {
        // Replace with your actual API URL
        const response = await axios.get(`${SERVER_URL}/api/v0/users`);
        const data = await response.data;

        if (!data) {
          // Check if the response contains error information
          showToast(
            "error",
            "Error",
            data?.message || "Error fetching conversations",
            5000
          );
        }
        setConversations(data.users);
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

    getCoverstions();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
