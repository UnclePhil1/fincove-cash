"use client";
import React, { useState } from "react";
import Lend from "@/../../public/Image/lend.png";
import Coin from "@/../../public/Image/coin.png";
import Report from "@/../../public/Image/report.png";
import Invest from "@/../../public/Image/invest.png";
import Image from "next/image";
import Link from "next/link";

const ComingSoonModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : "closed"}`}>
      <div className="modal-content">
        <h2>Coming Soon</h2>
        <p className="text-[1.2em] font-semibold">This feature is under development and will be available soon.</p>
        <button onClick={onClose} className="bg-blue-100 py-2 px-4 rounded-md mt-4">Close</button>
      </div>
    </div>
  );
};

const Diagram = () => {
  const array = [
    {
      src: Coin,
      text: "Asset OverView",
      paragraph: "Get to know the market",
      link: "/dashboard/Overview",
    },
    {
      src: Lend,
      text: "P2P Lending",
      paragraph: "Get access to our quick loan",
      link: "/lending",
    },
    {
      src: Report,
      text: "Reports & analytics",
      paragraph: "Check how far you have trade",
      link: "/notFound",
    },
    {
      src: Invest,
      text: "Invest",
      paragraph: "Stock Investment",
      link: "/notFound",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-start items-center w-[100%] bg-background">
        {array.map((list, index) => (
          <div
            key={index}
            className="relative p-4 rounded-md bg-[#fff] h-[200px] flex flex-row justify-center items-center shadow-md gap-3"
          >
            <Image
              src={list.src}
              alt="earth.png"
              width={700}
              height={300}
              className="w-[60px] h-[60px] rounded-full"
            />
            <Link
              href={list.link}
              className="flex flex-col justify-start items-start"
            >
              <h2 className="py-2 font-semibold text-[18px] text-start">
                {list.text}
              </h2>
              <p className="text-[15px] text-start">{list.paragraph}</p>
            </Link>
              {index >= 2 ? (
                <button onClick={() => openModal(list.link)} className="absolute w-full h-full p-20 top-0 left-0">
                  
                </button>
              ) : null}
          </div>
        ))}
      </div>
      <ComingSoonModal isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  );
};

export default Diagram;
