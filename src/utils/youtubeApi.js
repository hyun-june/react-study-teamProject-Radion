import axios from "axios";

const youtubeApi = axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{key:process.env.REACT_APP_API_KEY}
  })
  
  youtubeApi.interceptors.response.use(
    response => response,
    error => {
      console.error('YouTube API request error:', error.response ? error.response.data : error.message);
      return Promise.reject(error);
    }
  );

export default youtubeApi