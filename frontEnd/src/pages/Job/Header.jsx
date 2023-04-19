import React from 'react'

import JobSvg from '../../assets/undraw_work_time_re_hdyv.svg'

import Service from './Service'

const Header = () => {
    return (
        <div className="z-0 relative pt-16 pb-20 lg:pt-24 dark:bg-gray-900">
            <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-3xl text-center sm:text-4xl md:text-5xl lg:w-auto lg:text-left xl:text-6xl dark:text-white">
                    Your Gateway to Professional Success
                    <span className="lg:block hidden"></span>

                </h1>
                <div className="lg:flex">
                    <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                        <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                            Get ready to explore a world of endless possibilities! Our platform offers a comprehensive list of job and internship opportunities exclusively for African students.
                            From cutting-edge technology companies to leading financial institutions and everything in between, we've got a diverse range of options for you to choose from.
                            Take the first step towards a brighter future by scrolling down and discovering the exciting opportunities that await you.
                            Don't wait, your dream career is just a click away!

                        </p>

                        <div className="dark:text-gray-300">
                            🔥🌟
                            <span>Career success starts here. Explore our services today.</span>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                        <div className="relative w-full">
                            <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                            <img src={JobSvg} className="relative w-full" alt="wath illustration" loading="lazy" width="320" height="280" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header