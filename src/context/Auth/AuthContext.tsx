import { Dispatch, SetStateAction, createContext } from "react";

import type { User } from "firebase/auth";

interface AuthContextInterface {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextInterface>({
  user: null,
  setUser: () => {},
});

export default AuthContext;
