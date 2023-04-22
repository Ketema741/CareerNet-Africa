import React, { useContext } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Button from './Button';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import AuthContext from "../context/Auth/authContext";
import avatar from '../assets/fitsum.png';


const UserProfile = ({ onLogout }) => {
  const { currentColor } = useStateContext();
  const authContext = useContext(AuthContext);
  const { user } = authContext;


  return (
    <div className="z-100 nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96" style={{zIndex:"2000"}}>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        {user &&
          <div>
            <p className="font-semibold text-xl dark:text-gray-200"> {user.firstName} </p>
            <p className="text-gray-500 text-sm dark:text-gray-400">  User   </p>
            <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {user.email}</p>
          </div>
        }
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <Link to={`/${item.url}`}>
            <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#a5c2f4]">

              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5">
        <button
          type="button"
          onClick={() => onLogout()}
          className=" p-3 w-full hover:drop-shadow-xl hover:bg-light-gray"
          style={{ backgroundColor: currentColor, color: "white", borderRadius: "10px" }}
        >
          Logout
        </button>
      </div>
    </div>

  );
};

export default UserProfile;
