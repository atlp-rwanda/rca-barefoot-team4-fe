import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { ImLocation } from 'react-icons/im';

import RequiredMark from '@/components/requiredMark';

import type { IAccomodation } from '.';

const RegisterDestination = ({
  page,
  setPage,
  accomodationState,
  setAccomodationState,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  accomodationState: IAccomodation;
  setAccomodationState: Dispatch<SetStateAction<IAccomodation>>;
}) => {
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value } = e.target;
    setAccomodationState({
      ...accomodationState,
      [e.target.name]: value,
    });
  }

  return (
    <div className="relative mx-auto my-[2rem] w-[95%] px-0 py-[4rem] text-[#3F3F3F] shadow-md sm:w-[45%]">
      <form className="relative m-auto w-[90%] rounded-sm px-[1rem] py-0 sm:px-[5rem]">
        <h1 className="pb-[1rem] pl-0 pr-[1rem] pt-[2rem] text-center text-[1.5rem] font-[500]">
          Register Destination
        </h1>
        <div className="mx-0 my-[1rem]">
          <label className="mx-0 my-[0.5rem] flex" htmlFor="dest-name">
            Destination name
            <RequiredMark />
          </label>
          <input
            type="text"
            value={accomodationState?.destinationName}
            onChange={(e) => handleChange(e)}
            name="destinationName"
            placeholder="Provide your destination"
            id="dest-name"
            className="w-full rounded-[5px] border-[1px] border-[#e6e6e6] p-[0.3rem] focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="relative sm:mr-[1rem]">
            <label className="mx-0 my-[0.5rem] flex" htmlFor="address">
              Address
              <RequiredMark />
            </label>
            <input
              type="text"
              value={accomodationState?.address}
              onChange={(e) => handleChange(e)}
              name="address"
              placeholder="Provide the address"
              id="address"
              className="w-full rounded-[5px] border-[1px] border-[#e6e6e6] p-[0.3rem] focus:outline-none"
              required
            />
            <ImLocation className="absolute right-[1rem] top-[3rem] text-[1.3rem] text-[#f20544]" />
          </div>

          <div className="mx-0 my-[1rem]">
            <label className="mx-0 my-[0.5rem] flex" htmlFor="contact">
              Contact
              <RequiredMark />
            </label>
            <input
              type="text"
              value={accomodationState?.contact}
              onChange={(e) => handleChange(e)}
              name="contact"
              placeholder="Provide your Email or Phone number"
              id="contact"
              className="w-full rounded-[5px] border-[1px] border-[#e6e6e6] p-[0.3rem] focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mx-0 my-[1rem]">
          <label className="mx-0 my-[0.5rem] flex" htmlFor="description">
            Description
            <RequiredMark />
          </label>
          <textarea
            value={accomodationState?.description}
            onChange={(e) => handleChange(e)}
            name="description"
            style={{ height: '100px' }}
            id="description"
            placeholder="Provide a small description of the accomodation facility"
            className="h-[60%] w-[100%] rounded-[5px] border-x-[1px] border-y-[2px] border-[#e6e6e6] p-[0.3rem] focus:outline-none sm:w-[75%]"
            required
          ></textarea>
        </div>

        <div className="mx-0 my-[1rem]">
          <label className="mx-0 my-[0.5rem] flex" htmlFor="dest-url">
            Url
          </label>
          <input
            type="text"
            value={accomodationState?.websiteUrl}
            onChange={(e) => handleChange(e)}
            name="websiteUrl"
            placeholder="Provide a url to your website or info"
            id="dest-url"
            className="w-full rounded-[5px] border-[1px] border-[#e6e6e6] p-[0.3rem] focus:outline-none"
            required
          />
        </div>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="absolute right-0 px-[1rem] py-[1.5rem] text-[#f20544] underline sm:px-[5rem]"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default RegisterDestination;
