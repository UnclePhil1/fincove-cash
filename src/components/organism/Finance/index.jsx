import Image from "next/image";
import React from "react";
import Wallet from "../../../../public/Image/ai.png";
import Send from "../../../../public/Image/smart.png";
import Report from "../../../../public/Image/hand.png";
import "../../../../src/style.css";
import Link from "next/link";

const Finance = () => {
  const array = [
    {
      src: Report,
      text: "Peer2Peer Lending",
      paragraph:
        "Lend to friends and access credit in Naira currency and Digital currencies.",
    },
    {
      src: Wallet,
      text: "Financial Intelligence",
      paragraph: "Manage your finances with data driven insights .",
    },
    {
      src: Report,
      text: "Smart Analytics",
      paragraph:
        "Get access to financial data, know how your money flows and goes.",
    },
  ];

  return (
    <div className="w-[100%] px-4 py-10 text-center flex-col flex justify-center items-center bg-white h-auto">
      <h1 className="self-start items-start text-[#A7368D] font-semibold text-[2.5em] px-4">
        Why <span className="text-[#F6C32E]">Fincove</span>
      </h1>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {array.map((list, index) => (
          <div
            key={index}
            className="p-4 rounded-[20px] bg-[#FCF7F1] lg:w-[300px] flex flex-col justify-center items-center gap-16 relative"
          >
            <div className="flex flex-col justify-center items-center">
              <h2 className="py-4 font-semibold text-[25px] text-center">
                {list.text}
              </h2>
              <p className="text-[15px] text-center">{list.paragraph}</p>
              <Link
                href={"/auth/signup"}
                className="text-white py-2 px-4 bg-[#A7368D] w-[200px] my-2 text-center rounded-bl-md rounded-tl-md rounded-tr-md rounded-br-md"
              >
                Get Started
              </Link>
            </div>
            <Image
              src={list.src}
              alt="earth.png"
              width={700}
              height={300}
              className="w-[150px] h-[150px]"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-5 text-center">
        <Link
          href={"/auth/signin"}
          className="md:flex text-white py-2 px-4 rounded signin"
        >
          Sign In
        </Link>
        <Link
          href={"/auth/signup"}
          className="md:flex text-primary py-2 px-4 rounded border-2 border-primary hover:border-[#BF894F]"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Finance;
