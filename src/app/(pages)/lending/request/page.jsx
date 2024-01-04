"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Table from '../table';


const LoanRequest = () => {

  return (
    <div>
      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="my-4">
          <h1 className="text-primary text-[2em] font-semibold text-center font-rowdies">
          Loan Requests
          </h1>
          <div className=" text-center flex flex-col md:flex-row justify-center items-center gap-5">
           <button className="py-3 px-4 rounded-md bg-yellow-500 text-primarydark">Requests</button>
           <button className="py-3 px-4 rounded-md bg-transparent border-2 border-primary hover:bg-primary text-primary hover:text-white">My Loans</button>
          </div>
        </div>  
        <div>
            <Table />
        </div>
      </div>
    </div>
  );
};

export default LoanRequest;
