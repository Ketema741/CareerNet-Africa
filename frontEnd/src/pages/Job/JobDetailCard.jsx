import React, { useEffect } from 'react';

import { Navbar, Footer, Sidebar } from '../../components';
import { useStateContext } from '../../context/ContextProvider';
import Header from './Header'
import Jobs from '../Job/Jobs'
import MeetingSchedule from '../Guidance/meetingSchedule'

const JobDetailCard = () => {
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

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
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
                    <div className="sticky  md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>

                    <Header />
                    <MeetingSchedule />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default JobDetailCard;
