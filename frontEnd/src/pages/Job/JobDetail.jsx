import React, { useEffect, useContext } from "react";

import { Navbar, Footer, Sidebar } from '../../components';
import { useStateContext } from '../../context/ContextProvider';

import { SiBookstack } from 'react-icons/si'
import Blog from '../../assets/undraw_job_offers_re_634p.svg'
import BlogContext from './../../context/blog/blogContext';


const Parse = require('html-react-parser')

const JobDetail = () => {
    const blogContext = useContext(BlogContext);
    const { blog, getBlog, } = blogContext;

    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
    } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    return (

        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative   dark:bg-main-dark-bg">

                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? "dark:bg-main-dark-bg min-h-screen md:ml-72 w-full  "
                            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                    }


                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>
                    <div className="mt-4 container mx-auto">

                        {/* demo shit */}
                        {/* {blog != null ? ( */}
                        <div>
                            <div className=" relative pt-16 pb-4 lg:pt-24 dark:bg-gray-900">
                                <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                                    <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-3xl text-center sm:text-4xl md:text-5xl lg:w-auto lg:text-left xl:text-6xl dark:text-white">
                                        {/* {blog.title} */}
                                        <span className="lg:block hidden"></span>

                                        <span className="relative text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                            Discover the Insights and Tips on Our Blog!

                                        </span>
                                    </h1>
                                    <div className="lg:flex">
                                        <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                                            <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                                                job description
                                            </p>
                                            <p className="text-xl font-bold text-gray-600 dark:text-gray-400">
                                                Link To There Web Site
                                            </p>
                                            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                                                <a aria-label="add to slack" href="#detail" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                                                    <div className="flex justify-center space-x-4">
                                                        <SiBookstack className='w-6 h-6' style={{ color: '#03C9D7' }} />
                                                        <span className="hidden font-medium md:block dark:text-white">
                                                            A2SV
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                                            <div className="relative w-full">
                                                <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                                                <img src={Blog} className="relative w-full" alt="wath illustration" loading="lazy" width="320" height="280" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ) : (<div>Loading...</div>
            )} */}
                        <div className="px-2 max-w-lg mx-auto my-8">

                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
export default JobDetail;
