'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TableList = ({ users }) => {
  const router = useRouter();

  //   const handleClick = (user) => {
  //     router.push(`/users/${user.id}`);
  //   };

  const lending = [
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
    {
      text: "bngsha2183xxxxxxxxxxxxxx948",
      date: "20/12/23",
      amount: "$450",
    },
  ];

  return (
    <div className="w-[100%] h-[200px] overflow-auto">
      <table className="table w-[100%]">
        <thead className="py-4 bg-background">
          <tr>
            <td className="p-2">Wallet Address</td>
            <td className="p-2">Amount</td>
          </tr>
        </thead>
        <tbody className="py-5">
          {lending.map((lendlist, index) => (
            <tr className="py-2 hover:bg-background" key={index}>
              <td className="flex justify-start items-start py-2">
                <span className="flex flex-col justify-start items-start">
                  <h3 className="text-start">{lendlist.text}</h3>
                  <p className="text-start text-[15px] text-primarydark">
                    {lendlist.date}
                  </p>
                </span>
              </td>
              <td>{lendlist.amount}</td>
              <hr />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
