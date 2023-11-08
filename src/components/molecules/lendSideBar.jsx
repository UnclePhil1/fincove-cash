"use client";
import React, { useState } from "react";
// import {
//   Home,
//   AdminPanelSettings,
//   People,
//   ModelTraining,
//   Analytics,
//   Settings,
// } from "@mui/icons-material";
import Image from "next/image";
import Logo from "../../../public/Image/logo.png";
import "../../../src/style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LendSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="relative w-[100%] h-[100%] hidden sm:block shadow-md">
      <section
        className={`background h-screen duration-300"
        p-3 pt-[25px]`}
      >
        <ul
          className={`
          flex flex-col justify-start align-start items-start gap-[10px]`}
        >
          {/* <li
              key={i}
              className={`${
                pathname == item.path
                  ? "bg-[#4d94ff14]  border-l-[5px] border-primary border"
                  : ""
              } rounded-lg  flex w-[100%] justify-start items-center hover:bg-light`}
            >
              <span className="py-2 ml-2 text-[25px] text-primary">
                {item.icon}
              </span>
              <Link
                className={`px-2 text-[15px] rounded  w-[80%] self-center ${
                  hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
                } duration-100`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li> */}
          <li>Lending | P2P</li>
        </ul>
      </section>
    </div>
  );
};

export default LendSidebar;
