"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CardSelect from "./bankType";

const AccontDetails = () => {
  return (
    <div>
      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="my-4">
          <h1 className="text-primary text-[2em] font-semibold text-center font-rowdies">
            Sync Account
          </h1>
          <p className=" text-center">Link your Debit Card</p>
        </div>

        <div className="my-4 flex flex-col md:flex-row gap-5">
          <CardSelect />
          <input
            type="text"
            name="text"
            placeholder="Account Name"
            className="border outline-primarydark border-primarydark rounded py-4 bg-transparent px-2 focus:outline-primary focus:border-primary w-[100%]"
          />
        </div>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          className="border outline-primarydark border-primarydark rounded py-4 bg-transparent px-2 focus:outline-primary focus:border-primary w-[100%] lg:w-[58%]"
        />
        <div className="my-4 flex flex-col md:flex-row gap-5">
          <input
            type="date"
            name="date"
            placeholder="Expiry Date"
            className="border outline-primarydark border-primarydark rounded py-4 bg-transparent px-2 focus:outline-primary focus:border-primary w-[100%]"
          />
          <input
            type="number"
            name="number"
            placeholder="CVV"
            className="border outline-primarydark border-primarydark rounded py-4 bg-transparent px-2 focus:outline-primary focus:border-primary w-[100%]"
          />
        </div>
        <Link
          href={"/dashboard/finance/otp"}
          title="Fill the form to proceed"
          className={`py-2 mt-5 px-4 w-[30%] text-center rounded-md bg-primary text-white opacity-100 cursor-pointer`}
          // onClick={handleProceed}
          // disabled={isSignUpDisabled} // Disable button when signing up
        >
          Proceed
        </Link>
      </div>
    </div>
  );
};

export default AccontDetails;
