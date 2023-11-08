'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Lend from "../../../../public/Image/lend.png";
import Coin from "../../../../public/Image/coin.png";
import Report from "../../../../public/Image/report.png";
import Invest from "../../../../public/Image/invest.png";
import Image from "next/image";
import Link from "next/link";

const Diagram = () => {
  const array = [
    {
      src: Coin,
      text: "Asset coin",
      paragraph: "Get to know the market",
      link: '/notFound'
    },
    {
      src: Lend,
      text: "P2P Lending",
      paragraph:
        "Get access to our quick loan",
      link: '/lending'
    },
    {
      src: Report,
      text: "Reports & analytics",
      paragraph:
        "Check how far you have trade",
      link: '/notFound'
    },
    {
      src: Invest,
      text: "Invest",
      paragraph: "Stock Investment",
      link: '/notFound'
    },
  ];

  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-start items-center w-[100%] bg-background">
        {array.map((list, index) => (
          <div
            key={index}
            className="p-4 rounded-md bg-[#fff] h-[200px] flex flex-row justify-center items-center shadow-md gap-3"
          >
            <Image
              src={list.src}
              alt="earth.png"
              width={700}
              height={300}
              className="w-[60px] h-[60px] rounded-full"
            />
            <Link href={list.link} className="flex flex-col justify-start items-start">
              <h2 className="py-2 font-semibold text-[18px] text-start"> 
                {list.text}
              </h2>
              <p className="text-[15px] text-start">{list.paragraph}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diagram;
