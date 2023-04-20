import React, { useContext } from "react";
import { useStateContext } from "../../context/ContextProvider";
import prodcut1 from '../../assets/undraw_connecting_teams_re_hno7.svg'
import { useNavigate } from 'react-router-dom';
import BlogContext from './../../context/blog/blogContext';

const BlogPost = ({ blog }) => {
  const blogContext = useContext(BlogContext)
  if (blog.blogImages.lenght >= 1) {
    console.log(blog.blogImages[0])
  }
  const { getBlog } = blogContext
  const navigate = useNavigate()

  const handleView = () => {
    getBlog(blog._id, blog.category)
    navigate(`/blog/${blog._id}`)
  }
  const { currentColor } = useStateContext();
  return (
    <div class=" flex flex-col items-start rounded-xl shadow-xl bg-white overflow-hidden col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
      <div class="relative w-full">

        <img src={blog.blogImages[0]} className="object-cover w-full mb-4 overflow-hidden max-h-56 transition duration-500 hover:scale-105" />

        <div class="p-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto w-1/2  text-white bg-opacity-83 rounded-sm">
          <p class="p-1 text-center mx-auto" style={{ backgroundColor: "#101d2c" }}>{blog.category}</p>
        </div>
      </div>
      <div className="pl-3 pb-1">
        <a class="text-lg font-bold sm:text-xl md:text-2xl">{blog.title}</a>
        <p class="mt-2 text-sm text-black">{blog.excerpt}</p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <div className="pt-2 pr-0 pb-0 pl-0">
            <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
              <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">{blog.user.firstName}</a>
              <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 10th, April 2023 ·</p>
            </a>
            <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min.
            </p>
          </div>

          <div className="flex items-center flex-wrap p-3">
            <button onClick={() => handleView()} type='button' className=" text-white hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg" style={{ backgroundColor: currentColor }}>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost