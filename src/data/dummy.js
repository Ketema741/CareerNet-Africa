import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineWork, MdOutlineSupportAgent } from 'react-icons/md';

import { FcAbout } from 'react-icons/fc';


export const kanbanGrid = [
  {
    headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true
  },

  {
    headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true
  },

  {
    headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false
  },

  {
    headerText: 'Done',
    keyField: 'Close',
    allowToggle: true
  },
];


export const links = [
  {
    title: 'Home',
    links: [
      {
        name: 'Home',
        to: '/home',
        icon: <FiShoppingBag />,
      },
    ],
  },

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
