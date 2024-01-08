"use client";
import React, { useState } from "react";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import Transfer from "./components/transfer";
import Link from "next/link";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const WalletsAndFundings = () => {
  const [page, setPage] = React.useState("Deposit");
  const [isVisible, setIsVisible] = useState(false);
  const amount = "$20.00";

  const handleToggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="p-4">
        <nav className="flex justify-start items-center gap-10">
          <Link
            href="#"
            className={`hover:border-b  hover:hover:bg-primarydark hover:text-white ${
              page == "Deposit" && "bg-primary text-white"
            } text-[#421638] rounded px-3 py-2 text-sm font-medium`}
            onClick={() => setPage("Deposit")}
            aria-current="page"
          >
            Deposit
          </Link>
          <Link
            href="#"
            className={`hover:border-b hover:hover:bg-primarydark hover:text-white ${
              page == "Withdraw" && "bg-primary text-white"
            } text-[#421638] rounded px-3 py-2 text-sm font-medium`}
            onClick={() => setPage("Withdraw")}
          >
            Withdraw
          </Link>
          <Link
            href="#"
            className={`hover:border-b hover:bg-primarydark hover:text-white ${
              page == "Transfer" && "bg-primary text-white"
            } text-[#421638] rounded px-3 py-2 text-sm font-medium`}
            onClick={() => setPage("Transfer")}
          >
            Transfer
          </Link>
        </nav>
        <div className="mt-4 flex justify-start items-center gap-2">
          <h1 className="text-[1.3em] font-semibold p-0 m-0">Balance.</h1>
          <div>
            <span className="text-[1.2em] p-0 m-0">
              {isVisible ? amount : "*******"}
            </span>
            <button
              onClick={handleToggleVisibility}
              className="focus:outline-none"
            >
              {isVisible ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
      {page == "Deposit" && <Deposit />}
      {page == "Withdraw" && <Withdraw />}
      {page == "Transfer" && <Transfer />}
      </div>
    </div>
  );
};

export default WalletsAndFundings;
