import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

type SignUpFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

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

  return (
    <div className="grid h-screen place-items-center">
      <div className="border border-black px-6 py-4">
        <h2 className="section-title"> Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

          <button
            className="mt-6 block w-full border border-black py-2 "
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
