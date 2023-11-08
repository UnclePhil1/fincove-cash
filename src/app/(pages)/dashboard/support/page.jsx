import React from "react";
import {Report, Feedback, Help, Person} from "@mui/icons-material"

const Support =() => {

    const listings = [
        {title: "Your Account", content: "Account Setting Verifications.", icon: <Person />},
        {title: "Dispute", content: "Dispute unauthorized transactions.", icon: <Report />},
        {title: "Help", content: "Get help from our Professionals", icon: <Help />},
        {title: "Feedback", content: "Let us know how we can serve you better", icon: <Feedback />},
    ];

    return (
        <div className="w-full flex-grow lg:px-[15%] px-4 py-4 bg-background gap-5">
            <div className="py-4 w-full items-center justify-center">
                <h2 className="text-gray-800 text-2xl w-full text-center">
                    Hello, What can we help you with?
                </h2>

                {/* search */}
                <div className="w-[100%] items-center justify-center mt-5">
                    <input
                        type="text"
                        id="fname"
                        className="border w-full rounded-lg py-4 px-3 focus:outline-primary"
                        placeHolder={`Type something like, “Chat an agent” 🔍`}
                        required
                    />
                </div>


                {/* Something you can do */}
                <div className='w-full mt-5'>
                    <h2 className="text-gray-800 text-xl w-full text-start mt-3">
                        Some things you can do here
                    </h2>

                    {/* flow */}
                    <div className='flex flex-col md:flex-row items-center justify-center mt-5 gap-5'>
                        {listings && listings.map((listing, i) => (
                            <div className="rounded-lg flex flex-col text-center bg-white p-5 item-center justify-center shadow border border-gray-300" key={i}>
                                <span className="py-2 ml-2 text-[25px] text-primary">{listing.icon}</span>
                                <h3 className="mt-2 text-gray-800 text-lg">{listing.title}</h3>
                                <p className="mt-2 text-gray-600 ">{listing.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;