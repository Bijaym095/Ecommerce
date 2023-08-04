import { useContext } from "react";

import AuthContext from "../context/Auth/AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthState");
  }

  return context;
};

export default useAuthContext;
