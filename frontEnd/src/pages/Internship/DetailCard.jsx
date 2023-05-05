import React from "react";


import { SiBookstack } from "react-icons/si";
import Blog from "../../assets/undraw_job_offers_re_634p.svg";

const JobDetailCard = () => {


    return (
        <div className="lg:flex" >
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-full sm:px-4 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                <div className=" pt-6 pb-8 mb-4 py-8">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">
                        Job Title
                    </h2>
                    <p className="text-grey-700 mb-4 font-bold">
                        Web Developer
                    </p>

                    <h2 className="text-2xl font-bold text-blue-800 mb-4">
                        Job Description:
                    </h2>
                    <p className="text-gray-700 mb-4 ml-10 sm:ml-2 sm:mr-2 md:mr-32 text-justify" style={{ zIndex: 1000 }}>
                        We are seeking a talented web developer to join our
                        team. As a web developer, you will be responsible for
                        designing, developing, and maintaining our company
                        website. Your responsibilities will include working
                        with the marketing team to design and develop website
                        pages that are visually appealing, responsive, and
                        user-friendly. You will also be responsible for
                        ensuring the website is optimized for search engine
                        rankings and implementing website analytics to monitor
                        website traffic and user behavior.
                    </p>

                    <h3 className="text-xl font-bold text-blue-800 mb-4">
                        Responsibilities
                    </h3>
                    <ul className="list-disc pl-8 mb-4 ml-10 sm:ml-2 sm:mr-2 md:mr-32 text-justify">
                        <li className="text-gray-700 mb-2">
                            Design and develop website pages using HTML, CSS,
                            and JavaScript
                        </li>
                        <li className="text-gray-700 mb-2">
                            Work with the marketing team to develop a website
                            strategy that aligns with business objectives
                        </li>
                        <li className="text-gray-700 mb-2">
                            Optimize website pages for search engine rankings
                            and implement website analytics to monitor website
                            traffic and user behavior
                        </li>
                        <li className="text-gray-700 mb-2">
                            Collaborate with other developers and designers to
                            ensure website consistency and functionality
                        </li>
                        <li className="text-gray-700 mb-2">
                            Test website functionality and troubleshoot issues
                            as they arise
                        </li>
                        <li className="text-gray-700 mb-2">
                            Stay up-to-date with the latest web development
                            technologies and trends
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold text-blue-800 mb-4">
                        Requirements
                    </h3>
                    <ul className="list-disc pl-8 mb-4 ml-10 sm:ml-2 sm:mr-2 md:mr-32 text-justify">
                        <li className="text-gray-700 mb-2">
                            Bachelor's degree in computer science or a related
                            field
                        </li>
                        <li className="text-gray-700 mb-2">
                            Proven experience in web development with a strong
                            portfolio
                        </li>
                        <li className="text-gray-700 mb-2">
                            Experience with HTML, CSS, JavaScript, and
                            responsive design
                        </li>
                        <li className="text-gray-700 mb-2">
                            Knowledge of SEO and website analytics
                        </li>
                        <li className="text-gray-700 mb-2">
                            Strong problem-solving skills and attention to
                            detail
                        </li>
                        <li className="text-gray-700 mb-2">
                            Excellent communication skills and ability to work
                            collaboratively in a team environment
                        </li>
                    </ul>

                    <p className="text-gray-700 ml-1 sm:ml-2 sm:mr-2 md:mr-32 text-justify">
                        If you're interested in this opportunity and meet the
                        requirements listed above, please submit your resume
                        and portfolio for consideration.
                    </p>
                </div>


            </div>
            <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                <div className="relative w-full">
                    <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                    <img
                        src={Blog}
                        className="relative ml-24 w-full overflow-hidden"
                        alt="wath illustration"
                        loading="lazy"
                        width="320"
                        height="280"
                        style={{ width: "550px", zIndex: 0 }}
                    />


                </div>
                <div className="mt-8 relative w-full">
                    <div className="sm:ml-0 sm:mr-4 md:ml-24 bg-white shadow-lg rounded-lg p-8 pb-12 mb-8" style={{ width: "550px", zIndex: 0 }}>
                        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Contact Us </h3>

                        <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                            <a
                                aria-label="add to slack"
                                href="http://localhost:3000"
                                className="p-4 border  dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                            >
                                <div className="flex justify-center space-x-4">
                                    <SiBookstack
                                        className="w-6 h-6"
                                        style={{ color: "#03C9D7" }}
                                    />
                                    <span className="hidden font-medium md:block dark:text-white">
                                        Contact
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailCard;