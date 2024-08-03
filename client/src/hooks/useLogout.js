import React, { useState } from "react";
import useToast from "./useToast";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { showToast } = useToast();
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const logout = async () => {
    setLoading(true);
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch("/api/v0/auth/logout-user", config);
      const data = await response.json();

      if (!response.ok) {
        // Check if the response contains error information
        showToast("error", data?.message || "Logout failed", 5000);
      }
      showToast("success", data?.message || "Logout successfully", 5000);

      //local storage
      localStorage.removeItem("chat-user");

      // updating AutStateContext
      setAuthUser(null);
      //   navigate(`/login`);
    } catch (error) {
      // Handle general errors
      showToast("error", error.message || "Something went wrong", 5000);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};

export default useLogout;
