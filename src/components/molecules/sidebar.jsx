"use client";
import React, { useState } from "react";
import {
  Home,
  AdminPanelSettings,
  People,
  ModelTraining,
  Analytics,
  Settings,
  Money,
} from "@mui/icons-material";
import "../../../src/style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
    // Redirect to the homepage after successful logout
    router.push("/");
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const SideList = [
    {
      title: "Dashboard",
      icon: <Home />,
      path: "/dashboard",
    },
    {
      title: "Account",
      icon: <AdminPanelSettings />,
      path: "/dashboard/profile",
    },
    {
      title: "Finance Intelligence",
      icon: <ModelTraining />,
      path: "/dashboard/finance",
    },
    {
      title: "P2P Loans",
      icon: <Money />,
      path: "/lending",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/dashboard/settings",
    },
    {
      title: "Supports",
      icon: <Analytics />,
      path: "/dashboard/support",
    },
  ];
  const pathname = usePathname();

  return (
    <div className="w-[100%] lg:block lg:relative fixed top-0">
      <section
        className={`background h-screen duration-300 ${
          hovered ? "w-60 scale-100" : "w-[70px]"
        } p-3 pt-[25px]`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <ul
          className={`${
            hovered ? "mt-[20px]" : "mt-[20px]"
          } flex flex-col justify-start align-start items-start gap-[10px]`}
        >
          {SideList.map((item, i) => (
            <li
              key={i}
              className={`${
                pathname == item.path
                  ? "bg-[#4d94ff14]  border-l-[5px] border-primary border"
                  : ""
              } rounded-lg  flex w-[100%] justify-start items-center hover:bg-light`}
            >
              <span className="py-2 ml-2 text-[25px] text-white">
                {item.icon}
              </span>
              <Link
                className={`px-2 text-[15px] text-white rounded  w-[80%] self-center ${
                  hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
                } duration-100`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <button
            onClick={handleLogout}
            className={`rounded-lg  flex w-[100%] justify-start items-center hover:bg-light text-white py-2 px-4  ${
              hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
            } duration-100`}
          >
            Logout
          </button>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
