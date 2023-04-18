import React, { useState } from 'react';
import Logo from '../../brands/logo.svg';

import welcome from '../../brands/undraw_welcome_cats_thqn.svg'

const RegistrationForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (

        <div className="mt-14 min-w-screen  bg-white flex items-center justify-center px-5 py-1">
            <div className=" bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
                <div className="md:flex w-full">
                    <div className="mt-24 hidden md:block w-1/2  p-10 ">
                        <img src={welcome} alt="welcome" />
                        <img src={Logo} className="ml-32" style={{ height: "140px", width: "140px"}} />

                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <form onSubmit={handleSubmit}>
                            <div className="flex -mx-3 flex-col">
                                <div>
                                    <div className="flex -mx-3">
                                        <div className="w-1/2 px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">First name</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="first name" />
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">Last name</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="last name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <label for="" className="text-xs font-semibold px-1">Email</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-12">
                                            <label for="" className="text-xs font-semibold px-1">Password</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <button className=" mb-5 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" type="submit" disabled={!userType}>Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default RegistrationForm