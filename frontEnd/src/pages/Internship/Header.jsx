import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import bg from '../../assets/blogbg1.png';

import { FaSearch } from 'react-icons/fa';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState('Select');
    const [inputValue, setInputValue] = useState('');

    const handleToggleJobList = () => setIsOpen(!isOpen);

    const handleJobSelection = (job) => {
        setSelectedJob(job);
        setIsOpen(false);
    };



    const handleSearch = () => {
        console.log(selectedInternship);
    };

    return (
        <div>
            <div className="relative">
                <img
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    src={bg}
                    width="400"
                    height="500"
                    alt="hero background image"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full bg-blue-900 bg-opacity-30 backdrop-blur-sm"
                ></div>
                <div className="relative container m-auto px-6 md:px-12 lg:px-6">
                    <div className="mb-12 pt-12 space-y-8 md:mb-20 md:pt-24 lg:w-8/12 lg:mx-auto">
                        <h1 className="text-white text-center text-2xl font-bold sm:text-3xl md:text-4xl">
                            Get hands-on experience and jumpstart your professional journey with us
                        </h1>
                        <form className="w-full">
                            <div className="relative flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
                                <div
                                    className={`text-gray-600 relative md:flex justify-between items-center min-w-max select-none ${isOpen ? 'peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1' : ''
                                        }`}
                                >
                                    <input type="checkbox" id="toggleJobLstCat" className="peer hidden outline-none" checked={isOpen} readOnly />
                                    <input
                                        type="text"
                                        id="catJobName"
                                        value={selectedJob}
                                        className="pl-3 w-full bg-white text-base font-medium cursor-pointer"
                                        readOnly
                                        onClick={handleToggleJobList}
                                    />
                                    <label htmlFor="toggleJobLstCat" className="absolute top-0 left-0 w-full h-full" onClick={handleToggleJobList} />
                                    <span type='button' className="min-w-max">
                                        <HiChevronDown />
                                    </span>
                                    <div
                                        id="catJobLst"
                                        className={`absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible top-full left-0 w-full bg-white bg-opacity-80 rounded-lg py-2 ${isOpen ? 'peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1' : ''
                                            }`}
                                    >
                                        <ul className="flex flex-col w-full h-32 overflow-y-auto"
                                            style={{zIndex: '100', scrollbarWidth: 'thin', scrollbarColor: 'rgba(156, 163, 175, 0.5)' }}
                                        >


                                            <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2" onClick={() => handleJobSelection('Design')}>
                                                Design
                                            </li>
                                            <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2" onClick={() => handleJobSelection('Development')}>
                                                Development
                                            </li>
                                            <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2" onClick={() => handleJobSelection('Web')}>
                                                Development
                                            </li>
                                            <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2" onClick={() => handleJobSelection('Web')}>
                                                Development
                                            </li>
                                            <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2" onClick={() => handleJobSelection('Leadership')}>
                                                
                                            </li>
                                            <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2" onClick={() => handleJobSelection('Leadership')}>
                                                
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Your favorite position"
                                    className="w-full p-4 outline-none text-gray-600"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button
                                    type="button"
                                    title="Start Searching"
                                    className="ml-auto py-3 px-6 rounded-lg text-center transition bg-blue-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12"
                                >
                                    <span className="hidden text-white font-semibold md:block">
                                        Search
                                    </span>
                                    <FaSearch className="w-5 mx-auto text-white md:hidden" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;