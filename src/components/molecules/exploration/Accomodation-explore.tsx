import React from 'react';
import { useQuery } from 'react-query';

import AccomodationCard from '@/components/atoms/cards/AccomodationCard';
import FlightCardLoader from '@/components/atoms/loaders/FlightCardLoader';
import type { IResponse } from '@/services/interfaces';

export default function AccomodationExplore() {
  const { data, isFetching } = useQuery<IResponse>('foundAccomodations');

  return (
    <div className="p-4 py-5 text-sm md:px-20">
      <div className="grid grid-cols-1 justify-evenly gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* card */}
        {/* eslint-disable-next-line no-nested-ternary */}
        {!isFetching ? (
          data?.accomodations?.length > 0 ? (
            data?.accomodations?.map((item: any, i: number) => {
              return <AccomodationCard key={i} data={item} />;
            })
          ) : (
            <div className="flex items-center rounded bg-red-50 p-10">
              <h1 className="text-red-default">No hotels found</h1>
            </div>
          )
        ) : (
          Array.from(Array(6)).map((_, i) => {
            return <FlightCardLoader key={i} />;
          })
        )}
      </div>{' '}
    </div>
  );
}
