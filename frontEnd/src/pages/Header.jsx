import React from 'react'
import { GiGraduateCap, GiLifeSupport, GiOfficeChair } from 'react-icons/gi'
import { CgCommunity } from 'react-icons/cg'
import { FcCollaboration } from 'react-icons/fc'
import { FaConnectdevelop } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'

import Service from './Job/Service'

const Header = () => {
    return (
        <div className="overflow-hidden z-0 relative pt-16 pb-20 lg:pt-24 dark:bg-gray-900">
            <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-3xl text-center sm:text-4xl md:text-5xl lg:w-auto lg:text-left xl:text-6xl dark:text-white">
                    Discover Your Career Path
                    <span className="lg:block hidden"></span>
                    <Service />
                </h1>
                <div className="lg:flex">
                    <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                        <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                            CareerNet Africa is more than just a blog.
                            It's a community of passionate individuals who are committed to helping African students achieve their career goals.
                            With our platform, you can connect with mentors, network with professionals in your field, and gain practical experience through internships and other opportunities.
                            Join us today and unlock your full potential.

                        </p>
                        <p className="text-xl font-bold text-gray-600 dark:text-gray-400">
                            Career Pathway Solutions
                        </p>
                        <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                            <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                                <div className="flex justify-center space-x-4">

                                    <SiBookstack className='w-6 h-6' style={{ color: '#03C9D7' }} />
                                    <span className="hidden font-medium md:block dark:text-white">
                                        Resources
                                    </span>
                                </div>
                            </a>
                            <a aria-label="add to chat" href="#" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                                <div className="flex justify-center space-x-4">
                                    <FaConnectdevelop className='w-6 h-6' style={{ color: '#03C9D7' }} />
                                    <span className="hidden font-medium md:block dark:text-white">Networking</span>
                                </div>
                            </a>
                            <a aria-label="add to zoom" href="#" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                                <div className="flex justify-center space-x-4">
                                    <GiGraduateCap className='w-6 h-6' style={{ color: '#03C9D7' }} />
                                    <span className="hidden font-medium md:block dark:text-white">Job search</span>
                                </div>
                            </a>
                        </div>
                        <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                            <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                                <div className="flex justify-center space-x-4">
                                    <CgCommunity className='w-6 h-6' style={{ color: '#03C9D7' }} />
                                    <span className="hidden font-medium md:block dark:text-white">
                                        Community
                                    </span>
                                </div>
                            </a>
                            <a aria-label="add to chat" href="#" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                                <div className="flex justify-center space-x-4">
                                    <GiLifeSupport className='w-6 h-6' style={{ color: '#03C9D7' }} />
                                    <span className="hidden font-medium md:block dark:text-white">
                                        Support
                                    </span>
                                </div>
                            </a>
                            <a aria-label="add to zoom" href="#" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                                <div className="flex justify-center space-x-4">
                                    <GiOfficeChair className='w-6 h-6' style={{ color: '#03C9D7' }} />
                                    <span className="hidden font-medium md:block dark:text-white">
                                        Internships
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                            <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                                <div className="flex justify-center space-x-4">
                                    <FcCollaboration className='w-6 h-6' style={{ color: '#03C9D7' }} />
                                    <span className="hidden font-medium md:block dark:text-white">
                                        Collaboration
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div className="dark:text-gray-300">
                            🔥🌟
                            <span>Career success starts here. Explore our services today.</span>
                        </div>

                    </div>
                    <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                        <div className="flex justify-center items-center relative w-full">
                            <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                            <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg" className="relative w-full" alt="wath illustration" loading="lazy"  style={{width:'550px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header