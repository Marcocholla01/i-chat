// import useToast from "../hooks/useToast";

import { useToast } from "../contexts/ToastContext";

const handleLoginEmptyFields = (inputs) => {
  // const { showToast } = useToast();
  const showToast = useToast();

  const checkErrors = () => {
    if (!inputs.identifier) {
      showToast("warn", "Warning", "Please enter your username or email", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.password) {
      showToast("warn", "Warning", "Please input your password", 5000);
      return true; // Indicate that there are errors
    }

    return false; // No errors
  };

  return { checkErrors };
};

export default handleLoginEmptyFields;
