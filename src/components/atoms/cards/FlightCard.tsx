import { useRouter } from 'next/router';
import React from 'react';
import { Plane } from 'tabler-icons-react';

import { formatDate } from '@/utils/customFunctions';

import Button from '../Button';

export default function FlightCard(props: any) {
  const router = useRouter();
  return (
    <div
      className="w-full cursor-pointer space-y-5 rounded-lg"
      onClick={() => router.push(`/explore/${props.data.id}`)}
    >
      {/* image */}
      <div className="h-80 rounded-3xl bg-gray-100">
        <img
          src="/assets/images/flight.jpeg"
          alt=""
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>

      <div className="space-y-5 p-3">
        <div className="flex items-center justify-between">
          <h1 className="text-md">
            {`${props.data.departure_airport.city}, ${props.data.departure_airport.country} - ${props.data.arrival_airport.city}, ${props.data.arrival_airport.country}`}
          </h1>

          <div className="flex items-center gap-2 text-xs text-red-default">
            <Plane strokeWidth={1} />
            <span className="">{props.data.airline}</span>
          </div>
        </div>

        {/* highlights */}

        {/* show hours  */}
        <div className="flex items-center gap-2 text-xs text-red-default">
          <span className="">{formatDate(props.data.departure_time)}</span>
          <span className="">-</span>
          <span className="">{formatDate(props.data.arrival_time)}</span>
        </div>

        {/* one way round trip */}
        <div className="flex items-center gap-2 text-xs text-red-default">
          <span className="">Round trip</span>
        </div>

        {/* book button */}

        <div className="w-full md:w-1/2 ">
          <Button title="Book flight" capitalize size="text-xs" />
        </div>
      </div>
    </div>
  );
}
