import { API_HOST } from "../shared/ApiConstant";
import axios from "axios";
import instance from "../shared/axiosIntercepter";

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
  return instance.post(`${API_HOST}/api/accounts/logout`);
}