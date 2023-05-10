import { useRouter } from 'next/router';
import React from 'react';
import { FaAddressBook, FaGlobe, FaPhoneAlt } from 'react-icons/fa';

import Button from '../Button';

export default function AccomodationCard(props: any) {
  const router = useRouter();
  return (
    <div
      className="w-full cursor-pointer space-y-5 rounded-lg"
      onClick={() => router.push(`/explore/accomodation/${props.data.id}`)}
    >
      {/* image */}
      <div className="h-80 rounded-3xl bg-gray-100">
        <img
          src={props.data.centerImage}
          alt=""
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>

      <div className="space-y-5 p-3">
        <div className="flex items-center justify-between">
          <h1 className="text-md">{props.data.destinationName}</h1>

          <div className=" flex flex-col gap-3 text-xs text-red-default">
            <p className="flex items-center gap-2">
              <FaPhoneAlt strokeWidth={1} />
              <span> {props.data.contact}</span>
            </p>

            <p className="flex items-center gap-2">
              <FaAddressBook />
              <span>{props.data.address}</span>
            </p>
          </div>
        </div>

        {/* highlights */}

        {/* show hours  */}
        <div className="flex items-center gap-2 text-xs text-red-default">
          <span className="text-sm">
            <FaGlobe />
          </span>{' '}
          {props.data?.websiteUrl}
        </div>

        <div className="w-full md:w-1/2 ">
          <Button title="Book" capitalize size="text-xs" />
        </div>
      </div>
    </div>
  );
}
