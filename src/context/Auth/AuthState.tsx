import { ReactNode, useEffect, useState } from "react";

import { User, onAuthStateChanged } from "firebase/auth";

import AuthContext from "./AuthContext";

import { auth } from "../../config/firebase";

const AuthState = ({ children }: AuthState) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleAuthState = () => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        }
      });
    };

    handleAuthState();
  }, []);

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
