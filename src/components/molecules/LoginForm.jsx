"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import "../../../src/style.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        toast.error("Invalid credentials!");
        return;
      }
      toast.success("Login Successfully!");
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login UnSuccessful!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen">
      <div className="grid place-items-center h-screen w-[30%]">
        <Image
          src={"/Image/logo.png"}
          alt="logo.png"
          width={700}
          height={300}
          className="w-[120px] h-[50px]"
        />
        <div className="shadow-sm p-5 w-[100%]">
          <h2 className="text-primarydark text-[18px] font-semibold text-center">
            Login to Account
          </h2>
          <p className="text-[14px] font-semibold text-center">
            Fill in your account credentials to sign to Account
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="pt-4 w-[100%] flex flex-col">
              <label htmlFor="email" className="text-primary text-[14px]">
                Email Address <i className="text-red">*</i>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="border rounded py-2 px-3 focus:outline-light"
              />
            </div>
            <div className="py-2 w-[100%] flex flex-col justify-start">
              <label htmlFor="password" className="text-primary text-[14px]">
                Password <i className="text-red">*</i>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="border rounded py-2 px-3 focus:outline-light"
              />
            </div>
            <button className="bg-primary rounded-md text-white font-bold cursor-pointer px-6 py-2">
              Login
            </button>
            {error && (
              <div className="bg-red-300 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm mt-3 text-right" href={"/auth/register"}>
              Don't have an account?{" "}
              <span className="underline text-primary">Register</span>
            </Link>
          </form>
        </div>
        <ToastContainer />
      </div>
      <div className="flex-1 h-full object-cover sideaAuthImageSignUp md:block pt-[20%] px-8 hidden">
        <h1 className="text-white text-[2.5em]">Welcome Back!</h1>
        <h2 className="text-slate-50 text-[20px]">
          Please sign into your account
        </h2>
        <p className="text-slate-300 text-[15px] py-2">
          Freedom at it peak your security in your hand Flex the Web5.0 new
          identity protection
        </p>
      </div>
    </div>
  );
}
