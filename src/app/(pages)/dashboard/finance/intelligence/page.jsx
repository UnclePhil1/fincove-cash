"use client";
import React from "react";
import Cards from "../../../../../components/molecules/financeComp/interlligence/Cards";
import Income from "../../../../../components/molecules/financeComp/interlligence/income/Income";
import History from "../../../../../components/molecules/financeComp/interlligence/history/History";
import Expenses from "../../../../../components/molecules/financeComp/interlligence/expenses/Expenses";
import Link from "next/link";

const Finance = () => {
  const [page, setPage] = React.useState("overview");
  return (
    <div className="w-[100%] flex-grow lg:px-[15%] px-4 py-4 bg-background overflow-x-hidden">
      <nav className="bg-transparent">
        <div className="flex md:space-x-[54px] overflow-x-auto md:overflow-hidden w-[100%]">
          <Link
            href="#"
            className={`hover:border-b hover:border-[#421638] ${
              page == "overview" && "border-b border-[#421638]"
            } text-[#421638] rounded px-3 py-2 text-sm font-medium`}
            onClick={() => setPage("overview")}
            aria-current="page"
          >
            Overview{" "}
          </Link>
          <Link
            href="#"
            className={`text-[#421638] ${
              page == "income" && "border-b border-[#421638]"
            } hover:border-b hover:border-[#421638] rounded px-3 py-2 text-sm font-medium`}
            onClick={() => setPage("income")}
          >
            Income
          </Link>
          <Link
            href="#"
            className={`text-[#421638] ${
              page == "expenses" && "border-b border-[#421638]"
            } hover:border-b hover:border-[#421638] rounded px-3 py-2 text-sm font-medium`}
            onClick={() => setPage("expenses")}
          >
            Expenses
          </Link>
          <Link
            href="#"
            className={`text-[#421638] ${
              page == "overview" && "border-b border-[#421638]"
            } hover:border-b hover:border-[#421638] rounded px-3 py-2 text-sm font-medium`}
            onClick={() => setPage("overview")}
          >
            Labels
          </Link>
          <Link
            href="#"
            className={`text-[#421638] ${
              page == "history" && "border-b border-[#421638]"
            } hover:border-b hover:border-[#421638] rounded px-3 py-2 text-sm font-medium`}
            onClick={() => setPage("history")}
          >
            History
          </Link>
        </div>
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
