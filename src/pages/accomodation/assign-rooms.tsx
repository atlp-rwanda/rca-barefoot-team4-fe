import axios from 'axios';
import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';
import { FaCloudUploadAlt, FaPlusSquare } from 'react-icons/fa';

import type { IAccomodation } from '.';

interface IRoom {
  roomName: String;
  roomAmount: Number | undefined;
  numberOfRooms: Number | undefined;
}

const AssignRooms = ({
  page,
  setPage,
  accomodationState,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  accomodationState: IAccomodation;
}) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [newRoom, setNewRoom] = useState({
    roomName: '',
    roomAmount: undefined,
    numberOfRooms: undefined,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setNewRoom({
      ...newRoom,
      [e.target.name]: value,
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/v1/accomodation`, {
        ...accomodationState,
        centerImage: 'akagera.png',
        rooms,
      });
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
      <p
        className="m-[.5rem] rounded-[5px] bg-[#f6f6f6] px-[.5rem] py-[0.4rem] sm:px-[1rem]"
        key={index}
      >
        <span className="font-[600]">{room?.roomName}</span>{' '}
        <span>{room?.roomAmount?.toLocaleString()}</span>
      </p>
    );
  });

  return (
    <div className="relative mx-auto my-[2rem] w-[40%] px-0 py-[4rem] text-[#3F3F3F] shadow-md">
      <div className="relative m-auto w-[90%] rounded-sm px-[5rem] py-0">
        <h1 className="pb-[1rem] pl-0 pr-[1rem] pt-[2rem] text-center text-[1.5rem] font-[500]">
          Register Destination
        </h1>
        <div className="flex:[1_0_20%] mt-[1rem] sm:flex sm:items-end">
          <div className="mr-[0.5rem] w-[35%]">
            <label className="mx-0 my-[0.5rem] flex" htmlFor="room-name">
              Room name
            </label>
            <input
              type="text"
              name="roomName"
              id="room-name"
              className="w-full rounded-sm border-[1px] border-[#e6e6e6] p-[0.3rem] focus:outline-none"
              onChange={(e) => handleChange(e)}
              value={newRoom.roomName}
            />
          </div>

          <div className="mr-[1rem] w-[30%]">
            <label className="mx-0 my-[0.5rem] flex" htmlFor="room-amount">
              Room amount
            </label>
            <input
              type="text"
              name="roomAmount"
              id="room-amount"
              className="w-full rounded-sm border-[1px] border-[#e6e6e6] p-[0.3rem] focus:outline-none"
              onChange={(e) => handleChange(e)}
              value={newRoom.roomAmount}
            />
          </div>

          <div className="mr-[2rem] w-[25%]">
            <label className="mx-0 my-[0.5rem] flex" htmlFor="num-rooms">
              Nbr of Rooms
            </label>
            <input
              type="text"
              name="numberOfRooms"
              id="num-rooms"
              className="w-full rounded-sm border-[1px] border-[#e6e6e6] p-[0.3rem] focus:outline-none"
              onChange={(e) => handleChange(e)}
              value={newRoom.numberOfRooms}
            />
          </div>

          <FaPlusSquare
            className="cursor-pointer text-4xl text-[#f20544]"
            onClick={() => addRoom(newRoom)}
          />
        </div>

        {/* Current rooms */}
        <div className="mt-[1.5rem] flex w-full flex-wrap">{theRooms}</div>

        <div className="my-[1rem]">
          <label className="mx-0 my-[0.5rem] flex" htmlFor="location-image">
            Location Image
          </label>

          <div className="relative flex flex-col items-center border-[1px] border-dashed border-[#d8d7d7] px-0 py-[3rem]">
            <input
              type="file"
              name="location_image"
              id="location-image"
              className="mb-[0.3rem] opacity-0"
            />
            <input
              type="file"
              name="location_image"
              id="location-image"
              className="mb-[0.3rem] opacity-0"
            />
            <FaCloudUploadAlt className=" absolute top-[20%] -z-10 cursor-pointer text-5xl text-[#d9d9d9]" />
            <p className="absolute top-[40%] -z-10 cursor-pointer px-0 py-[1rem] underline">
              Click to upload or drag and drop
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="mx-0 my-[0.8rem] w-full rounded-[5px] bg-[#f20544] p-[0.5rem] text-white"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>

      <button
        onClick={() => {
          setPage(page - 1);
        }}
        className="absolute left-0 px-[7.5rem] py-[1rem] underline"
      >
        Back
      </button>
    </div>
  );
};

export default AssignRooms;
