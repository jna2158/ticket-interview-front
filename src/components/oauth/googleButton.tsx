import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import googleLogo from "../../assets/image/btn_google.svg";
import { useMutation, useQuery } from "react-query";
import { API_HOST } from "../../shared/constant";
import axios from "axios";

export default function GoogleButton() {
  /** google authorization server에 로그인 요청을 해서 authorizationCode를 응답받는다. */
  const getAuthorizationCode = useGoogleLogin({
    onSuccess: codeResponse => {
      mutate(codeResponse.code);
    },
    flow: 'auth-code',
    redirect_uri: "https://ticket-interview.com/accounts/google/login/"
  });

  /** 로그인 요청 
   * 
   * @param id: google authorization code
  */
  const login = (code: string): Promise<any> => {
    return axios.post(`${API_HOST}/api/accounts/googlelogin`, {code: code});
  };


  const { mutate } = useMutation((code: string) => login(code), {
    onSuccess: () => { 	// mutate가 정상적으로 실행되면, 함수를 실행합니다.
		  console.log("createPost success");
    },
    onError: () => { 	// mutate가 실패하면, 함수를 실행합니다.
    	console.log("createPost error");
    }
  });

  return (
    <img src={ googleLogo } onClick={() => getAuthorizationCode()}></img>
  )
}