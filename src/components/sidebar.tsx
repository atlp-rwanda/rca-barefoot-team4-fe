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
