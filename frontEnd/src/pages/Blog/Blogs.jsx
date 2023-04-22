import React, { useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import blogContext from '../../context/blog/blogContext';

import { Navbar, Footer, Sidebar } from '../../components';
import { useStateContext } from '../../context/ContextProvider';
import BlogCard from './BlogCard'

// import CarouselCard from './Carousel';
import Header from './Header';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { useQuery, gql } from '@apollo/client';
import BlogContext from './../../context/blog/blogContext';




const Blogs = () => {

  const blogContext = useContext(BlogContext)
  const { blogs, getBlogs } = blogContext


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
          <div className="w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
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
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed h-12 md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>

          <Header />

          <div className="mt-24 text-gray-900  pr-0 pb-14 pl-0">
            <div id="read" className="w-full pt-2 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
              <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">

                {blogs &&
                  blogs.map(blog => (
                    <BlogCard blog={blog} />
                  ))
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
