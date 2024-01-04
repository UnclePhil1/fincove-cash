"use client";
import React, { useState } from "react";
import { Home, SignalWifiStatusbarConnectedNoInternet4Sharp, TransferWithinAStation, CreditScore, Money } from "@mui/icons-material";
import Image from "next/image";
import "../../../src/style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toolbar } from "@mui/material";


const Sidebarp2p = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const SideList = [
    {
        title: "Home",
        icon: <Home />,
        path: "/dashboard",
      },
      {
        title: "Loan Request",
        icon: <Money />,
        path: "/lending/request",
      },
      {
        title: "Loan Offer",
        icon: <CreditScore />,
        path: "/lending/offer",
      },
      {
        title: "Transfer",
        icon: <TransferWithinAStation />,
        path: "/lending/transfer",
      },
      {
        title: "Eligibility status",
        icon: <SignalWifiStatusbarConnectedNoInternet4Sharp />,
        path: "/lending/status",
      },
  ];
  const pathname = usePathname();

  return (
    <div className="w-[100%] lg:block lg:relative fixed top-0">
      <section
        className={`background h-screen duration-300 ${
          hovered ? "w-60 scale-100" : "w-[70px]"
        } p-3 pt-[25px]`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <ul
          className={`${
            hovered ? "mt-[20px]" : "mt-[20px]"
          } flex flex-col justify-start align-start items-start gap-[10px]`}
        >
          {SideList.map((item, i) => (
            <li key={i} className={`${pathname == item.path ? 'bg-[#4d94ff14]  border-l-[5px] border-primary border' : ''} rounded-lg  flex w-[100%] justify-start items-center hover:bg-light`}>
              <span className="py-2 ml-2 text-[25px] text-white">{item.icon}</span>
              <Link
                className={`px-2 text-[15px] text-white rounded  w-[80%] self-center ${
                  hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
                } duration-100`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebarp2p;