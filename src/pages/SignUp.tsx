import React from "react";
import NavBar from "../components/sections/NavBar";
import { Input } from "../components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, z } from "zod";
import SignUpImage from "../assests/Images/SignUp_Image.jpg";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.string().email({ message: "Required" }),
  password: z.string().min(8, { message: "Required" }),
});

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const Submit = (data: z.infer<Schema>) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  Brand
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign Up to Create your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit(Submit)}>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email Address
                    </label>
                    <Input className="" type="text" {...register("email")} />
                    {errors.email?.message && (
                      <span>Error Message : {errors.email.message}</span>
                    )}
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-600 dark:text-gray-200">
                        Password
                      </label>
                      <a
                        href="#whattt"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      className=""
                      type="password"
                      {...register("password")}
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      className="bg-gradient-to-br relative group/btn  block dark:bg-zinc-800 w-full text-black rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                      type="submit"
                    >
                      Sign up &rarr;
                      <BottomGradient />
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign In
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage: `url(${SignUpImage})`,
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Brand</h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default SignUp;
