import { FC, useContext, useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";

import AuthContext from "../context/Auth/AuthContext";

interface LoginValues {
  email: string;
  password: string;
}

const Signin: FC = () => {
  const { setUser } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm<LoginValues>();

  const handleLoginSubmit: SubmitHandler<LoginValues> = async (data) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("signed in with email and password");
    } catch (err) {
      console.log(err);
    } finally {
      reset();
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Created a user with GooglePopUp");
    } catch (err) {
      console.log("Error while signingup with google", err);
    }
  };

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
    <div className="h-screen grid place-items-center">
      <div className="border border-black">
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button>Login</button>
        </form>
        <a href="#">Forgot Password ?</a>
        <div>-----------------OR------------</div>
        <button onClick={handleGoogleSignIn} className="border border-black">
          SignIn with Google
        </button>
      </div>
    </div>
  );
};

export default Signin;
