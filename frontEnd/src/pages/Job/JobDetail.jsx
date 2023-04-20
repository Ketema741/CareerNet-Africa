import React, { useEffect, useContext } from "react";

import { Navbar, Footer, Sidebar } from "../../components";
import { useStateContext } from "../../context/ContextProvider";

import { SiBookstack } from "react-icons/si";
import Blog from "../../assets/undraw_job_offers_re_634p.svg";
import BlogContext from "./../../context/blog/blogContext";

const Parse = require("html-react-parser");

const JobDetail = () => {
  const blogContext = useContext(BlogContext);
  const { blog, getBlog } = blogContext;

  const { setCurrentColor, setCurrentMode, currentMode, activeMenu } =
    useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
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
                      <div className="bg-white shadow-lg rounded-lg pt-6 pb-8 mb-4 px-4 py-8">
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">
                          Job Title
                        </h2>
                        <p className="text-grey-700 mb-4 font-bold">
                          Web Developer
                        </p>

                        <h2 className="text-2xl font-bold text-blue-800 mb-4">
                          Job Description:
                        </h2>
                        <p className="text-gray-700 mb-4 ml-10 mr-32 text-justify">
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
                        <ul className="list-disc pl-8 mb-4 ml-10 mr-32 text-justify">
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
                        <ul className="list-disc pl-8 mb-4 ml-10 mr-32 text-justify">
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

                        <p className="text-gray-700 ml-1 mr-32 text-justify">
                          If you're interested in this opportunity and meet the
                          requirements listed above, please submit your resume
                          and portfolio for consideration.
                        </p>
                      </div>
                      <p className="text-xl font-bold text-gray-600 dark:text-gray-400">
                        Link To There Web Site
                      </p>
                      <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                        <a
                          aria-label="add to slack"
                          href="#detail"
                          className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                        >
                          <div className="flex justify-center space-x-4">
                            <SiBookstack
                              className="w-6 h-6"
                              style={{ color: "#03C9D7" }}
                            />
                            <span className="hidden font-medium md:block dark:text-white">
                              A2SV
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                      <div className="relative w-full">
                        <div
                          aria-hidden="true"
                          className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                        ></div>
                        <img
                          src={Blog}
                          className="relative w-full"
                          alt="wath illustration"
                          loading="lazy"
                          width="320"
                          height="280"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ) : (<div>Loading...</div>
            )} */}
            <div className="px-2 max-w-lg mx-auto my-8"></div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default JobDetail;
