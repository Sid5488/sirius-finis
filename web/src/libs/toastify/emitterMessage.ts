import { toast } from "react-toastify";

const emitterMessage = (
  message: string, 
  type: "success" | "info" | "warn" | "error" | "default"
) => {
  if (type === "success") toast.success(message);
  else if (type === "warn") toast.warn(message);
  else if (type === "info") toast.info(message);
  else if (type === "error") toast.error(message);
  else toast(message);
};

export { emitterMessage };
