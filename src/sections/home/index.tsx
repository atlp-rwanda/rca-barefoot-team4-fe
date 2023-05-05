// import RootLayout from '@/layouts/layout';

import { HomeModernIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';
import { Car, Plane } from 'tabler-icons-react';

import Button from '@/components/atoms/Button';

const Index = () => {
  type TTab = {
    title: string;
    icon: React.ReactNode;
  };

  const tabs = [
    {
      title: 'Hotels',
      icon: <HomeModernIcon strokeWidth={1} className="h-6 w-6" />,
    },
    {
      title: 'Flights',
      icon: <Plane strokeWidth={1} />,
    },
    {
      title: 'Cars',
      icon: <Car strokeWidth={1} />,
    },
  ];

  const defaultTab = tabs[0] as TTab;

  const [currentTab, setCurrentTab] = useState<TTab>(defaultTab);

  function changeTab(index: number) {
    setCurrentTab(tabs[index] as TTab);
  }

  // submit

  async function handleSubmit() {
    alert('to integrate');
  }

  return (
    <div className="">
      <div className="w-screen space-y-5 bg-white py-5 lg:h-screen lg:px-10">
        {/* navbar */}

        <div className="flex justify-between px-5 lg:h-[10vh] lg:px-0">
          <div className="flex items-center gap-2">
            <img src="/assets/images/logo-plain-red.png" alt="" />
            <h1 className="hidden font-bold capitalize text-red-default lg:block">
              barefoot nomad
            </h1>
          </div>

          {/* user profile */}

          <div className="">
            <div className="flex items-center gap-5 rounded-full bg-white shadow-lg lg:p-4">
              <div className="rounded-full bg-gray-200 lg:h-10 lg:w-10">
                {/* image */}
                <img
                  src="/assets/images/profile.png"
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              {/* name */}
              <div className="hidden space-y-2 text-sm font-bold lg:block">
                <h1 className="text-sm text-black">Lucas John</h1>
                <Link href="#" className="text-xs text-red-default underline">
                  View profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="relative h-[80vh] px-10 lg:h-[70vh] lg:px-0">
          <div className="bg--banner-img flex h-[40vh] w-full items-center  justify-end rounded-xl lg:h-full lg:px-10">
            <div className="absolute bottom-0 left-0 w-full px-5 lg:relative lg:w-1/3 lg:px-0">
              <div className="w-full rounded-2xl bg-white p-5 shadow-2xl shadow-gray-500 lg:p-10 lg:shadow-none">
                <h1 className="text-xl font-bold text-black lg:text-3xl">
                  Where would you like to go?
                </h1>

                {/* tabs */}

                <div className="my-10 flex justify-between gap-1">
                  {tabs.map((tab, index) => {
                    return (
                      <div
                        className={`
                        
                        ${
                          currentTab.title === tab.title
                            ? 'bg-red-default  text-white '
                            : 'bg-white'
                        }
                        flex cursor-pointer items-center gap-2 rounded-full px-5 py-2
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

                {/* form */}

                <form action="" className="space-y-5" onSubmit={handleSubmit}>
                  <div className="">
                    {/* input */}

                    <div className="flex rounded-full border-2 border-gray-200 bg-white ">
                      <input
                        type="text"
                        className="
                      w-full
                   rounded-full px-5
                   py-4
                   outline-none
                  "
                        placeholder="Where are you going?"
                      />
                    </div>

                    {/* list of places */}
                  </div>

                  {/* time frame */}
                  <div className="flex gap-5 text-xs">
                    <div className="w-full space-y-2">
                      <label htmlFor="" className="block text-sm text-gray-600">
                        From
                      </label>
                      <div className="flex w-full rounded-full border-2 border-gray-200 bg-white">
                        <input
                          type="date"
                          className="
                            rounded-full px-5
                            py-4
                            outline-none
                            "
                          placeholder="Where are you going? text-sm"
                        />
                      </div>
                    </div>

                    <div className="w-full space-y-2">
                      <label htmlFor="" className="block text-sm text-gray-600">
                        To
                      </label>
                      <div className="flex w-full rounded-full border-2 border-gray-200 bg-white">
                        <input
                          type="date"
                          className="
      rounded-full px-5
      py-4
      outline-none
      "
                          placeholder="Where are you going? text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    capitalize
                    title={`search ${currentTab?.title}`}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*  body ends here */}
      </div>
    </div>
  );
};
export default Index;
