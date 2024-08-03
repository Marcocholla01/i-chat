import React, { useState } from "react";
import useToast from "./useToast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const useSignup = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const signup = async (inputs) => {
    setLoading(true);
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      };

      // Replace with your actual API URL
      const response = await fetch("/api/v0/auth/create-user", config);
      const data = await response.json();

      if (!response.ok) {
        // Check if the response contains error information
        showToast("error", data?.message || "Authentication failed", 5000);
      }
      showToast("success", data?.message || "Authenticated successfully", 5000);

      //local storage
      localStorage.setItem("chat-user-unverified", JSON.stringify(data.user));

      setTimeout(() => {
        navigate(`/verify-account`);
      }, 2000);
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

  return { loading, signup };
};

export default useSignup;
