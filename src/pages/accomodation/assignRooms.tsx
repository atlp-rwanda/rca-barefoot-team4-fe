import React from 'react';
import { FaCloudUploadAlt, FaPlusSquare } from 'react-icons/fa';

const AssignRooms = ({ page, setPage }) => {
  return (
    <div className="assign-rooms">
      <form className="assign-rooms__form">
        <h1 className="form-header">Register Destination</h1>
        <div className="assign-rooms__form__group__items">
          <div className="assign-rooms__form__group__items--1">
            <label
              className="assign-rooms__form__group--label"
              htmlFor="room-name"
            >
              Room name
            </label>
            <input
              type="text"
              name="roomName"
              id="room-name"
              className="assign-rooms__form__group--input"
            />
          </div>

          <div className="assign-rooms__form__group__items--2">
            <label
              className="assign-rooms__form__group--label"
              htmlFor="room-amount"
            >
              Room amount
            </label>
            <input
              type="text"
              name="roomAmount"
              id="room-amount"
              className="assign-rooms__form__group--input"
            />
          </div>

          <div className="assign-rooms__form__group__items--3">
            <label
              className="assign-rooms__form__group--label"
              htmlFor="num-rooms"
            >
              Nbr of Rooms
            </label>
            <input
              type="text"
              name="numberOfRooms"
              id="num-rooms"
              className="assign-rooms__form__group--input"
            />
          </div>

          <div className="assign-rooms__form__group__items--4">
            <FaPlusSquare className="assign-rooms--add-btn" />
          </div>
        </div>

        <div className="assign-rooms__form__group">
          <label
            className="assign-rooms__form__group--label"
            htmlFor="location-image"
          >
            Location Image
          </label>

          <div className="assign-rooms__form__group__upload">
            <input
              type="file"
              name="location_image"
              id="location-image"
              className="assign-rooms__form__group__upload--file-input file-1"
            />
            <input
              type="file"
              name="location_image"
              id="location-image"
              className="assign-rooms__form__group__upload--file-input"
            />
            <div className="">
              <FaCloudUploadAlt className="assign-rooms__form__group__upload--icon" />
              <p className="assign-rooms__form__group__upload--text">
                Click to upload or drag and drop
              </p>
            </div>
          </div>
        </div>

        <button type="submit" className="assign-rooms__form--submit-btn">
          Submit
        </button>
      </form>

      <div className="">
        <button
          onClick={() => setPage(page - 1)}
          className="assign-rooms--back-btn"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AssignRooms;
