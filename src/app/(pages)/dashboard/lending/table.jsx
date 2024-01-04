'use client'
import React from "react";
import Link from "next/link";
import { Router } from "next/navigation";

const Table = () => {
    // router = Router();
    const handleClick = (id) => {
    // Navigate to the/request requester page using the ID
    Router.push(`/request/requester/${id}`);
  };

  return (
    <div className="w-full mx-auto">
      <table className="table w-full">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-3">Requester</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Interest Rate/Duration</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {/* Dynamically render table rows based on data */}
          <tr key={1}>
            <td className="px-4 py-3">PHILIP OMATOSANYA</td>
            <td className="px-4 py-3">N3000000</td>
            <td className="px-4 py-3">12.5% Repayment 12days</td>
            <td className="px-4 py-3 text-center">
              <Link
                href="/request/requester/1"
                as="button"
                onClick={handleClick}
                className="inline-block px-8 py-2 bg-[#A7368D] text-white rounded-md hover:bg-primarydark"
              >
                View
              </Link>
            </td>
          </tr>
          <tr key={2}>
            <td className="px-4 py-3">NWEKE NONSO</td>
            <td className="px-4 py-3">3000btc</td>
            <td className="px-4 py-3">4.5% Repayment 3months</td>
            <td className="px-4 py-3 text-center">
              <Link
                href="/request/requester/2"
                as="button"
                onClick={handleClick}
                className="inline-block px-8 py-2 bg-[#A7368D] text-white rounded-md hover:bg-primarydark"
              >
                View
              </Link>
            </td>
          </tr>
          <tr key={3}>
            <td className="px-4 py-3">BENEDICT OJO</td>
            <td className="px-4 py-3">N40000</td>
            <td className="px-4 py-3">12.5% Repayment 30days</td>
            <td className="px-4 py-3 text-center">
              <Link
                href="/request/requester/3"
                as="button"
                onClick={handleClick}
                className="inline-block px-8 py-2 bg-[#A7368D] text-white rounded-md hover:bg-primarydark"
              >
                View
              </Link>
            </td>
          </tr>
          <tr key={2}>
            <td className="px-4 py-3">NWEKE NONSO</td>
            <td className="px-4 py-3">3000btc</td>
            <td className="px-4 py-3">4.5% Repayment 3months</td>
            <td className="px-4 py-3 text-center">
              <Link
                href="/request/requester/2"
                as="button"
                onClick={handleClick}
                className="inline-block px-8 py-2 bg-[#A7368D] text-white rounded-md hover:bg-primarydark"
              >
                View
              </Link>
            </td>
          </tr>
          <tr key={3}>
            <td className="px-4 py-3">BENEDICT OJO</td>
            <td className="px-4 py-3">N40000</td>
            <td className="px-4 py-3">12.5% Repayment 30days</td>
            <td className="px-4 py-3 text-center">
              <Link
                href="/request/requester/3"
                as="button"
                onClick={handleClick}
                className="inline-block px-8 py-2 bg-[#A7368D] text-white rounded-md hover:bg-primarydark"
              >
                View
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
