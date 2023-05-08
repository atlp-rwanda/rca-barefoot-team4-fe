import { useRouter } from 'next/router';
import React from 'react';
import { Map2 } from 'tabler-icons-react';

import Button from '../Button';

export default function ExplorationCard(props: any) {
  const router = useRouter();
  return (
    <div
      className="w-full cursor-pointer space-y-5 rounded-lg"
      onClick={() => router.push(`/explore/${props.data.id}`)}
    >
      {/* image */}
      <div className="h-80 rounded-3xl bg-gray-100">
        <img
          src="/assets/images/giraffe.png"
          alt=""
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>

      <div className="space-y-5 p-3">
        <div className="flex items-center justify-between">
          <h1 className="text-md">Eastern Tanzania Safari</h1>

          <div className="flex items-center gap-2 text-xs text-red-default">
            <Map2 strokeWidth={1} />
            <span className="">Kanto, Tanzania</span>
          </div>
        </div>

        {/* highlights */}

        <p className="text-xs text-gray-600">
          Embark on a journey through the Serengeti, witness the Great
          Wildebeest Migration, or catch a glimpse of the majestic Big Five.
        </p>

        {/* book button */}

        <div className="w-full md:w-1/2 ">
          <Button title="Book destination" capitalize size="text-xs" />
        </div>
      </div>
    </div>
  );
}
