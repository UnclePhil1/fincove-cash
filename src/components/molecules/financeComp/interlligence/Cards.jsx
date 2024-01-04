'use client'
import Image from 'next/image';
import React from 'react'
import { MdArrowForward, MdArrowUpward } from 'react-icons/md';
import Lend from "../../../../../public/Image/intel.png";
import Link from 'next/link';

const Cards = () => {
    const income = [
        {
          title: "Total Expenses",
          amount: "N100,000",
          rate: "2.31%",
          date: "From 2 months",
          color: "#5C2D83",
        },
        {
          title: "Total Income",
          amount: "N300,000",
          rate: "1.31%",
          date: "From last months",
          color: "#A6368C",
        },
        {
          title: "Loan Debt",
          amount: "N10,000",
          rate: "2.31%",
          date: "From last months",
          color: "#F5C22E",
        },
      ];
  return (
    <>
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-3 gap-10 py-6 mt-5">
          {income.map((list, i) => (
            <div className={`border border-primary text-white bg-[${list.color}] p-4 rounded-md`} key={i}>
              <div className="flex justify-between items-center pb-4 border-b-primary border border-t-transparent border-r-transparent border-l-transparent">
                <h2 className="font-semibold text-[18px]">{list.title}</h2>
                {/* <MdArrowForward className="text-primary" size={30} /> */}
              </div>
              <div className="py-4">
                <h1 className="text-[1.5em] font-semibold">{list.amount}</h1>
                <span className="flex justify-start items-center gap-2">
                  <span className="flex justify-center items-center bg-yellow-400 p-1 rounded-md">
                    <MdArrowUpward className="text-[10px]" />{" "}
                    <p className="text-[10px]">{list.rate}</p>
                  </span>
                  <p className="text-[13px]">{list.date}</p>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[100%] flex-col mt-10 mb-10 justify-center items-center">
            <center>
                <Image
                    src={Lend}
                    alt="earth.png"
                    // width={600}
                    style={{
                        resize: "contain",
                    }}
                    className="w-[600px]"
                />

                <br />

                <Link
                    href={"#"}
                    title="Fill the form to proceed"
                    className={`py-4 mt-10 px-4 md:w-[60%] text-center rounded-md bg-primary text-white opacity-100 cursor-pointer`}
                    // onClick={handleProceed}
                    // disabled={isSignUpDisabled} // Disable button when signing up
                >
                    Get All Insight
                </Link>
            </center>
        </div>
    </>
  )
}

export default Cards