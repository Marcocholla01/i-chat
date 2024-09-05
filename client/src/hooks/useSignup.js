import React, { useState } from "react";
// import useToast from "./useToast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";
import { SERVER_URL } from "../config/config";
import axios from "../config/axiosConfig";

const useSignup = () => {
  const navigate = useNavigate();
  // const { showToast } = useToast();
  const showToast = useToast();
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const signup = async (inputs) => {
    setLoading(true);
    try {
      // Replace with your actual API URL
      const response = await axios.post(
        `${SERVER_URL}/api/v0/auth/create-user`,
        {
          identifier: inputs.identifier,
          password: inputs.password,
        }
      );
      const data = await response.data;

      if (!data) {
        // Check if the response contains error information
        showToast(
          "error",
          "Error",
          data?.message || "Authentication failed",
          5000
        );
      } else {
        showToast(
          "success",
          "Success",
          data?.message || "Authenticated successfully",
          5000
        );

        //local storage
        localStorage.setItem("chat-user-unverified", JSON.stringify(data.user));

        setTimeout(() => {
          navigate(`/verify-account`);
        }, 2000);
      }
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

  return { loading, signup };
};

export default useSignup;
