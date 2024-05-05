import { API_HOST } from "../shared/api_constant";
import axios from "axios";
import instance from "../shared/axios_interceptor";

/**
 * google login 요청
 * 
 * @param code: authCode
 */
export const googleLogin = (code: string): Promise<any> => {
  return axios.post(`${API_HOST}/api/accounts/googlelogin`, {code: code});
};

/**
 * kakao login 요청
 * 
 * @param code: authCode
 * @param state: state
 */
export const kakaoLogin = (code: string): Promise<any> => {
  return axios.get(`${API_HOST}/api/accounts/kakaologin?code=${code}`);
}

/**
 * naver login 요청
 * 
 * @param code: authCode
 * @param state: state
 */
export const naverLogin = (query: any): Promise<any> => {
  return axios.get(`${API_HOST}/api/accounts/naverlogin?code=${query.authCode}&state=${query.state}`);
}

export const logout = (): Promise<any> => {
  return instance.post(`/api/accounts/logout`);
}

/** user 정보 요청 */
export const getUserInfo = () => {
  return instance.post("https://ticket-interview.com/api/accounts/app/userinfo");
}