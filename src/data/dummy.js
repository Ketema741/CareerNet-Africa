import React from 'react';
import { RiContactsLine } from 'react-icons/ri';
import { FiShoppingBag, FiCreditCard } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { MdOutlineWork, MdOutlineSupportAgent } from 'react-icons/md';

import { FcAbout } from 'react-icons/fc';

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    url: 'profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    url: 'profile',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    url: 'profile',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];


export const links = [
  {
    title: 'Pages',
    links: [
      {
        name: 'Jobs',
        to: 'jobs',
        icon: <MdOutlineWork />,
      },
      {
        name: 'Blogs',
        to: 'blogs',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'CareerNet ',
    links: [
      {
        name: 'About Us',
        to: 'aboutus',
        icon: <FcAbout />,
      },
      {
        name: 'FAQ',
        to: 'faq',
        icon: <MdOutlineSupportAgent />,
      }
    ],
  }
];



export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];
