import { useEffect, useState } from "react";
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../../config/firebase";

import AuthContext from "./AuthContext";

const AuthState = ({ children }: AuthStateProp) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signup = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = (): Promise<void> => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

type AuthStateProp = {
  children: React.ReactNode;
};
