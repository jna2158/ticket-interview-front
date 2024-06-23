import axios from 'axios';
import { API_HOST } from './api_constant';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://ticket-interview.com"
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("!!err");
    console.log(error);
    console.log(error.config.url);
    if (error.response && error.response.status === 401 && error.config.url !== "/api/accounts/email/login") {
      const res = await updateRefreshToken();
      if (res === 'success') {
        return retryOriginalRequest(error);
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

// refreshToken 업데이트
const updateRefreshToken = async () => {
  return instance.post(`${API_HOST}/api/accounts/refresh_token`)
    .then(res => {
      localStorage.setItem('ACCESS_TOKEN', res.data.access_token);
      return 'success';
    })
    .catch(err => {
      return 'fail';
    });
}

// refreshToken 업데이트 후 이전 요청 다시보내기
const retryOriginalRequest = async (error) => {
  try {
    const originalRequest = error.config;
    return instance(originalRequest);
  } catch (refreshError) {
    return Promise.reject(error);
  }
};

export default instance;
