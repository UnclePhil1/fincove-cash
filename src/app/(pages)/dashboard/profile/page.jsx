import React from "react";

const Profile =() => {

    return (
        <div className="w-full flex-grow h-full lg:px-[15%] px-4 py-5 bg-background">
            
            {/* Image aspect */}
            <div className="flex flex-row items-center justify-evenly">

                <button className="p-3 rounded-lg links bg-purple-800 text-white text-center justify-center items-center">Upload New</button>
                <button className="p-3 rounded-lg links bg-gray-700 text-white text-center justify-center items-center">Delete Avatar</button>
            </div>

            {/* Form Aspect */}

            <div className="w-full items-center mt-5 mb-5">

                {/* Full name */}
                <div className="flex-1 md:flex mt-4 flex-row justify-evenly items-center gap-5">
                    <div className="pt-4 w-[100%] flex flex-col">
                        <label htmlFor="email" className="text-primary text-[14px]">
                            First Name <i className="text-red">*</i>
                        </label>
                        {/* <Emails setEmail={setEmail} /> */}
                        <input
                            type="text"
                            id="fname"
                            className="border rounded-lg py-4 px-3 focus:outline-primary"
                            required
                        />
                    </div>
                    <div className="pt-4 w-[100%] flex flex-col">
                        <label htmlFor="email" className="text-primary text-[14px]">
                            Last Name <i className="text-red">*</i>
                        </label>
                        {/* <Emails setEmail={setEmail} /> */}
                        <input
                            type="text"
                            id="lname   "
                            className="border rounded-lg py-4 px-3 focus:outline-primary"
                            required
                        />
                    </div>
                </div>

                {/* Pone/email */}
                <div className="flex-1 md:flex mt-4 flex-row justify-evenly items-center gap-5">
                    <div className="pt-4 w-[100%] flex flex-col">
                        <label htmlFor="email" className="text-primary text-[14px]">
                            Email <i className="text-red">*</i>
                        </label>
                        {/* <Emails setEmail={setEmail} /> */}
                        <input
                            type="email"
                            id="email"
                            className="border rounded-lg py-4 px-3 focus:outline-primary"
                            required
                        />
                    </div>
                    <div className="pt-4 w-[100%] flex flex-col">
                        <label htmlFor="email" className="text-primary text-[14px]">
                            Mobile Number <i className="text-red">*</i>
                        </label>
                        {/* <Emails setEmail={setEmail} /> */}
                        <input
                            type="tel"
                            id="phone"
                            className="border rounded-lg py-4 px-3 focus:outline-primary"
                            required
                        />
                    </div>
                </div>

                {/* Gender/Id */}
                <div className="flex-1 md:flex mt-4 flex-row justify-evenly items-center gap-5">
                    <div className="pt-4 w-[100%] flex flex-col">
                        <label htmlFor="email" className="text-primary text-[14px]">
                            Gender <i className="text-red">*</i>
                        </label>
                        {/* <Emails setEmail={setEmail} /> */}

                        <select
                            className="border rounded-lg py-4 px-3 focus:outline-primary" required>
                                <option>Choose gender</option>
                                <option value="male">Male</option>
                                <option value="female">Femail</option>
                            </select>
                    </div>
                    <div className="pt-4 w-[100%] flex flex-col">
                        <label htmlFor="email" className="text-primary text-[14px]">
                            ID <i className="text-red">*</i>
                        </label>
                        {/* <Emails setEmail={setEmail} /> */}
                        <input
                            type="number"
                            id="id"
                            className="border rounded-lg py-4 px-3 focus:outline-primary"
                            required
                        />
                    </div>
                </div>

                {/* Address */}
                <div className="pt-4 w-[100%] mt-5 flex flex-col">
                    <label htmlFor="email" className="text-primary text-[14px]">
                    Residential Address* <i className="text-red">*</i>
                    </label>
                    {/* <Emails setEmail={setEmail} /> */}
                    <textarea className="border rounded-lg py-4 px-3 focus:outline-primary"></textarea>
                </div>
            </div>
            <br />
            <br />
            <button className="mt-5 p-3 rounded-lg links bg-purple-800 text-white text-center justify-center items-center">Save Profile</button>

        </div>
    )
}

export default Profile;