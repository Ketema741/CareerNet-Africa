import React, { useEffect, useState } from 'react';

import { useStateContext } from '../../context/ContextProvider';


import JobCard from './JobCard'
import Header from '../Header'

const Jobs = () => {
    const {
        setCurrentColor,
        setCurrentMode,
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
        <div>
            <JobCard />
        </div>
    );
};
export default Jobs;
