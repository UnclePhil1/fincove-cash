'use client'
import React from "react";
import LendNav from "../../../components/molecules/lendNav";
import LendSideBar from "../../../components/molecules/lendSideBar";
import Lend from "../../../../public/Image/lend.png";
import Image from "next/image";
import Link from "next/link";
import TableList from "../../../components/molecules/table";
import '../../../style.css'

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Peter Jones",
    email: "peter.jones@example.com",
    phone: "098-765-4321",
  },
];

const Lending = () => {
  return (
    <div className="flex flex-row relative w-[100%] lg:h-screen overflow-hidden">
      <div className="w-[100%]">
        <div className="flex flex-col w-[100%] top-0 left-0 bg-white z-[10] sticky">
          {/* <LendNav /> */}
          <div className="w-[100%] flex justify-start items-center mt-2 bg-background">
            <div className="w-[100%] h-[100%] flex justify-center items-center p-4">
              <div className="overflow-y-auto lg:w-[80%] lg:h-[80%] shadow-sm bg-white rounded-md p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-around items-center gap-5">
                  <div className="p-4 rounded-md bg-[#fff] h-[150px] flex flex-row justify-center items-center shadow-md gap-3">
                    <Image
                      src={Lend}
                      alt="earth.png"
                      width={700}
                      height={300}
                      className="w-[60px] h-[60px] rounded-full"
                    />
                    <Link
                      href={"/lending/walletandfunding"}
                      className="flex flex-col justify-start items-start"
                    >
                      <p className="text-[15px] text-start">Lend Money</p>
                    </Link>
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="border border-primarydark rounded py-2 px-3 focus:outline-primary"
                    required
                    placeholder="Search Lender"
                  />
                </div>
                <h1 className="text-primarydark text-[1.2em] mt-6">
                  List of Previous Lender
                </h1>
                  <TableList users={users} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lending;
