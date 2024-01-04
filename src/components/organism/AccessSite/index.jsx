import Image from "next/image";
import React from "react";

const AccessSite = () => {
  return (
    <div className="py-8 md:h-[70vh] flex flex-col justify-center items-center">
      <h1 className="self-start items-start text-[#A7368D] font-semibold text-[2.5em] px-4">
        Access Financial insights in
        <span className="text-[#F6C32E]">3 easy steps</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 pt-8">
        <div className="items-center self-center flex flex-col text-primarydark">
          <Image
            src={"/Image/signup.png"}
            alt="access-site"
            width={700}
            height={300}
            className="w-20 h-20"
          />
          <p>Sign Up</p>
        </div>
        <Image
            src={"/Image/arrow.png"}
            alt="access-site"
            width={700}
            height={300}
            className="w-20 hidden md:block"
          />
        <div className="items-center self-center flex flex-col text-primarydark">
          <Image
            src={"/Image/sync.png"}
            alt="access-site"
            width={700}
            height={300}
            className="w-20 h-20"
          />
          <p>Synchronize Financial Account </p>
        </div>
        <Image
            src={"/Image/arrow.png"}
            alt="access-site"
            width={700}
            height={300}
            className="w-20 hidden md:block"
          />
        <div className="items-center self-center flex flex-col text-primarydark">
          <Image
            src={"/Image/access.png"}
            alt="access-site"
            width={700}
            height={300}
            className="w-20 h-20"
          />
          <p>Access AI insights and Data analytics </p>
        </div>
      </div>
    </div>
  );
};

export default AccessSite;
