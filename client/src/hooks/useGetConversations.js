import React, { useEffect, useState } from "react";
import useToast from "./useToast";

const useGetConversations = () => {
  const { showToast } = useToast();
  const [loading, setLoading] = useState();
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getCoverstions = async () => {
      setLoading(true);
      try {
        const config = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };

        // Replace with your actual API URL
        const response = await fetch("/api/v0/users", config);
        const data = await response.json();

        if (!response.ok) {
          // Check if the response contains error information
          showToast(
            "error",
            data?.message || "Error fetching conversations",
            5000
          );
        }
        setConversations(data.users);
      } catch (error) {
        // Handle general errors
        showToast(
          "error",
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
