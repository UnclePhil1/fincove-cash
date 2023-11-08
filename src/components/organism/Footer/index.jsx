import React from "react";
import Image from "next/image";
import Logo from "../../../../public/Image/logo.png";
import "../../../../src/style.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-[100%] bg-primary px-4 pt-10 shadow-md h-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center px-8 gap-10">
        <div className="flex flex-col justify-start">
          <Image
            src={Logo}
            alt="Logo.png"
            width={700}
            height={300}
            className="w-[130px] h-[70px]"
          />
        </div>
        <div>
          <h3 className="text-[20px] font-semibold text-white">About | FAQS</h3>
        </div>
        <div>
          <h2 className="text-[20px] font-semibold text-white">
            Subscribe to our newsletter
          </h2>
          <input
            type="email"
            id="email"
            className="border rounded py-2 px-3 focus:outline-primary"
            placeholder="Enter Your Email"
            required
          />
          <Link
            href={"/auth/signup"}
            className="text-white py-2 px-4 bg-[#A7368D] w-[200px] text-center flex my-2"
            style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px",borderBottomLeftRadius: "10px",borderBottomRightRadius: "10px", textAlign: "center" }}
          >
            Subscibe
          </Link>
        </div>
      </div>
      <div className="py-5 text-center">
        <hr className="bg-primary" />
        <span className="py-2 text-[#fff]">
          Copyright <strong>@FINCOVE</strong>|Sponsored by{" "}
          <Link href={"fcmb.com"} className="text-[#fff] font-semibold">
            FCMB
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
