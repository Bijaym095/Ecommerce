import { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";

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

const Signin: React.FC = () => {
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
      console.warn(err);
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
      console.warn("Error while signingup with google", err);
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
    <div className="grid h-screen place-items-center">
      <div className="border border-black px-4 py-2">
        <h2 className="section-title text-center">Sign In</h2>
        <form
          className="mb-6 space-y-4"
          onSubmit={handleSubmit(handleLoginSubmit)}
        >
          <div>
            <input
              className="w-full"
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <input
              className="w-full"
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="block w-full border border-black py-2">
            Login
          </button>
        </form>

        {/* divider */}
        <div className="mb-4 mt-6 flex items-center gap-1 pt-1">
          <div className="h-[1px] w-full bg-black"></div>
          OR
          <div className="h-[1px] w-full bg-black"></div>
        </div>
        {/* divider */}

        <button
          onClick={handleGoogleSignIn}
          className="mb-4 block w-full border border-black py-2 text-center"
        >
          <span className="flex items-center justify-center gap-2">
            <FcGoogle /> Sign In with Google
          </span>
        </button>

        <p>
          Don't have an account ?
          <Link className="pl-2 underline" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
