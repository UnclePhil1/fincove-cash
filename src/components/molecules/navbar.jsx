'use client'
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleLinkClick = () => {
    setShow(show);
  };

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-8 md:p-4 shadow-md bg-white z-10">
        <Link href="/" className="font-bold text-black self-start">
          <Image
            src={Logo}
            alt="logo.png"
            width={700}
            height={300}
            className="w-[120px] h-[50px]"
          />
        </Link>
        <div
          className={`${
            show ? "block" : "hidden lg:flex"
          } flex gap-10 justify-center md:justify-between items-center w-[60%] responsive`}
        >
          <ul className="flex lg:space-x-[30px] flex-col lg:flex-row text-center self-center">
            <Link href="/notFound" passHref onClick={handleLinkClick}
              className=
              {`font-medium links text-gray-500 hover:text-black ${
                isActive("/notFound") ? "text-black" : ""
              }`}>
              About
            </Link>
            <Link href="/notFound" passHref onClick={handleLinkClick}
              className=
              {`font-medium links text-gray-500 hover:text-black ${
                isActive("/notFound") ? "text-black" : ""
              }`}>
              FAQ
            </Link>
          </ul>

          <div className="flex flex-col md:flex-row gap-10">
            <Link href={"/auth/signin"} passHref onClick={handleLinkClick}
              className="md:flex text-white py-2 px-4 rounded signin"> Sign In
            </Link>
            <Link href={"/auth/signup"} passHref onClick={handleLinkClick}>
              onClick={handleLinkClick}
              className="md:flex text-white py-2 px-4 rounded signup" Sign Up
            </Link>
          </div>
        </div>
        <button
          onClick={handleShow}
          className="mx-8 w-[30px] h-[30px] fixed lg:relative top-3 right-3 lg:hidden z-30"
        >
          <MdMenu size={34} />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
