import { ReactNode, useState } from "react";

import { User } from "firebase/auth";

import AuthContext from "./AuthContext";

const AuthState = ({ children }: AuthState) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

type AuthState = {
  children: ReactNode | string;
};
