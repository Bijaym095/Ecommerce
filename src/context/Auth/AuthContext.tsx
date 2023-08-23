import { createContext } from "react";
import type { User, UserCredential } from "firebase/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;

type AuthContextType = {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
  signin: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
};
