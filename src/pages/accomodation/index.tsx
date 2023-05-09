import React, { useState } from 'react';
import { FaHome, FaHotel, FaRegistered } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import type { TTab } from '@/services/types';

import RegIndex from './registration';

const tabs = [
  {
    title: 'Home',
    to: 'home',
    icon: <FaHome className="text-xl sm:text-base" />,
  },
  {
    title: 'Accomodations',
    to: '/accomodation/list',
    icon: <FaHotel className="text-xl sm:text-base" />,
  },
  {
    title: 'Register accomodation',
    to: <RegIndex />,
    icon: <FaRegistered className="text-xl sm:text-base" />,
  },
  {
    title: 'Settings',
    to: '/accomodation/settings',
    icon: <MdSettings className="text-2xl sm:text-base" />,
  },
];

const Index = () => {
  const defaultTab = tabs[0] as TTab;

  const [currentTab, setCurrentTab] = useState<TTab>(defaultTab);

  function changeTab(index: number) {
    setCurrentTab(tabs[index] as TTab);
  }

  return (
    <div className="flex">
      <div className="h-screen w-[20%] bg-[#FCDDEC] p-4 sm:p-[2rem]">
        <div className="my-10 flex flex-col justify-between gap-2 ">
          {tabs.map((tab, index) => {
            return (
              <div
                className={`
                  
                  ${
                    currentTab.title === tab.title
                      ? 'bg-red-default text-white '
                      : ''
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
      </div>

      <div className="w-[80%]">{currentTab?.to}</div>
    </div>
  );
};

export default Index;
