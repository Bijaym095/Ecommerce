import { ReactNode, useState } from "react";

import { User } from "firebase/auth";

import AuthContext from "./AuthContext";

interface AuthStateInterface {
  children: ReactNode | string;
}

const AuthState = ({ children }: AuthStateInterface) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
