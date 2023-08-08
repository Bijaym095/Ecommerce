import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<SignUpFormValues>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    if (data.password === data.confirmPassword) {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("Successfully created user");
      } catch (err) {
        console.log("Error while signingup", err);
      }
    } else {
      console.log("Passwords don't match! Try again");
    }

    reset();
    navigate("/signin");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid h-screen place-items-center">
      <div className="border border-black px-6 py-4">
        <h2 className="section-title text-center"> Sign Up</h2>

        <form className="mb-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="w-full"
              {...register("email")}
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <input
              className="w-full"
              {...register("password")}
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <input
              className="w-full"
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button
            className="mt-6 block w-full bg-blue-500 py-2 text-white hover:bg-blue-600"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p>
          Already have an account ?{" "}
          <NavLink className="underline" to="/signin">
            SignIn
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;

type SignUpFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};
