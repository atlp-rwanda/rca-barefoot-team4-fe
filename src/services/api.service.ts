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
