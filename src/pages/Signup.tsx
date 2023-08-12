import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import useAuthContext from "../hooks/useAuthContext";
import Container from "../common/Container";

const Signup: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<SignUpFormValues>();
  const navigate = useNavigate();

  const { signup } = useAuthContext();

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    if (data.password === data.confirmPassword) {
      try {
        const result = await signup(data.email, data.password);
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
    <section className="section-padding">
      <Container className="grid place-items-center">
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
              className="mt-6 block w-full bg-primary py-2 text-white"
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
