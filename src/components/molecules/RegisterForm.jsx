"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../src/style.css";
import Image from "next/image";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      toast.warning("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        toast.error("User already exists");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        toast.success("Registration Successful!");
        router.push("/auth/login");
      } else {
        console.log("User registration failed.");
        toast.error("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <div className="grid place-items-center h-screen w-[30%]">
        <Image
          src={"/Image/logo.png"}
          alt="logo.png"
          width={700}
          height={300}
          className="w-[120px] h-[50px]"
        />
        <div className="shadow-sm p-5 w-[100%]">
          <h2 className="text-primarydark text-[18px] font-semibold">
            Register
          </h2>
          <span className="text-[14px] font-semibold">
            Already have an account?{" "}
            <Link href={"/auth/login"} className="text-primary">
              {" "}
              Sign In
            </Link>
          </span>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="pt-4 w-[100%] flex flex-col">
              <label htmlFor="email" className="text-primary text-[14px]">
                Full Name <i className="text-red">*</i>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="border rounded py-2 px-3 focus:outline-light"
              />
            </div>
            <div className="pt-4 w-[100%] flex flex-col">
              <label htmlFor="email" className="text-primary text-[14px]">
                Email <i className="text-red">*</i>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Mail"
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
            <button className="bg-primary text-white font-bold cursor-pointer px-6 py-2 rounded-md">
              Register
            </button>

            {error && (
              <div className="bg-red-300 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm mt-3 text-right" href={"/auth/login"}>
              Already have an account?{" "}
              <span className="underline text-primary">Login</span>
            </Link>
          </form>
        </div>
        <ToastContainer />
      </div>
      <div className="flex-1 h-full object-cover sideaAuthImageSignIn hidden md:block pt-[20%] px-8">
        <h1 className="text-white text-[2.5em]">Welcome User</h1>
        <h2 className="text-slate-50 text-[20px]">
          Please sign into your account
        </h2>
        <p className="text-slate-300 text-[15px] py-2">
          Enjoy unlimited Evolution with web5.0 Identity security{" "}
        </p>
      </div>
    </div>
  );
}
