"use client"
import React from "react";
import Cards from "../../../../../components/molecules/financeComp/interlligence/Cards"
import Income from "../../../../../components/molecules/financeComp/interlligence/income/Income"
import History from "../../../../../components/molecules/financeComp/interlligence/history/History"
import Expenses from "../../../../../components/molecules/financeComp/interlligence/expenses/Expenses"

const Finance = () => {
  const [page, setPage] = React.useState("overview");
  return (
    <div className="w-full flex-grow lg:px-[15%] px-4 py-4 bg-background">
      
      <nav className="bg-transparent">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div> */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className=" sm:ml-6 sm:block">
                <div className="flex md:space-x-[54px]">
                    <a href="#" className={`hover:border-b hover:border-[#421638] ${page=="overview" && "border-b border-[#421638]"} text-[#421638] rounded px-3 py-2 text-sm font-medium`} onClick={()=>setPage("overview")} aria-current="page">Overview </a>
                    <a href="#" className={`text-[#421638] ${page=="income" && "border-b border-[#421638]"} hover:border-b hover:border-[#421638] rounded px-3 py-2 text-sm font-medium`} onClick={()=>setPage("income")}>Income</a>
                    <a href="#" className={`text-[#421638] ${page=="expenses" && "border-b border-[#421638]"} hover:border-b hover:border-[#421638] rounded px-3 py-2 text-sm font-medium`} onClick={()=>setPage("expenses")}>Expenses</a>
                    <a href="#" className={`text-[#421638] ${page=="overview" && "border-b border-[#421638]"} hover:border-b hover:border-[#421638] rounded px-3 py-2 text-sm font-medium`} onClick={()=>setPage("overview")}>Labels</a>
                    <a href="#" className={`text-[#421638] ${page=="history" && "border-b border-[#421638]"} hover:border-b hover:border-[#421638] rounded px-3 py-2 text-sm font-medium`} onClick={()=>setPage("history")}>History</a>
                </div>
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                <div>
                    <button type="button" className="relative flex rounded-full p-3 items-center border border-[#421638] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <g clip-path="url(#clip0_495_13695)">
                                <path d="M13.5068 24.2956H18.8589V21.6195H13.5068V24.2956ZM4.14062 8.23926V10.9153H28.2251V8.23926H4.14062ZM8.15471 17.6055H24.211V14.9294H8.15471V17.6055Z" fill="#421638"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_495_13695">
                                <rect width="32.1127" height="32.1127" fill="white" transform="translate(0.126953 0.211426)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Select date
                    </button>
                </div>

                
                {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div> */}
                </div>
            </div>
            </div>
        </div>

        {/* <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
            </div>
        </div> */}
      </nav>
      {/* <Naving /> */}
      {page == "overview" && <Cards />}
      {page == "income" && <Income />}
      {page == "history" && <History />}
      {page == "expenses" && <Expenses />}
    </div>
  );
};

export default Finance;