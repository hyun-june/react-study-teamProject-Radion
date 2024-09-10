import axios from 'axios';

const BASE_URL = 'https://accounts.spotify.com/api/token';

export const getAccessToken = async () => {
  const authParam = {
    grant_type: 'client_credentials',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  };

  try {
    const res = await axios.post(BASE_URL, new URLSearchParams(authParam), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    // window.localStorage.setItem('token', res.data.access_token);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};