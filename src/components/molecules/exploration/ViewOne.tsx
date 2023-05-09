import React from 'react';
import { Heart, Star } from 'tabler-icons-react';

import Button from '@/components/atoms/Button';

export default function ViewOne() {
  return (
    <div className="space-y-5 p-20">
      <div className="space-y-5">
        {/* detail : location */}

        <div>
          <h1 className="text-lg capitalize text-red-default">
            kanto, Tanzania
          </h1>

          <h2 className="text-xs text-gray-600">Eastern Tanzania,safari</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2">
        {/* image and intro */}

        {/* image */}

        <div className="h-[60vh] w-full bg-gray-100">
          <img
            src="/assets/images/exploreOne.png"
            className="h-full w-full"
            alt=""
          />
        </div>
        {/* description */}

        <div className="space-y-5">
          <h1 className="text-sm font-bold capitalize">description</h1>

          <p className="text-sm leading-loose text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>

          {/* action button */}

          <div className="flex gap-10">
            <div className="w-1/3">
              <Button title="book destination" capitalize size="text-xs" />
            </div>

            {/* like */}
            <div>
              <div
                className="flex h-10 w-10 cursor-pointer
              items-center justify-center rounded-full

              border-red-default
              text-red-default
              hover:bg-red-default
              hover:text-white
              "
              >
                <Heart strokeWidth={1} size={20} className="" />
              </div>
            </div>
          </div>

          {/* comment */}

          <div className="">
            <form action="" className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="" className="text-sm text-red-default">
                  Add comment
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-gray-300 bg-white p-3 text-sm outline-none"
                />
              </div>

              <div className="flex items-start  justify-between gap-10">
                <div className="w-1/3">
                  <Button title="Send comment" size="text-xs" />
                </div>

                {/* rate */}
                <div className="">
                  <h1 className="text-sm capitalize text-red-default">
                    Rate us
                  </h1>
                  <div className="flex gap-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => {
                        return (
                          <div key={i}>
                            <Star
                              strokeWidth={1}
                              size={15}
                              className="
                  cursor-pointer
                  hover:text-red-default
                  "
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
