import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { auth } from "../config/firebase";
import Container from "../common/Container";
import useAuthContext from "../hooks/useAuthContext";

const Signin: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<LoginFormValues>();
  const navigate = useNavigate();
  const { signin } = useAuthContext();

  const handleLoginSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      setError("");
      const result = await signin(data.email, data.password);

      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(
          err.message.slice(
            err.message.indexOf("/") + 1,
            err.message.lastIndexOf(")"),
          ),
        );
      }
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
      console.error("Error while signingup with google", err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section-padding">
      <Container className="flex items-center justify-center">
        <div className="border border-primary-500 bg-white p-4 shadow-lg md:w-[400px]">
          <h2 className="section-title">Login To Your Account</h2>

          <form
            className="mb-6 space-y-4"
            onSubmit={handleSubmit(handleLoginSubmit)}
          >
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="form-input block w-full focus:outline-none"
                {...register("email")}
                type="email"
                id="email"
                placeholder="Ex. hari@gmail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>

              <div className="relative">
                <input
                  className="form-input block w-full"
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Ex. 12345"
                  required
                />
                <button
                  className="absolute right-2 top-3"
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && (
              <p className="bg-red-400 py-2 text-center capitalize text-white">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="block w-full bg-primary-500 py-2 font-medium text-white"
            >
              Login
            </button>
          </form>

          {/* ========== divider ========== */}
          <div className="mb-4 mt-6 flex items-center gap-4 pt-1">
            <div className="h-[1px] w-full bg-slate-200"></div>
            OR
            <div className="h-[1px] w-full bg-slate-200"></div>
          </div>
          {/* ========== divider ========== */}

          <button
            onClick={handleGoogleSignIn}
            className="mb-8 block w-full border border-black py-2 text-center font-medium"
          >
            <span className="flex items-center justify-center gap-2">
              <FcGoogle /> Sign In with Google
            </span>
          </button>

          <p className="text-center">
            Don't have an account ?
            <Link className="pl-2 underline" to="/signup">
              Register
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Signin;

type LoginFormValues = {
  email: string;
  password: string;
};
