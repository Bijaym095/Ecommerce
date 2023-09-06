import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import useAuthContext from "../hooks/useAuthContext";
import Container from "../common/Container";

const Signup: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<SignUpFormValues>();
  const navigate = useNavigate();

  const { signup } = useAuthContext();

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    if (data.password === data.confirmPassword) {
      try {
        setError(null);
        const result = await signup(data.email, data.password);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    } else {
      setError("Passswords don't match! Try again.");
    }

    reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section-padding">
      <Container className="grid place-items-center">
        <div className="border border-black p-4 md:w-[400px]">
          <h2 className="section-title text-center"> Sign Up</h2>

          <form className="mb-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="form-input w-full"
                {...register("email")}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                className="form-input w-full"
                {...register("password")}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="form-input w-full"
                {...register("confirmPassword")}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter your password"
                required
              />
            </div>

            {error && (
              <p className="bg-red-400 py-4 text-center text-white">{error}</p>
            )}

            <button
              className="mt-6 block w-full bg-primary-500 py-2 font-medium text-white"
              type="submit"
            >
              Create an account
            </button>
          </form>

          <p className="text-center">
            Already have an account ?
            <NavLink className="pl-2 underline" to="/signin">
              Sign In
            </NavLink>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Signup;

type SignUpFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};
