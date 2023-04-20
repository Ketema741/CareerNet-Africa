import React, { useEffect, useState, useContext } from "react";


import { Navbar, Footer, Sidebar } from '../../components';
import DetailCard from './DetailCard';
import CommentSection from './Comment'
import { useStateContext } from '../../context/ContextProvider';
import Carousel from './Carousel';
import { Link } from 'react-router-dom'

import blogbg from '../../assets/blog/bg7.jpg'
// 2 7 11 16
import resume from '../../assets/undraw_road_to_knowledge_m8s0.svg'
import { GiGraduateCap, GiLifeSupport, GiOfficeChair } from 'react-icons/gi'
import { CgCommunity } from 'react-icons/cg'
import { FcCollaboration } from 'react-icons/fc'
import { FaConnectdevelop } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'

import Blog from '../../assets/undraw_career_progress_ivdb.svg'
import BlogContext from './../../context/blog/blogContext';
import { useNavigate } from 'react-router-dom';

import { Categories } from "../../data/dummy";

const Parse = require('html-react-parser')

const BlogDetail = () => {
  const navigate = useNavigate()
  const blogContext = useContext(BlogContext);
  const { current, blog, filtered, getBlog, setCurrent, filterBlogs } = blogContext;


  const handleView = (post) => {
    setCurrent(post)
  }
  const handleCategory = (category) => {
    filterBlogs(category)
    navigate(`/blogs`)
  }
  const [comments, setComments] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      id: comments.length + 1,
      text: event.target.comment.value,
      replies: [],
    };
    setComments([...comments, newComment]);
    event.target.comment.value = '';
  };

  const handleReplySubmit = (event, commentId) => {
    event.preventDefault();
    const newReply = {
      id: comments[commentId - 1].replies.length + 1,
      text: event.target.reply.value,
    };
    const updatedComments = [...comments];
    updatedComments[commentId - 1].replies.push(newReply);
    setComments(updatedComments);
    event.target.reply.value = '';
  };

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

  const chunks = [];
  useEffect(() => {
    if (blog) {
      for (let i = 0; i < blog.takeaways; i += 3) {
        chunks.push(blog.takeaways.slice(i, i + 3));
      }
      console.log(chunks);
    }
  }, [blog])



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

            {blog != null ? (
              <div>
                <div className=" relative pt-16 pb-4 lg:pt-24 dark:bg-gray-900">
                  <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                    <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-3xl text-center sm:text-4xl md:text-5xl lg:w-auto lg:text-left xl:text-6xl dark:text-white">
                      {blog.title}
                      <span className="lg:block hidden"></span>

                      <span className="relative text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                        Discover the Insights and Tips on Our Blog!
                      </span>
                    </h1>
                    <div className="lg:flex">
                      <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                        <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                          {/* <div dangerouslySetInnerHTML={{ __html:  }} /> */}
                          {Parse(blog.summary)}
                        </p>
                        <p className="text-xl font-bold text-gray-600 dark:text-gray-400">
                          List of {blog.takeaways.length} Key takeaways.
                        </p>


                        <div className="flex flex-wrap space-y-3 justify-between min-w-[300px]">
                          {blog.takeaways.map((takes, index) => (
                            <a aria-label="add to slack" href="#detail" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                              <div className="flex justify-center space-x-4">
                                <CgCommunity className='w-6 h-6' style={{ color: '#03C9D7' }} />
                                <span className="hidden font-medium md:block dark:text-white">
                                  {takes}
                                </span>
                              </div>
                            </a>
                          )
                          )}


                        </div>
                        <div className="grid grid-cols-2 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                          <a aria-label="add to slack" href="#detail" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                            <div className="flex justify-center space-x-4">
                              <FcCollaboration className='w-6 h-6' style={{ color: '#03C9D7' }} />
                              <span className="hidden font-medium md:block dark:text-white">
                                Professional Development
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12" style={{ maxWidth: '550px', zInde: 0 }}>
                        <div className="relative w-full">
                          <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                          <img src={blog.blogImages[0]} className="relative w-full" alt="wath illustration roudend-md" loading="lazy" width="320" height="280" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundImage: `url(${blogbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                  className="container mx-auto p-10 mb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 col-span-1">
                      <DetailCard blog={blog} />
                      <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-14">
                          <img alt='autho name' className="h-24 w-24 align-middle rounded-full" src={resume} />
                        </div>
                        <h3 className="text-black mt-4 mb-4 text-xl font-bold">{blog.user.firstName}</h3>
                        <p className="text-white text-ls">{blog.user.bio}</p>
                      </div>
                      <CommentSection blog={blog} />

                    </div>
                    <div className="lg:col-span-4 col-span-1">
                      <div className="lg:sticky relative top-8">
                        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                          <h3 className="text-xl mb-8 font-semibold border-b pb-4">Related Posts</h3>
                          {filtered && filtered.map((post, index) => (
                            <div>
                              <div className="flex items-center w-full mb-4">
                                <div className="w-16 flex-none">
                                  <img src={Blog} alt='{post.title}' className="h-14 w-14 align-middle bg-gray-200 rounded-full" />
                                </div>
                                <div className="flex-grow ml-4">
                                  <p className="text-gray-500 font-xs">34hr ago</p>
                                  <button type='button' onClick={() => handleView(post)} className="text-md">
                                    {post.title}
                                  </button>
                                </div>
                              </div>

                            </div>
                          ))}
                        </div>
                        {/* <Categories /> */}
                        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                          <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
                          {Categories.map((category, index) => (
                            <div>

                              <button onClick={() => handleCategory(category.name)} key={index}>
                                <span className={`cursor-pointer block border-b pb-3 mb-3`}>
                                  {category.name}
                                </span>
                              </button>
                            </div>

                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="flext justify-right items-right pl-24 my-8">
                  <h3 className="text-semibold text-3xl   pb-3 mb-3"> Other content by {blog.user.firstName}</h3>
                  <Carousel />
                </div>
              </div>

            ) : (<div>Loading...</div>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};
export default BlogDetail;
