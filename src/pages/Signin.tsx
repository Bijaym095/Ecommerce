import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

import { auth } from "../config/firebase";
import Container from "../common/Container";
import useAuthContext from "../hooks/useAuthContext";

const Signin: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<LoginFormValues>();
  const navigate = useNavigate();
  const { signin } = useAuthContext();

  const handleLoginSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const result = await signin(data.email, data.password);

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
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section-padding">
      <Container className={"grid place-items-center"}>
        <div className="border border-black bg-white px-4 py-2">
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

            <button className="block w-full bg-primary py-2 font-medium text-white">
              Login
            </button>
          </form>

          {/* ========== divider ========== */}
          <div className="mb-4 mt-6 flex items-center gap-1 pt-1">
            <div className="h-[1px] w-full bg-black"></div>
            OR
            <div className="h-[1px] w-full bg-black"></div>
          </div>
          {/* ========== divider ========== */}

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
      </Container>
    </section>
  );
};

export default Signin;

type LoginFormValues = {
  email: string;
  password: string;
};
