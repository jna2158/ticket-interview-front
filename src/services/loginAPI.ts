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