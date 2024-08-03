import useToast from "../hooks/useToast";

const useHandleLoginErrors = (inputs) => {
  const { showToast } = useToast();

  const checkErrors = () => {
    if (!inputs.identifier) {
      showToast("error", "Please enter your username or email", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.password) {
      showToast("error", "Please input your password", 5000);
      return true; // Indicate that there are errors
    }

    return false; // No errors
  };

  return { checkErrors };
};

export default useHandleLoginErrors;
