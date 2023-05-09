import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome, FaHotel, FaRegistered } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import type { TTab } from '@/services/types';

import Logo from './atoms/logo';

const tabs = [
  {
    title: 'Home',
    to: '/accomodation',
    icon: <FaHome className="text-xl sm:text-base" />,
  },
  {
    title: 'Accomodations',
    to: '/accomodation/list',
    icon: <FaHotel className="text-xl sm:text-base" />,
  },
  {
    title: 'Register accomodation',
    to: '/accomodation/registration',
    icon: <FaRegistered className="text-xl sm:text-base" />,
  },
  {
    title: 'Settings',
    to: '/accomodation/settings',
    icon: <MdSettings className="text-2xl sm:text-base" />,
  },
];

const Sidebar = () => {
  const defaultTab = tabs[0] as TTab;

  const [currentTab, setCurrentTab] = useState<TTab>(defaultTab);

  function changeTab(index: number) {
    setCurrentTab(tabs[index] as TTab);
  }

  return (
    <div className="h-screen bg-[#FCDDEC] p-4 sm:p-[2rem]">
      <Logo withText={false} />
      {/* <ul className="mt-10 flex flex-col justify-center space-y-8 sm:space-y-4">
        <Link href={`/accomodation`} className="hover:no-underline">
          <li className="flex items-center space-x-3 text-red-default">
            <FaHome className="text-xl sm:text-base" />
            <span className="hidden sm:block">Home</span>
          </li>
        </Link>
        <Link href={`/accomodation/list`}>
          <li className="flex items-center space-x-3 text-red-default">
            <FaHotel className="text-xl sm:text-base" />
            <span className="hidden sm:block">Accomodations</span>
          </li>
        </Link>

        <Link href={`/accomodation/registration`}>
          <li className="flex items-center space-x-3 px-1 py-2  text-lg text-red-default visited:bg-red-default active:bg-red-default active:text-white sm:px-2 sm:py-4">
            <FaRegistered className="text-xl sm:text-base" />
            <span className="hidden sm:block"> Register accomodation</span>
          </li>
        </Link>

        <Link href={`/accomodation/settings`}>
          <li className="flex items-center space-x-3 text-red-default">
            <MdSettings className="text-2xl sm:text-base" />
            <span className="hidden sm:block">Settings</span>
          </li>
        </Link>
      </ul> */}

      <div className="my-10 flex flex-col justify-between gap-2">
        {tabs.map((tab, index) => {
          return (
            <div
              className={`
                        
                        ${
                          currentTab.title === tab.title
                            ? 'bg-red-default  text-white '
                            : 'bg-white'
                        }
                        flex cursor-pointer items-center gap-2 rounded-md px-5 py-4
                        text-xs hover:bg-red-default
                        hover:text-white
                        `}
              key={index}
              onClick={() => changeTab(index)}
            >
              {tab.icon}

              <span className="">{tab.title}</span>
            </div>
          );
        })}
      </div>

      <div>{currentTab?.to}</div>
    </div>
  );
};

export default Sidebar;
