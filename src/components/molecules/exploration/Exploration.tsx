import React from 'react';
import { useQuery } from 'react-query';

import FlightCard from '@/components/atoms/cards/FlightCard';
import FlightCardLoader from '@/components/atoms/loaders/FlightCardLoader';
import type { IResponse } from '@/services/interfaces';

import Breadcrumb from '../../atoms/Breadcrumb';

export default function Exploration() {
  const { data, isFetching } = useQuery<IResponse>(
    'flightsFromTimeAndLocation'
  );

  return (
    <div className="p-4 py-5 text-sm md:px-20">
      <Breadcrumb />
      {/* navigation */}
      <div className="grid grid-cols-1 justify-evenly gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* card */}
        {/* eslint-disable-next-line no-nested-ternary */}
        {!isFetching ? (
          data?.data?.length > 0 ? (
            data?.data?.map((item: any, i: number) => {
              return <FlightCard key={i} data={item} />;
            })
          ) : (
            <div className="flex items-center rounded bg-red-50 p-10">
              <h1 className="text-red-default">No flights found</h1>
            </div>
          )
        ) : (
          Array.from(Array(6)).map((_, i) => {
            return <FlightCardLoader key={i} />;
          })
        )}
      </div>
    </div>
  );
}
