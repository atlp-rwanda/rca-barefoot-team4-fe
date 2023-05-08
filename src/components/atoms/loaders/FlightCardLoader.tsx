import React from 'react';

export default function FlightCardLoader() {
  return (
    <div className="animate-pulse space-y-5">
      <div className="h-80 w-full rounded-lg bg-gray-100"></div>
      <div className="my-3 flex gap-5">
        <div className="h-5 w-3/5 rounded-lg bg-gray-100"></div>
        <div className="h-5 w-2/5 rounded-lg bg-gray-100"></div>
      </div>
      <div className="my-3">
        <div className="h-5 w-full rounded-lg bg-gray-100"></div>
      </div>
    </div>
  );
}
