import Link from 'next/link';
import React from 'react';
import { FaHome, FaHotel, FaRegistered } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import Logo from './atoms/logo';

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#FCDDEC] p-4 sm:p-[2rem]">
      <Logo withText={false} />
      <ul className="mt-10 flex flex-col justify-center space-y-8 sm:space-y-4">
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
      </ul>
    </div>
  );
};

export default Sidebar;
