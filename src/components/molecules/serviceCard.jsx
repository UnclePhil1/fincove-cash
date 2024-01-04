"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../../style.css";
import Link from "next/link";

const ServiceCard = () => {
  const ServiceCardArray = [
    {
      url: "/Image/smart.jpg",
      header: "Smart Analytics",
      text: "Get access to financial data, know how your money flows and goes.",
    },
    {
      url: "/Image/crypto.jpg",
      header: "Crypto Analytics",
      text: "Explore the world of cryptocurrencies and stay updated with market trends.",
    },
    {
      url: "/Image/p2p.jpg",
      header: "Peer-to-Peer",
      text: "Experience seamless peer-to-peer transactions with our secure platform.",
    },
    {
      url: "/Image/finance.jpg",
      header: "Financial Insights",
      text: "Gain insights into financial markets and make informed investment decisions.",
    },
    {
      url: "/Image/decent.jpg",
      header: "Decentralised Apps",
      text: "Dive into the next era of decentralized applications with Web 5.",
    },
    {
      url: "/Image/secure.jpg",
      header: "Data Protection",
      text: "our data security is our top priority as you borrow or access credit",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handlePanelClick = (index) => {
    removeActiveClasses();
    setActiveIndex(index);
  };

  const removeActiveClasses = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel, index) => {
      panel.addEventListener("click", () => handlePanelClick(index));
    });

    return () => {
      // Cleanup event listeners when the component unmounts
      panels.forEach((panel, index) => {
        panel.removeEventListener("click", () => handlePanelClick(index));
      });
    };
  }, []); // Run the effect once on component mount

  return (
    <div className="bg-background">
      <h1 className="self-start items-start text-[#A7368D] font-semibold text-[2.5em] px-4">
        Why <span className="text-[#F6C32E]">Fincove</span>
      </h1>
      <div className="servicesBox">
        {ServiceCardArray.map((serviceCard, id) => (
          <div
            key={id}
            className={`relative panel overflow-hidden ${
              id === activeIndex ? "active" : ""
            }`}
          >
            <div className="overlayContainer">
              <Image
                src={serviceCard.url}
                alt={"serviceCards"}
                width={700}
                height={300}
                className="w-full h-full object-cover rounded-[50px]"
              />
              <div className="overlay"></div>
            </div>
            <h1 className="absolute top-5 left-5 ">{serviceCard.header}</h1>
            <p className="absolute bottom-[70px] left-5 ">{serviceCard.text}</p>
            <Link
              href={"/auth/signup"}
              className="absolute bottom-[20px] left-5 bg-primarydark text-white py-2 px-4 rounded-md Link"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
