import { useContext } from "react";

import { AuthContext } from "../context/userContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { useAuth };
