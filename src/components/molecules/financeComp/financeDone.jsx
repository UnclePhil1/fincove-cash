"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CardSelect from "./bankType";
import ImageOne from "@/../../public/Image/thumb.png";
import Image from "next/image";

const FinanceCongrats = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] overflow-y-auto">
      <div className="my-4">
        <h1 className="text-primary text-[2em] font-semibold text-center font-rowdies">
          Great Job!
        </h1>
        <p className=" text-center">You did a good Job</p>
      </div>
      <Image
        src={ImageOne}
        alt="Image"
        width={700}
        height={300}
        className="w-[130px] h-[150px]"
      />
      <Link
        href={"/dashboard/finance/intelligence"}
        title="Fill the form to proceed"
        className={`py-2 mt-5 px-4 md:w-[30%] text-center rounded-md bg-primary text-white opacity-100 cursor-pointer`}
        // onClick={handleProceed}
        // disabled={isSignUpDisabled} // Disable button when signing up
      >
        Get Insight
      </Link>
    </div>
  );
};

export default FinanceCongrats;
