import { API_HOST } from "../shared/constant";
import axios from "axios";

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
export const kakaoLogin = (query: any): Promise<any> => {
  return axios.get(`${API_HOST}/api/accounts/kakaologin?code=${query.authCode}&state=${query.state}`);
}

/**
 * naver login 요청
 * 
 * @param code: authCode
 * @param state: state
 */
export const naverLogin = (query: any): Promise<any> => {
  return axios.get(`${API_HOST}/api/accounts/kakaologin?code=${query.authCode}&state=${query.state}`);
}