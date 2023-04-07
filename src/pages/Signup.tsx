import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

type SignUpFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup: FC = () => {
  const { register, handleSubmit, reset } = useForm<SignUpFormValues>();

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
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="border border-red-500">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <input
              {...register("password")}
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
