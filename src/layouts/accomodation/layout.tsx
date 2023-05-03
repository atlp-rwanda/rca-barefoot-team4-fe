import React from 'react';

import ProfileArea from '@/components/atoms/profile-area';
import Sidebar from '@/components/sidebar';

const AccomodationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-screen">
      <div className="flex">
        <div className="w-[15%] sm:w-[20%]">
          <Sidebar />
        </div>

        <section className="w-[85%]">
          <div className="">
            <ProfileArea />
          </div>
          {children}
        </section>
      </div>
    </main>
  );
};

export default AccomodationLayout;
