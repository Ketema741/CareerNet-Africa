import React, { useEffect, useContext } from 'react';

import { Navbar, Footer, Sidebar } from '../components';
import { useStateContext } from '../context/ContextProvider';

import Jobs from './Job/Jobs'
import Header from './Header'
import BlogContext from '../context/blog/blogContext';

const Home = () => {

    const blogContext = useContext(BlogContext)
    const { blogs, getBlogs } = blogContext
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, } = useStateContext();



    useEffect(() => {

        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');

        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
        getBlogs()
    }, []);

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
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
                            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-52 w-full  "
                            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                    }
                >
                    <div className="sticky md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>
                    <div>
                        <Header />
                        <Jobs />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
