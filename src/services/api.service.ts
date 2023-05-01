import axios from 'axios';

export const fetchUserData = async () => {
  try {
    const { data } = await axios.get(
      `https://random-data-api.com/api/v2/users`
    );
    return data;
  } catch (err: any) {
    throw err;
  }
};

export const registerAccomodation = async (accomodationData) => {
  try {
    const newAccomodation = await axios.post(
      `http://localhost:3000/api/v1/accomodation`
    );
    return newAccomodation;
  } catch (error: any) {
    throw error;
  }
};
