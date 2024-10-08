import React, { useState } from "react";
// import useToast from "./useToast";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "../contexts/ToastContext";
import { SERVER_URL } from "../config/config";
import axios from "../config/axiosConfig";

const useLogout = () => {
  const showToast = useToast();
  // const { showToast } = useToast();
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/v0/auth/logout-user`
      );
      const data = await response.data;

      if (!data) {
        // Check if the response contains error information
        showToast("error", "Error", data?.message || "Logout failed", 5000);
      }
      showToast(
        "success",
        "Success",
        data?.message || "Logout successfully",
        5000
      );

      //local storage
      localStorage.removeItem("chat-user");

      // updating AutStateContext
      setAuthUser(null);
      //   navigate(`/login`);
    } catch (error) {
      // Handle general errors
      showToast(
        "error",
        "Error",
        error.message || "Something went wrong",
        5000
      );
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};

export default useLogout;
