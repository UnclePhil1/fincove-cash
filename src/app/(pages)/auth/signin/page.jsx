"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../../../../public/Image/logo.png";
import Link from "next/link";
import "../../../../../src/style.css";
import Emails from "../../../../components/atoms/emailsField";
import Password from "../../../../components/atoms/passwordField";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    // try {
    //   // Send a POST request to your authentication endpoint
    //   const response = await fetch("/auth/signin", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   // If authentication is successful (for example, status code 200)
    //   if (response.ok) {
    //     // Save user credentials to session storage
    //     sessionStorage.setItem("email", email);
    //     sessionStorage.setItem("password", password);

    //     // Redirect to dashboard
        router.push("/dashboard");
    //   } else {
    //     // If authentication fails, display error message
    //     setError("Invalid email or password. Please try again.");
    //   }
    // } catch (error) {
    //   // Handle errors from the API request
    //   console.error("Error signing in:", error);
    // }
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row w-[100%] justify-center items-center p-4 lg:py-10 lg:px-20 bg-white gap-10">
        <div className="bg-background rounded-[20px] h-[100%] p-8 md:w-[40%] flex flex-col justify-start items-start">
          <Image
            src={Logo}
            alt="logo.png"
            width={700}
            height={300}
            className="w-[120px] h-[50px]"
          />
          <div className="pt-10 flex flex-col justify-center items-center w-[100%]">
            <h2 className="text-primarydark text-[18px] font-semibold text-center">
              Login to Account
            </h2>
            <p className="text-[14px] font-semibold text-center">
              Fill in your account credentials to sign to Account
            </p>
            <div className="pt-4 w-[100%] flex flex-col">
              <label htmlFor="email" className="text-primary text-[14px]">
                Email Address <i className="text-red">*</i>
              </label>
              {/* <Emails setEmail={setEmail} /> */}
              <input
                type="email"
                id="email"
                className="border rounded py-2 px-3 focus:outline-primary"
                required
              />
            </div>
            <div className="py-2 w-[100%] flex flex-col justify-start">
              <label htmlFor="password" className="text-primary text-[14px]">
                Password <i className="text-red">*</i>
              </label>
              {/* <Password setPassword={setPassword} /> */}
              <input
                type="password"
                id="password"
                className="border rounded py-2 px-3 focus:outline-primary"
                required
              />
            </div>
            <div className="text-red">{error}</div>
            <button
              className="py-2 px-4 w-[100%] rounded-md bg-primary text-white mt-4"
              onClick={handleSignIn}
            >
              SignIn
            </button>

            <div className="flex items-center gap-[1rem] my-2">
              <div className="md:w-[100%] w-[100%] bg-darkgray h-[1px]"></div>
              <div>Or</div>
              <div className="md:w-[100%] w-[100%] bg-darkgray h-[1px]"></div>
            </div>
            <Link
              href={"/auth/signup"}
              className="text-center py-2 px-4 w-[100%] mt-4 rounded-md border border-primary text-primary"
            >
              New here? SignUp Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
