import Image from "next/image";
import React from "react";
import Earth from "../../../../public/Image/intro.png";
import Link from "next/link";
import "../../../../src/style.css";

const Introduction = () => {
  return (
    <div className="flex justify-between items-center gap-10 bg-white lg:h-[100vh] md:px-10 p-4">
      <div className="md:px-10 md:w-[600px]">
        <h1 className="text-[2.5em] font-semibold text-[#A7368D]">
          Experience Fintech Evolution With
          <span className="text-[#F6C32E] pl-2"> Fincove</span>
        </h1>
        <p className="text-primary">
          We use super-safe Web 5 technology to keep your Finance and
          information secure, making it easy and safe for you to manage your
          cash.
        </p>
        <div className="flex flex-col md:flex-row gap-10 mt-5">
          <Link
            href={"/auth/register"}
            className="md:flex text-white py-2 px-4 rounded bg-primary"
          >
            Get Started
          </Link>
        </div>
      </div>
      <Image
        src={Earth}
        alt="earth.png"
        width={700}
        height={300}
        className="hidden lg:block w-[50%]"
      />
    </div>
  );
};

export default Introduction;
