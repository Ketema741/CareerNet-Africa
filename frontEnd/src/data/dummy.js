import React from 'react';
import { BsCompass } from 'react-icons/bs';
import { MdOutlineWork, MdOutlineSupportAgent, MdContentPasteSearch, MdOutlineManageAccounts, MdOutlineMail } from 'react-icons/md';
import { FcAbout, FcBusinessman } from 'react-icons/fc';
import { SiSkillshare, SiBookstack, SiFuturelearn } from 'react-icons/si'
import { TbCirclesRelation } from 'react-icons/tb'
import { AiOutlineRead, AiOutlineCloudUpload } from 'react-icons/ai'
import { FaBusinessTime, FaUniversity, FaRegCompass } from 'react-icons/fa'
import { GiSkills, GiBookshelf, GiBodyBalance,GiLifeSupport, GiSandsOfTime, GiHabitatDome } from 'react-icons/gi'
import { GrNavigate } from 'react-icons/gr'

export const Categories = [
  { name: 'Intenships' },
  { name: 'Resume' },
  { name: 'Study' },
  { name: 'Career Advice' },
]
export const schedule = [
  {
    icon: <MdOutlineWork />,
    amount: '39,354',
    person: 'hackathon@gmail.com',
    title: 'Exploring career paths',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {

    icon: <TbCirclesRelation />,
    amount: '4,396',
    person: 'betsi@gmail.com',
    title: 'Networking and building professional relationships',
    iconColor: '#A4BC92',
    iconBg: '#DDFFBB',
    pcColor: 'green-600',
  },
  {
    icon: <AiOutlineRead />,
    amount: '423,39',
    person: 'yoni@gmail.com',
    title: 'Resume and cover letter writing',
   iconColor: 'rgb(0, 194, 146)',
    iconBg: '#3A98B9',

    pcColor: 'green-600',
  },
  {
    icon: <SiSkillshare />,
    amount: '39,354',
    person: 'Aklile',
    title: 'Interview skills',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <BsCompass />,
    amount: '39,354',
    person: 'kgirma@gmail.com',
    title: 'Finding and applying for internships',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {

    icon: <FaBusinessTime />,
    amount: '4,396',
    person: 'tame@gmail.com',
    title: 'Entrepreneurship and starting a business',
    iconColor: '#A4BC92',
    iconBg: '#DDFFBB',
    pcColor: 'green-600',
  },
  {
    icon: <GiSkills />,
    amount: '423,39',
    person: 'Roza rozi@gmail.com',
    title: 'Developing relevant skills:',
   iconColor: 'rgb(0, 194, 146)',
    iconBg: '#3A98B9',
    pcColor: 'green-600',
  },

  {
    icon: <GrNavigate />,
    amount: '39,354',
    person: 'Dema dame@gmail.com',
    title: 'Navigating workplace culture',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <GiBookshelf />,
    amount: '423,39',
    person: 'Gawetch tap@gmail.com',
    title: 'Course and major selection',
   iconColor: 'rgb(0, 194, 146)',
    iconBg: '#3A98B9',
    pcColor: 'green-600',
  },
  {
    icon: <GiBodyBalance />,
    amount: '39,354',
    person: '101@gmail.com',
    title: 'Balancing work and personal life',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <MdContentPasteSearch />,
    amount: '423,39',
    person: 'Getu getch@gmail.com',
    title: 'Job search strategies',
   iconColor: 'rgb(0, 194, 146)',
    iconBg: '#3A98B9',

    pcColor: 'green-600',
  },


  // here
  {
    icon: <FaUniversity />,
    amount: '39,354',
    person: 'Tseganesh tsige@gmail.com',
    title: 'Campus involvement',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {

    icon: <GiSandsOfTime />,
    amount: '4,396',
    person: 'Kidus kidus@gmail.com',
    title: 'Time management',
    iconColor: '#A4BC92',
    iconBg: '#DDFFBB',
    pcColor: 'green-600',
  },
  {
    icon: <AiOutlineRead />,
    amount: '423,39',
    person: 'betsi@gmail.com',
    title: 'Internships and work experience',
    iconColor: '#FFEAAA',
    iconBg: '#3A98B9',

    pcColor: 'green-600',
  },
  {
    icon: <GiHabitatDome />,
    amount: '39,354',
    person: 'Gedion gedion@gmail.com',
    title: 'Study habits',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <MdOutlineWork />,
    amount: '39,354',
    person: 'Ketema g@gmail.com',
    title: 'Career exploration',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {

    icon: <FcBusinessman />,
    amount: '4,396',
    person: 'josi@gmail.com',
    title: 'Entrepreneurship & starting a business',
    iconColor: '#AA8E39',
    iconBg: '#FFEAAA',
    pcColor: 'green-600',
  },
  {
    icon: <SiFuturelearn />,
    amount: '423,39',
    person: 'Dawit dev@gmail.com',
    title: 'Developing relevant skills:',
   iconColor: 'rgb(0, 194, 146)',
    iconBg: '#3A98B9',

    pcColor: 'green-600',
  },

  {
    icon: <FaRegCompass />,
    amount: '39,354',
    person: 'Fitsum fitsum@gmail.com',
    title: 'Navigating workplace culture',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <SiBookstack />,
    amount: '423,39',
    person: 'Mr. Abdurahman abdu@gmail.com',
    title: 'Course & major selection',
   iconColor: 'rgb(0, 194, 146)',
    iconBg: '#3A98B9',

    pcColor: 'green-600',
  },
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



export const userProfileData = [
  {
    icon: <MdOutlineManageAccounts />,
    title: 'My Profile',
    url: 'profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <MdOutlineMail />,
    title: 'My Inbox',
    url: 'profile',
    desc: 'Messages',
    iconColor: 'rgb(87, 125, 134)',
    iconBg: 'rgb(185, 237, 221)',
  },
  {
    icon: <AiOutlineCloudUpload />,
    title: 'Blog Post',
    url: 'blog-posting',
    desc: 'Make A Post',
    iconColor: '#A4BC92',
    iconBg: '#DDFFBB',
  }
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
        name: 'Internships',
        to: 'internship',
        icon: <SiFuturelearn />,
      },
      {
        name: 'Guidance',
        to: 'blogs',
        icon: <GiLifeSupport />,
      },
    ],
  },
  {
    title: 'Career Net ',
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