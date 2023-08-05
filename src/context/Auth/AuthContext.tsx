import { Dispatch, SetStateAction, createContext } from "react";

import type { User } from "firebase/auth";

const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});

export default AuthContext;

type AuthContext = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};
