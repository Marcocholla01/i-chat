// import useToast from "../hooks/useToast";

import { useToast } from "../contexts/ToastContext";

const handleSignupEmptyFields = (inputs) => {
  // const { showToast } = useToast();
  const showToast = useToast();

  const checkErrors = () => {
    if (!inputs.fullName) {
      // showToast("warn", "Please enter your names", 5000);
      showToast("warn", "Warning", "Please enter your names");
      return true; // Indicate that there are errors
    }
    if (!inputs.email) {
      showToast("warn", "Warning", "Please enter your email", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.userName) {
      showToast("warn", "Warning", "Please enter your username", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.password) {
      showToast("warn", "Warning", "Please input your password", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.confirmPassword) {
      showToast("warn", "Warning", "Please input your confirm password", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.gender) {
      showToast("warn", "Warning", "Please select your gender", 5000);
      return true; // Indicate that there are errors
    }
    if (inputs.password !== inputs.confirmPassword) {
      showToast("warn", "Passwords do not match", 5000);
      return true; // Indicate that there are errors
    }

    return false; // No errors
  };

  return { checkErrors };
};

export default handleSignupEmptyFields;
