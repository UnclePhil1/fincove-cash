import React from "react";
import Image from "next/image";
import Join from "../../../../public/Image/join.png";
import Link from "next/link";

const Works = () => {
  return (
    <div className="w-[100%] bg-[#E3C0DB] py-10 my-20 text-center flex-col flex lg:flex-row justify-center items-center h-auto">
      <h1 className="text-[#A7368D] font-bold text-[2em] lg:text-[3.5em] px-4">
       Stay In The <br />
       <span className="text-[#F6C32E]">Cove</span>
      </h1>
        <Image
          src={Join}
          alt="join.png"
          width={700}
          height={300}
          className="lg:w-[400px] lg:h-[400px]"
        />
    </div>
  );
};

export default Works;
