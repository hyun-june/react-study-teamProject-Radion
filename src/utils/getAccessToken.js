import axios from "axios";

const Base_URL = 'https://accounts.spotify.com/api/token';

export const getAccessToken = async () => {
  const authParams = new URLSearchParams();
  console.log(process.env.REACT_APP_CLIENT_ID)
  authParams.append('grant_type', 'client_credentials');
  authParams.append('client_id', process.env.REACT_APP_CLIENT_ID);
  authParams.append('client_secret', process.env.REACT_APP_CLIENT_SECRET);
  try {
    const response = await axios.post(Base_URL, authParams.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = response.data;
    const accessToken = data.access_token
    console.log(accessToken);
    return accessToken;
  } catch (error) {
    console.log('Error fetching access token:', error);
  }
};