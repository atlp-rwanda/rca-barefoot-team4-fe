import axios from 'axios';
import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';
import { FaCloudUploadAlt, FaPlusSquare } from 'react-icons/fa';

import type { IAccomodation } from '.';

interface IRoom {
  roomName: String;
  roomAmount: Number | null | undefined;
  numberOfRooms: Number | null | undefined;
}

const AssignRooms = ({
  page,
  setPage,
  accomodationState,
}: {
  page: Number;
  setPage: Dispatch<SetStateAction<number>>;
  accomodationState: IAccomodation;
}) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [newRoom, setNewRoom] = useState<IRoom>({
    roomName: '',
    roomAmount: null,
    numberOfRooms: null,
  });

  function handleChange(e: any) {
    const { value } = e.target;
    setNewRoom({
      ...newRoom,
      [e.target.name]: value,
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/v1/accomodation`,
        {
          ...accomodationState,
          centerImage: 'akagera.png',
          rooms,
        }
      );
    } catch (err: any) {
      throw err;
    }
  };

  const addRoom = (data: IRoom): void => {
    setRooms([
      ...rooms,
      {
        roomName: data.roomName,
        roomAmount: Number(data.roomAmount),
        numberOfRooms: Number(data.numberOfRooms),
      },
    ]);
  };

  const theRooms = rooms.map((room, index) => {
    return (
      <p className="assign-rooms__current-rooms__item" key={index}>
        <span className="assign-rooms__current-rooms__item--name">
          {room?.roomName}
        </span>{' '}
        <span>{room?.roomAmount?.toLocaleString()}</span>
      </p>
    );
  });

  return (
    <div className="assign-rooms">
      <div className="assign-rooms__form">
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
              value={newRoom.roomName}
              onChange={(e) => handleChange(e)}
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
              value={newRoom.roomAmount}
              onChange={(e) => handleChange(e)}
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
              value={newRoom.numberOfRooms}
              onChange={(e) => handleChange(e)}
              name="numberOfRooms"
              id="num-rooms"
              className="assign-rooms__form__group--input"
            />
          </div>

          <div className="assign-rooms__form__group__items--4">
            <FaPlusSquare
              className="assign-rooms--add-btn"
              onClick={() => addRoom(newRoom)}
            />
          </div>
        </div>

        {/* Current rooms */}
        <div className="assign-rooms__current-rooms">{theRooms}</div>

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
            <FaCloudUploadAlt className="assign-rooms__form__group__upload--icon" />
            <p className="assign-rooms__form__group__upload--text">
              Click to upload or drag and drop
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="assign-rooms__form--submit-btn"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>

      <button
        onClick={() => {
          setPage(page - 1);
          console.log(accomodationState);
        }}
        className="assign-rooms--back-btn"
      >
        Back
      </button>
    </div>
  );
};

export default AssignRooms;
