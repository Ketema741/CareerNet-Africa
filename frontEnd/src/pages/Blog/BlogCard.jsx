import React from "react";
import { NavLink } from 'react-router-dom'
import { useStateContext } from "../../context/ContextProvider";
import prodcut2 from '../../assets/undraw_connecting_teams_re_hno7.svg'
import prodcut3 from '../../assets/undraw_road_to_knowledge_m8s0.svg'
import prodcut4 from '../../assets/undraw_online_learning_re_qw08.svg'
import prodcut5 from '../../assets/undraw_team_collaboration_re_ow29.svg'

function BlogPost() {
  const { currentColor } = useStateContext();

  
  return (

    <div>
      <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
        <div class=" flex flex-col items-start rounded-xl shadow-xl bg-white overflow-hidden col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
          <div class="relative w-full">
            <img src={prodcut5} className="object-cover w-full mb-4 overflow-hidden max-h-56 transition duration-500 hover:scale-105" />
            <div class="p-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto w-1/2  text-white bg-opacity-83 rounded-sm">
              <p class="p-1 text-center mx-auto" style={{ backgroundColor: "#101d2c" }}>Travel</p>
            </div>
          </div>
          <div className="pl-3 pb-1">
            <a class="text-lg font-bold sm:text-xl md:text-2xl">Explore the world's hidden gems</a>
            <p class="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Betselot T.</a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 10th, April 2023 ·</p>
                </a>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min.
                </p>
              </div>

              <div className="flex items-center flex-wrap p-3">
                <NavLink to='/blog-detail' className=" text-white hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg" style={{ backgroundColor: currentColor }}>
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>


        <div class=" flex flex-col items-start rounded-xl shadow-xl bg-white overflow-hidden col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
          <div class="relative w-full">
            <img src={prodcut2} className="object-cover w-full mb-4 overflow-hidden shadow-sm max-h-56 transition duration-500 hover:scale-105" />
            <div class="p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto w-1/2  text-white bg-opacity-83 rounded-sm">
              <p class="p-1 text-center mx-auto" style={{ backgroundColor: "#101d2c" }}>Travel</p>
            </div>
          </div>


          <div className="pl-3 pb-1">
            <a class="text-lg font-bold sm:text-xl md:text-2xl">Explore the world's hidden gems</a>
            <p class="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Betselot T.</a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 10th, April 2023 ·</p>
                </a>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min.
                </p>
              </div>

              <div className="flex items-center flex-wrap p-3">
                <NavLink to='/blog-detail' className="  text-white hover:scale-105  px-4 py-1 rounded-lg" style={{ backgroundColor: currentColor }}>
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div class=" flex flex-col items-start rounded-xl shadow-xl bg-white overflow-hidden col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
          <div class="relative w-full">
            <img src={prodcut3} className="object-cover w-full mb-4 overflow-hidden shadow-sm max-h-56 transition duration-500 hover:scale-105" />
            <div class="p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto w-1/2  text-white bg-opacity-83 rounded-sm">
              <p class="p-1 text-center mx-auto" style={{ backgroundColor: "#101d2c" }}>Travel</p>
            </div>
          </div>


          <div className="pl-3 pb-1">
            <a class="text-lg font-bold sm:text-xl md:text-2xl">Explore the world's hidden gems</a>
            <p class="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Betselot T.</a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 10th, April 2023 ·</p>
                </a>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min.
                </p>
              </div>

              <div className="flex items-center flex-wrap p-3">
                <NavLink to='/blog-detail' className=" text-white hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg" style={{ backgroundColor: currentColor }}>
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div class=" flex flex-col items-start rounded-xl shadow-xl bg-white overflow-hidden col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
          <div class="relative w-full">
            <img src={prodcut4} className="object-cover w-full mb-4 overflow-hidden shadow-sm max-h-56 transition duration-500 hover:scale-105" />
            <div class="p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto w-1/2  text-white bg-opacity-83 rounded-sm">
              <p class="p-1 text-center mx-auto" style={{ backgroundColor: "#101d2c" }}>Travel</p>
            </div>
          </div>
          <div className="pl-3 pb-1">
            <a class="text-lg font-bold sm:text-xl md:text-2xl">Explore the world's hidden gems</a>
            <p class="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Betselot T.</a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 10th, April 2023 ·</p>
                </a>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min.
                </p>
              </div>

              <div className="flex items-center flex-wrap p-3">
                <NavLink to='/blog-detail' className=" text-white hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg" style={{ backgroundColor: currentColor }}>
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div class=" flex flex-col items-start rounded-xl shadow-xl bg-white overflow-hidden col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 ">
          <div class="relative w-full">
            <img src={prodcut5} className="object-cover w-full mb-4 overflow-hidden shadow-sm max-h-56 transition duration-500 hover:scale-105" />
            <div class="p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-auto w-1/2  text-white bg-opacity-83 rounded-sm">
              <p class="p-1 text-center mx-auto" style={{ backgroundColor: "#101d2c" }}>Travel</p>
            </div>
          </div>
          
          <div className="pl-3 pb-1">
            <a class="text-lg font-bold sm:text-xl md:text-2xl">Explore the world's hidden gems</a>
            <p class="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Betselot T.</a>
                  <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 10th, April 2023 ·</p>
                </a>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min.
                </p>
              </div>

              <div className="flex items-center flex-wrap p-3">
                <NavLink to='/blog-detail' className=" text-white hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg" style={{ backgroundColor: currentColor }}>
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost