import axios from 'axios';

import type { TRegisterUser } from './types';

const headers = { 'Content-type': 'application/json' };
const BASE_URL: string =
  'https://rca-barefoot-team4-server.onrender.com/api/v1';

export const fetchUserData = async (body: TRegisterUser) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/register`, body, {
      headers,
    });
    return data;
  } catch (err: any) {
    throw err;
  }
};

export const registerUser = async (body: TRegisterUser) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/register`, body, {
      headers,
    });
    return data;
  } catch (err: any) {
    throw err;
  }
};
