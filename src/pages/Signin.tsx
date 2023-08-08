import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";

import { auth } from "../config/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Signin: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<LoginValues>();
  const navigate = useNavigate();

  const handleLoginSubmit: SubmitHandler<LoginValues> = async (data) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      navigate("/");
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

      navigate("/");
    } catch (err) {
      console.warn("Error while signingup with google", err);
    }
  };

  useEffect(() => {
    // scrolled to top when the component mounts
    window.scrollTo(0, 0);
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

          <button className="block w-full bg-blue-500 py-2 font-medium text-white hover:bg-blue-600">
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

type LoginValues = {
  email: string;
  password: string;
};
