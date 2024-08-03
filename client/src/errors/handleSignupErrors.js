import useToast from "../hooks/useToast";

const useHandleSignupErrors = (inputs) => {
  const { showToast } = useToast();

  const checkErrors = () => {
    if (!inputs.fullName) {
      showToast("error", "Please enter your names", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.email) {
      showToast("error", "Please enter your email", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.userName) {
      showToast("error", "Please enter your username", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.password) {
      showToast("error", "Please input your password", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.confirmPassword) {
      showToast("error", "Please input your confirm password", 5000);
      return true; // Indicate that there are errors
    }
    if (!inputs.gender) {
      showToast("error", "Please select your gender", 5000);
      return true; // Indicate that there are errors
    }
    if (inputs.password !== inputs.confirmPassword) {
      showToast("error", "Passwords do not match", 5000);
      return true; // Indicate that there are errors
    }

    return false; // No errors
  };

  return { checkErrors };
};

export default useHandleSignupErrors;
