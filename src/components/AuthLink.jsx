import React from 'react';
import { ItemFilter } from '../pages';
import bg from '../data/bg2.jpg'; // 2 3 6 8

import { GiDeliveryDrone } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';


const Navbar = () => {

  return (
    <div className="flex justify-center bg-transparent dark:bg-transparent shadow relative"
      style={{
        height: "200px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="flex mx-auto">
        <ItemFilter />
      </div>

      <div className="absolute  bottom-[-50px] mx-auto flex justify-between items-center w-3/4 bg-white p-5 shadow-xl rounded-xl">
        <div className="flex gap-x-5 dark:text-gray-200 ">
          <button type="button" className="text-2xl p-3 opacity-0.9 rounded-full hover:drop-shadow-xl" style={{ color: 'rgb(255, 244, 229)', backgroundColor: 'rgb(254, 201, 15)' }}>
            <TbTruckDelivery />
          </button>
          <div className=''>
            <p className='text-xl font-semibold'>
              Delivery Service
            </p>
            <span className='text-sm text-gray-500'>
              Realiable Delilvery

            </span>
          </div>
        </div>
        <div className=" flex gap-x-5  dark:text-gray-200 ">
          <button type="button" className="text-2xl p-3 opacity-0.9 rounded-full hover:drop-shadow-xl" style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}>
            <GiDeliveryDrone />
          </button>
          <div className=''>
            <p className='text-xl font-semibold'>
              Delivery Service
            </p>
            <span className='text-sm text-gray-500'>
              Realiable Delilvery

            </span>
          </div>
        </div>
        <div className=" flex gap-x-5  dark:text-gray-200">
          <button type="button" className="text-2xl p-3 opacity-0.9 rounded-full hover:drop-shadow-xl" style={{ color: 'rgb(228, 106, 118)', backgroundColor: 'rgb(255, 244, 229)' }}>
            <GiDeliveryDrone />
          </button>
          <div className=''>
            <p className='text-xl font-semibold'>
              Delivery Service
            </p>
            <span className='text-sm text-gray-500'>
              Realiable Delilvery

            </span>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
