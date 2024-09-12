import axios from "axios";
import { getAccessToken } from "./getAccessToken";

const api = axios.create({
  baseURL:"https://api.spotify.com/v1",
  headers:{
    accept: 'application/json',
  }
});

api.interceptors.request.use(
  async (config) => {
    // 계속 토큰을 가져옴
    const token = await getAccessToken();
    
    // Authorization 헤더에 토큰 추가
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(function (response) {
  // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 데이터가 있는 작업 수행
  return response;
}, function (error) {
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  return Promise.reject(error);
});

export default api;