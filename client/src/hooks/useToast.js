import { useToastContext } from "../contexts/ToastContext";

const useToast = () => {
  const { addToast } = useToastContext();

  const showToast = (type, message, duration) => {
    addToast(type, message, duration);
  };

  return {
    showToast,
  };
};

export default useToast;
