import React, { useEffect, useContext, Fragment, useRef } from 'react';

import { Link } from 'react-router-dom';
import blogContext from '../../context/blog/blogContext';
import { FiSearch } from 'react-icons/fi'

import { Navbar, Footer, Sidebar } from '../../components';
import { useStateContext } from '../../context/ContextProvider';
import BlogCard from './BlogCard'

// import CarouselCard from './Carousel';
import Header from './Header';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import BlogContext from './../../context/blog/blogContext';


const Blogs = () => {

  const blogContext = useContext(BlogContext)
  const { blogs, filtered, filterBlogs, clearFilter, getBlogs } = blogContext
  const text = useRef('')

  useEffect(() => {
    if (filtered == null) {
      text.current.value = ''
    }
  })


  const onChange = (e) => {
    if (e.target.value !== '') {
      filterBlogs(e.target.value);
    } else {
      clearFilter();
    }
  };



  const { setCurrentColor, setCurrentMode, currentMode, activeMenu } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
    getBlogs()
    console.log(blogs)
  }, []);


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative  dark:bg-main-dark-bg">

        {activeMenu ? (
          <div className="w-52 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
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
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-52 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed h-12 md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>

          <Header />

          <div className="mt-8 text-gray-900  pr-0 pb-14 pl-0">
            <div className="mb-8 w-[90%]">
              <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-around">
                <div>
                  <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Find Your Next Career
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                    Start your journey towards a fulfilling career today by browsing our listings
                  </p>
                </div>

                <div className="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
                  <p className="sr-only">Search</p>
                  <div className="relative">
                    <div className="flex items-center pt-0 pr-24 pb-0 pl-2 absolute inset-y-0 left-0 pointer-events-none">
                      <FiSearch className="w-5 h-5 text-gray-400" />
                    </div>

                    <input
                      placeholder="Search... "
                      type="text"
                      ref={text}
                      onChange={onChange}
                      className="block  pt-3 pr-0 pb-3 pl-24 lg:mx-auto lg:w-full py-3 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div id="read" className="w-full pt-2 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
              <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">

                {blogs ? (
                  <Fragment>
                    {
                      filtered !== null ?
                        filtered.map(blog => (
                          <BlogCard blog={blog} />
                        ))
                        :
                        blogs.map(blog => (
                          <BlogCard blog={blog} />
                        ))
                    }
                  </Fragment>
                )
                  :
                  <div> Loading... </div>
                }
              </div>
            </div>
          </div>
          {/* <CarouselCard /> */}
          <Footer />
        </div>
      </div>
    </div>

  );
};
export default Blogs;
