import axios from 'axios';
import { useRouter } from 'next/router';
import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';
import { FaCloudUploadAlt, FaPlusSquare } from 'react-icons/fa';
import { useMutation } from 'react-query';

import { Alert } from '@/components/Alert';
import { registerAccomodation } from '@/services/api.service';

import type { IAccomodation } from '.';

interface IRoom {
  roomName: String;
  roomAmount: Number | undefined;
  numberOfRooms: Number | undefined;
}

export interface ICombined extends IAccomodation {
  centerImage: any;
  rooms: IRoom[];
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
  const router = useRouter();
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [newRoom, setNewRoom] = useState({
    roomName: '',
    roomAmount: undefined,
    numberOfRooms: undefined,
  });
  const [centerImage, setCenterImage] = useState<any>(null);
  const [alert, setAlert] = useState(true);
  const mutation: any = useMutation((obj: ICombined) => {
    return registerAccomodation(obj);
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setNewRoom({
      ...newRoom,
      [e.target.name]: value,
    });
  }

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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('load', (ev: ProgressEvent<FileReader>) => {
              resolve(ev?.target?.result);
            });
            reader.addEventListener('error', reject);
            reader.readAsDataURL(file);
          });
        })
      ).then(
        (selectedImage) => {
          setCenterImage(selectedImage);
        },
        (error) => {
          throw error;
        }
      );
    }
  };

  const closeAlert = () => {
    setAlert(false);
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    setAlert(true);

    const fkk: ICombined = {
      ...accomodationState,
      rooms,
      centerImage,
    };

    await mutation.mutateAsync(fkk);
    router.push('/');
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
    <div className="relative mx-auto my-[2rem] w-[95%] px-0 py-[3rem] text-[#3F3F3F] shadow-md sm:w-[45%] sm:py-[4rem]">
      {mutation.isError && alert ? (
        <Alert
          success={!mutation.isError}
          handleClose={closeAlert}
          message={
            mutation.isError
              ? `${mutation.error.response.data.errors[0].message}`
              : ''
          }
        />
      ) : null}
      <form className="relative m-auto w-[90%] rounded-sm  px-[1rem] py-0 sm:px-[5rem]">
        <h1 className="py-[1rem] pl-0 pr-[1rem] text-center text-[1.5rem] font-[500] sm:pt-[2rem]">
          Register Destination
        </h1>
        <div className="flex:[1_0_20%] mt-[1rem] sm:flex sm:items-end">
          <div className="mr-[0.5rem] w-[100%] sm:w-[35%]">
            <label className="mx-0 my-[0.5rem] flex" htmlFor="room-name">
              Room name
            </label>
            <input
              type="text"
              name="roomName"
              id="room-name"
              className="w-full rounded-sm border-[1px] border-[#e6e6e6] p-[.1rem] focus:outline-none sm:p-[0.3rem]"
              onChange={(e) => handleChange(e)}
              value={newRoom.roomName}
              required
            />
          </div>

          <div className="mr-[1rem] w-[100%] sm:w-[30%] ">
            <label className="mx-0 my-[0.5rem] flex" htmlFor="room-amount">
              Room amount
            </label>
            <input
              type="text"
              name="roomAmount"
              id="room-amount"
              className="w-full rounded-sm border-[1px] border-[#e6e6e6] p-[.1rem] focus:outline-none sm:p-[0.3rem]"
              onChange={(e) => handleChange(e)}
              value={newRoom.roomAmount}
              required
            />
          </div>

          <div className="mr-[2rem] w-[100%] sm:w-[25%]">
            <label className="mx-0 my-[0.5rem] flex" htmlFor="num-rooms">
              Nbr of Rooms
            </label>
            <input
              type="text"
              name="numberOfRooms"
              id="num-rooms"
              className="w-full rounded-sm border-[1px] border-[#e6e6e6] p-[.1rem] focus:outline-none sm:p-[0.3rem]"
              onChange={(e) => handleChange(e)}
              value={newRoom.numberOfRooms}
              required
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

          <div className="relative flex flex-col items-center border-[1px] border-dashed border-[#d8d7d7] px-0 py-[1.5rem] sm:py-[3rem]">
            <input
              type="file"
              accept="image/*"
              name="location_image"
              id="location-image"
              className="mb-[0.3rem] opacity-0"
              onChange={(e) => handleFileSelect(e)}
            />
            <input
              type="file"
              accept="image/*"
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
          // type="submit"
          disabled={mutation.isLoading}
          type="button"
          className="mx-0 my-[0.8rem] w-full rounded-[5px] bg-[#f20544] p-[0.5rem] text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      <button
        onClick={() => {
          setPage(page - 1);
        }}
        className="absolute left-0 px-[2.5rem] py-[1rem] underline sm:px-[7.5rem]"
      >
        Back
      </button>
    </div>
  );
};

export default AssignRooms;
