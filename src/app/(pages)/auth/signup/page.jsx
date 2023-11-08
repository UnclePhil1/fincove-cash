"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../../../../public/Image/logo.png";
import Link from "next/link";
import "../../../../../src/style.css";
import Password from "../../../../components/atoms/passwordField";
import Emails from "../../../../components/atoms/emailsField";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSignUp = () => {
    if (email && password && isChecked) {
      // Set loading state to true
      setIsSigningUp(true);

      // Simulate signup process delay (3 seconds in this case)
      setTimeout(() => {
        // Save email and password to session storage
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);

        // Redirect to the /dashboard page
        router.push("/dashboard");
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  };

  const isSignUpDisabled = !(email && password && isChecked);

  return (
    <div>
      <div className="flex w-[100%] justify-center items-center p-4 lg:py-10 lg:px-40 bg-white gap-10">
        <div className="bg-background rounded-[20px] h-[100%] p-8 md:w-[40%] flex flex-col justify-start items-start">
          <Image
            src={Logo}
            alt="logo.png"
            width={700}
            height={300}
            className="w-[120px] h-[50px]"
          />
          <div className="pt-10">
            <h2 className="text-primarydark text-[18px] font-semibold">
              Register
            </h2>
            <span className="text-[14px] font-semibold">
              Already have an account?{" "}
              <Link href={"/auth/signin"} className="text-primary">
                {" "}
                Sign In
              </Link>
            </span>
            <div className="pt-4 w-[100%] flex flex-col">
              <label htmlFor="email" className="text-primary text-[14px]">
                Email Address <i className="text-red">*</i>
              </label>
              {/* <Emails setEmail={setEmail} /> */}
              <input
                type="email"
                id="email"
                className="border rounded py-2 px-3 focus:outline-primary"
                onChange={handleEmailChange}
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
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="py-2 w-[100%] flex flex-col justify-start">
              <label
                htmlFor="confirmpassword"
                className="text-primary text-[14px]"
              >
                Confirm Password <i className="text-red">*</i>
              </label>
              {/* <Password setPassword={setConfirmPassword} /> */}
              <input
                type="password"
                id="confirmpassword"
                className="border rounded py-2 px-3 focus:outline-primary"
                onChange={() => setConfirmPassword(confirmPassword)}
                required
              />
            </div>
            <div className="flex items-center gap-[1rem] my-2">
              <div className="md:w-[100%] w-[100%] bg-darkgray h-[1px]"></div>
              <div>Or</div>
              <div className="md:w-[100%] w-[100%] bg-darkgray h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <input
                type="checkbox"
                className="bg-primary"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p className="text-[14px] py-4">
                I certify that i have read and accept the{" "}
                <i className="text-primary">Terms of Use</i> and{" "}
                <i className="text-primary">Privacy Policy</i>
              </p>
            </div>
            <button
              title="Fill the form to enable signup"
              className={`py-2 px-4 w-[100%] rounded-md bg-primary text-white ${
                isSigningUp
                  ? "opacity-1 cursor-not-allowed"
                  : "opacity-100"
              }`}
              onClick={handleSignUp}
              disabled={isSignUpDisabled || isSigningUp} // Disable button when signing up
            >
              {isSigningUp ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
