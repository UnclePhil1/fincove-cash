"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowUpward } from 'react-icons/md'
import Lend from "../../../../../../public/Image/intel.png";

const Income = () => {
  return (
    <div className='w-full h-full'>
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-1 gap-10 py-6 mt-5">
          {/* {income.map((list, i) => ( */}
            <div className={`border border-primary text-white text-center bg-[#A6368C] p-4 rounded-md`}>
              <div className="flex justify-center items-center pb-4 border-b-primary border border-t-transparent border-r-transparent border-l-transparent">
                <h2 className="font-semibold text-[18px] text-center">Total Income</h2>
                {/* <MdArrowForward className="text-primary" size={30} /> */}
              </div>
              <div className="py-4">
                <h1 className="text-[1.5em] text-center font-semibold">N100,000</h1>
                <span className="flex justify-center mt-2 items-center gap-2">
                  <span className="flex justify-center items-center bg-yellow-400 p-1 rounded-md">
                    <MdArrowUpward className="text-[10px]" />{" "}
                    <p className="text-[10px]">2.31%</p>
                  </span>
                  <p className="text-[13px]">From Last month</p>
                </span>
              </div>
            </div>
          {/* ))} */}
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
    </div>
  )
}

export default Income;