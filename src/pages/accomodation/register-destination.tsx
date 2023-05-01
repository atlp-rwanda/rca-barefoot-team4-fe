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
    <div className="create-accomodation">
      <div className="create-accomodation__form">
        <h1 className="form-header">Register Destination</h1>
        <div className="create-accomodation__form__group">
          <label
            className="create-accomodation__form__group--label"
            htmlFor="dest-name"
          >
            Destination name
            <RequiredMark />
          </label>
          <input
            type="text"
            value={accomodationState.destinationName}
            onChange={(e) => handleChange(e)}
            name="destinationName"
            placeholder="Provide your destination"
            id="dest-name"
            className="create-accomodation__form__group--input"
          />
        </div>

        <div className="create-accomodation__form--double-group">
          <div className="create-accomodation__form__group location">
            <label
              className="create-accomodation__form__group--label"
              htmlFor="address"
            >
              Address
              <RequiredMark />
            </label>
            <input
              type="text"
              value={accomodationState.address}
              onChange={(e) => handleChange(e)}
              name="address"
              placeholder="Provide the address"
              id="address"
              className="create-accomodation__form__group--input"
            />
            <ImLocation className="create-accomodation__form__group--icon" />
          </div>

          <div className="create-accomodation__form__group">
            <label
              className="create-accomodation__form__group--label"
              htmlFor="contact"
            >
              Contact
              <RequiredMark />
            </label>
            <input
              type="text"
              value={accomodationState.contact}
              onChange={(e) => handleChange(e)}
              name="contact"
              placeholder="Provide your Email or Phone number"
              id="contact"
              className="create-accomodation__form__group--input"
            />
          </div>
        </div>
        <div className="create-accomodation__form__group">
          <label
            className="create-accomodation__form__group--label"
            htmlFor="description"
          >
            Description
            <RequiredMark />
          </label>
          <textarea
            value={accomodationState.description}
            onChange={(e) => handleChange(e)}
            name="description"
            // rows="3"
            id="description"
            placeholder="Provide a small description of the accomodation facility"
            className="create-accomodation__form__group--input description"
          ></textarea>
        </div>

        <div className="create-accomodation__form__group">
          <label
            className="create-accomodation__form__group--label"
            htmlFor="dest-url"
          >
            Url
          </label>
          <input
            type="text"
            value={accomodationState.websiteUrl}
            onChange={(e) => handleChange(e)}
            name="websiteUrl"
            placeholder="Provide a url to your website or info"
            id="dest-url"
            className="create-accomodation__form__group--input"
          />
        </div>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="create-accomodation__form--next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RegisterDestination;
