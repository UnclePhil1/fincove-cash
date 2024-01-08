import React from "react";
import Image from "next/image";
import Logo from "../../../../public/Image/footer.png";
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
            className="w-[130px] h-[50px]"
          />
        </div>
        <div>
          <h3 className="text-[20px] font-semibold text-white">About | FAQS</h3>
        </div>
        <div>
          <h2 className="text-[20px] font-semibold text-white">
            Subscribe to our newsletter
          </h2>
          <p className="text-white text-[15px] py-2">
            Subscribe to our newsletter to get update and news on the new
            development about Fincove. Don not miss out on new update and giveaway
          </p>
          <input
            type="email"
            id="email"
            className="border rounded py-2 px-3 focus:outline-primary"
            placeholder="Enter Your Email"
            required
          />
          <Link
            href={"/auth/register"}
            className="text-white py-2 px-4 bg-[#A7368D] w-[200px] text-center flex my-2"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              textAlign: "center",
            }}
          >
            Subscibe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
