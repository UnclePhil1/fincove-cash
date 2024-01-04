import React from "react";
import Info from "@/../../public/Image/prop.png";
import Kyc from "@/../../public/Image/kyc.png";
import Camp from "@/../../public/Image/camp.png";
import Check from "@/../../public/Image/check.png";
import Image from "next/image";
import Link from "next/link";
const Profile = () => {
  const array = [
    {
      src: Info,
      text: "Personal information",
      time: "Browse and upload",
    },
    {
      src: Kyc,
      text: "ID Verification",
      time: "Browse and upload",
    },
    {
      src: Camp,
      text: "Selfie",
      time: "Browse and upload",
    },
    {
      src: Check,
      text: "Review",
      time: "Browse and upload",
    },
  ];

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="md:w-[50%] my-4 border-b--purple-300 border border-t-transparent border-r-transparent border-l-transparent py-4">
        <h1 className="text-primary text-[2em] font-semibold text-center font-rowdies">
          KYC Verification
        </h1>
        <p className=" text-center">
          Verify your identity to access the Fincove P2P lending
        </p>
      </div>
      <div className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-10 pb-[20%] md:pb-0 mb-0 md:mb-[15%]">
        <div>
          <div className="w-[100%] flex flex-col justify-end items-end border-r-transparent md:border-r-purple-300 border border-t-transparent border-b-transparent border-l-transparent p-4">
            {array.map((usage, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-5"
              >
                <div className="flex justify-end items-center py-4">
                  <div className="flex flex-col justify-end items-end pr-10">
                    <h2 className="font-semibold text-[18px] text-end text-primary">
                      {usage.text}
                    </h2>
                    <p className="text-end text-primary">{usage.time}</p>
                  </div>
                  <Image
                    src={usage.src}
                    alt="earth.png"
                    width={700}
                    height={300}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="py-4 border-b-purple-300 border border-t-transparent border-r-transparent border-l-transparent float-left  w-[100%] flex flex-col">
            <p className="text-[10px]">Step 1/4</p>
            <h1 className="font-semibold">Verify your identity</h1>
            <p className="text-[13px]">
              Fill in the parts inside to the informations
            </p>
          </div>
          <div className="pt-4 w-[100%] flex flex-col">
            <label htmlFor="email" className="text-primary text-[14px]">
              First Name <i className="text-red">*</i>
            </label>
            {/* <Emails setEmail={setEmail} /> */}
            <input
              type="text"
              id="fname"
              className="border rounded-lg py-4 px-3 focus:outline-primary"
              required
            />
          </div>
          <div className="pt-4 w-[100%] flex flex-col">
            <label htmlFor="email" className="text-primary text-[14px]">
              Last Name <i className="text-red">*</i>
            </label>
            <input
              type="text"
              id="lname   "
              className="border rounded-lg py-4 px-3 focus:outline-primary"
              required
            />
          </div>

          <div className="pt-4 w-[100%] flex flex-col mb-4">
            <label htmlFor="email" className="text-primary text-[14px]">
              Email <i className="text-red">*</i>
            </label>
            <input
              type="email"
              id="email"
              className="border rounded-lg py-4 px-3 focus:outline-primary"
              required
            />
          </div>
          <button className="py-3 px-6 rounded-lg links bg-purple-800 text-white text-center justify-center items-center">
            <Link href={"/dashboard/userboard"}>Proceed</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
