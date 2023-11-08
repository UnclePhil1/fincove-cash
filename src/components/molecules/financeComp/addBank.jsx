"use client";
import React, { useState, useEffect } from "react";
import MultipleSelect from "./bankApi";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AddBank = () => {
  const [number, setNumber] = useState("");
  const [bank, setBank] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isProceed, setIsProceed] = useState(false);
  const router = useRouter();

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  // Function to handle password input change
  const handleBankChange = (e) => {
    setBank(e.target.value);
  };
  const handleProceed = () => {
    if (number && bank && isChecked) {
      setIsProceed(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  };
  const isSignUpDisabled = !(number && bank && isChecked);

  return (
    <div>
      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="my-4">
          <h1 className="text-primary text-[2em] font-semibold text-center font-rowdies">
            Sync Account
          </h1>
          <p className=" text-center">
            Link your bank details to sync with Fincove.
          </p>
        </div>

        <div className="my-4 flex flex-col gap-5">
          <input
            type="number"
            name="number"
            placeholder="Account Number"
            onChange={handleNumberChange}
            className="border outline-primarydark border-primarydark rounded py-4 bg-transparent px-2 focus:outline-primary focus:border-primary w-[100%]"
          />
          <MultipleSelect onChange={handleBankChange} />
          <Link
            href={"/dashboard/finance/accountDetails"}
            title="Fill the form to proceed"
            className={`py-2 mt-5 px-4 w-[100%] text-center rounded-md bg-primary text-white opacity-100 cursor-pointer`}
            // onClick={handleProceed}
            // disabled={isSignUpDisabled} // Disable button when signing up
          >
            Proceed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddBank;
