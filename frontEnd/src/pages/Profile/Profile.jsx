import React, { useContext, useEffect, Fragment } from 'react';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Sidebar, ThemeSettings } from '../../components';

import { useStateContext } from '../../context/ContextProvider';
import AuthContext from "../../context/Auth/authContext";

import Navbar from './Navbar'
import About from './About'
import Experience from './Experience'
import ProfileCard from './ProfileCard'

const Profile = () => {
    const authContext = useContext(AuthContext);
    const { isUserAuthenticated, user, logout } = authContext;
    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings,
    } = useStateContext();


    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');

        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: "50%" }}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
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
                            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                    }
                >
                    {user != null ? (
                        <Fragment>
                            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                                <Navbar name={user.firstName} currentColor={currentColor} />
                            </div>
                            <div>
                                {themeSettings && <ThemeSettings />}
                                <div className="mt-24 container mx-auto my-5 p-5">
                                    <div className="md:flex gap-2 no-wrap md:-mx-2 ">
                                        <div className="w-full md:w-3/12 md:mx-2">
                                            <ProfileCard currentColor={currentColor} name={user.firstName} />
                                            <div className="my-8"></div>
                                        </div>
                                        <div className="w-full md:w-9/12 mx-2 h-64">
                                            <About currentColor={currentColor} user={user} />
                                            <div className="my-6"></div>
                                            <Experience currentColor={currentColor} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                        :
                        (<div> No user</div>)
                    }

                </div>
            </div>
        </div>

    );
};

export default Profile;
