"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CardSelect from "./bankType";
import ImageOne from "@/../../public/Image/logo.png";
import Image from "next/image";

const OtpAuth = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] overflow-y-auto">
      <div className="my-4">
        <h1 className="text-primary text-[2em] font-semibold text-center font-rowdies">
          Enter OTP
        </h1>
        <p className=" text-center">Verify using the code sent to your email</p>
      </div>
      <div className="w-[100%] md:w-[50%] mt-3 p-4 bg-white flex flex-col justify-center items-center rounded-md shadow-md">
        <Image
          src={ImageOne}
          alt="Image"
          width={700}
          height={300}
          className="w-[150px] h-[70px]"
        />
        <h3 className="font-semibold text-center font-rowdies mt-2">Verification</h3>
        <p className=" text-center">
          Enter the 4-digits code to <br /> your email to continue
        </p>
        <div className="my-4 grid grid-cols-4 justify-center items-center gap-5 w-[60%]">
          <input
            type="text"
            name="text"
            className="border outline-primarydark border-primarydark rounded py-2 bg-transparent px-2 focus:outline-primary focus:border-primary text-center"
          />
          <input
            type="text"
            name="text"
            className="border outline-primarydark border-primarydark rounded py-2 bg-transparent px-2 focus:outline-primary focus:border-primary text-center"
          />
          <input
            type="text"
            name="text"
            className="border outline-primarydark border-primarydark rounded py-2 bg-transparent px-2 focus:outline-primary focus:border-primary text-center"
          />
          <input
            type="text"
            name="text"
            className="border outline-primarydark border-primarydark rounded py-2 bg-transparent px-2 focus:outline-primary focus:border-primary text-center"
          />
        </div>
        <p className=" text-center mt-2">
        I did not receive the code.
        </p>
        <button className="font-semibold text-center font-rowdies text-light">Resend Code!</button>
        <Link
          href={"/dashboard/finance/congrats"}
          title="Fill the form to proceed"
          className={`py-2 mt-5 px-4 md:w-[30%] text-center rounded-md bg-primary text-white opacity-100 cursor-pointer`}
          // onClick={handleProceed}
          // disabled={isSignUpDisabled} // Disable button when signing up
        >
          Proceed
        </Link>
      </div>
    </div>
  );
};

export default OtpAuth;
