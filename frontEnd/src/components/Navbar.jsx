import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';

import Notification from './Notification';;
import Profile from './Profile'

import AuthContext from "../context/Auth/authContext";
import { useStateContext } from '../context/ContextProvider';


const GuestLinks = (
  <div className="flex  gap-x-5">
    <Link className="pt-2 cursor-pointer hover:bg-light-gray rounded-lg" to="/register">
      Register
    </Link>

    <Link className=" pt-2 pr-5 cursor-pointer hover:bg-light-gray rounded-lg" to="/login">
      Login
    </Link>
  </div>
);

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);


const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isUserAuthenticated, user, logout } = authContext;

  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const onLogout = () => {
    logout();
  };

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between bg-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow-2xl relative ">

      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        {isUserAuthenticated ?
          <Fragment>
           

            <div className="hidden sm:block">
              <NavButton
                title="Chat"
                dotColor="#03C9D7"
                customFunc={() => handleClick("chat")}
                color={currentColor}
                icon={<BsChatLeft />}
              />
            </div>

            <div className="hidden sm:block">
              <NavButton
                title="Notification"
                dotColor="rgb(254, 201, 15)"
                customFunc={() => handleClick("notification")}
                color={currentColor}
                icon={<RiNotification3Line />}
              />
            </div>
            <TooltipComponent content="Profile" position="BottomCenter">
              <div
                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                onClick={() => handleClick("userProfile")}
              >
                <img
                  className="rounded-full w-8 h-8"
                  src={avatar}
                  alt="user-profile"
                />
                <MdKeyboardArrowDown className="text-gray-400 text-14" />
              </div>
            </TooltipComponent>

        
            {isClicked.notification && <Notification />}
            {isClicked.userProfile && <Profile onLogout={onLogout} />}
          </Fragment>
          :
          GuestLinks
        }
      </div>
    </div>
  );
};

export default Navbar;
