import React, { useState } from "react";
import useToast from "./useToast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const useLogin = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { autUser, setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const login = async (inputs) => {
    setLoading(true);
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      };

      // Replace with your actual API URL
      const response = await fetch("/api/v0/auth/login-user", config);
      const data = await response.json();

      if (!response.ok) {
        // Check if the response contains error information
        showToast("error", data?.message || "Authentication failed", 5000);
      } else {
        showToast(
          "success",
          data?.message || "Authenticated successfully",
          5000
        );

        //local storage
        localStorage.setItem("chat-user", JSON.stringify(data.user));

        // updating AutStateContext
        await setAuthUser(data?.user);
      }
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

  return { loading, login };
};

export default useLogin;
