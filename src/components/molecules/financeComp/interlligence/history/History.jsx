import Image from 'next/image';
import React from 'react'
import Lend from "../../../../../../public/Image/give.png";
import Download from "../../../../../../public/Image/download.png";
import Wallet from "../../../../../../public/Image/wallet.png"

const History = () => {
    const array = [
        {
          src: Lend,
          text: "Loan requested from Abel",
          time: "6 minutes",
          amount: "+N30,000",
        },
        {
          src: Download,
          text: "Application Login",
          time: "10:00am",
          amount: "",
        },
        {
          src: Lend,
          text: "Accepted Loan Request",
          time: "12:30px",
          amount: "+ N30,000",
        },
        {
          src: Download,
          text: "Application Login",
          time: "11:00pm",
          amount: "",
        },
        {
          src: Wallet,
          text: "Wallet Transfer",
          time: "7:35px",
          amount: "+N30,000",
        },
      ];
  return (
    <>
    <div className='mt-5 items-center justify-center w-full h-full'>
        
    <div className="w-[100%] grid grid-cols-1 md:grid-cols-1 gap-10 py-6 md:mb-[8%]">
        <div className=" border-r-transparent border border-t-transparent border-b-transparent border-l-transparent md:px-8">
            {/* <button className="py-3 px-4 rounded-md bg-primary text-white text-[15px]">
              Recent Activities
            </button> */}
            <p className="pt-4">Today</p>
            <div className="flex justify-between items-center gap-5">
              <div className="flex justify-start items-center py-4">
                <Image
                  src={Lend}
                  alt="earth.png"
                  width={700}
                  height={300}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="flex flex-col justify-start items-start pl-2">
                  <h2 className="font-semibold text-[18px] text-start text-primary">
                    Loan requested from Abel
                  </h2>
                  <p className="text-start text-primary">12:30px</p>
                </div>
              </div>
              <p className="text-[28px] text-start">+N45,000</p>
            </div>
            <div className="w-[100%]">
              <p>Yesterday</p>
              {array.map((usage, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-5"
                >
                  <div className="flex justify-start items-center py-4">
                    <Image
                      src={usage.src}
                      alt="earth.png"
                      width={700}
                      height={300}
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <div className="flex flex-col justify-start items-start pl-2">
                      <h2 className="font-semibold text-[18px] text-start text-primary">
                        {usage.text}
                      </h2>
                      <p className="text-start text-primary">{usage.time}</p>
                    </div>
                  </div>
                  <p className="text-[28px] text-start">{usage.amount}</p>
                </div>
              ))}
            </div>
        </div>
        </div>
    </div>

    </>
  )
}

export default History