import React from "react";
// react-query
import { useMutation } from "react-query";
// oauth
import { googleLogin } from "../../services/login.service";
import { CodeResponse, useGoogleLogin } from "@react-oauth/google";
import googleLogo from "../../assets/image/btn_google.svg";
import { API_HOST } from "../../shared/constant";
import axios from "axios";

export default function GoogleButton({setIsLoginModalOpen}: {setIsLoginModalOpen: any}) {
  // google oauth key
  const GOOGLE_OAUTH_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const GOOGLE_OAUTH_SECRET_KEY = process.env.GOOGLE_OAUTH_SECRET_KEY;

  /** google authorization server에 로그인 요청을 해서 authcode를 응답받는다. */
  const getAuthCode = useGoogleLogin({
    onSuccess: (codeResponse: Omit<CodeResponse, "codeResponse">) => {
      // loginMutation.mutate(codeResponse.code)
      getAccessCode(codeResponse);
    },
    flow: 'auth-code',
    redirect_uri: `${API_HOST}/accounts/google/login/`
  });
  const getAccessCode = (codeResponse: Omit<CodeResponse, "codeResponse">) => {
    axios.post(`https://www.googleapis.com/oauth2/v4/token?code=${codeResponse.code}&client_id=${GOOGLE_OAUTH_CLIENT_ID}&client_secret=${GOOGLE_OAUTH_SECRET_KEY}&redirect_uri=${API_HOST}/accounts/google/login/&grant_type=authorization_code`)
      .then(res => {
        console.log("Success");
        console.log(res);
      })
      .catch(err => {
        console.log("Failed");
        console.log(err);
      })
  }

  const loginMutation = useMutation(googleLogin, {
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
      localStorage.setItem("ACCESS_TOKEN", data.access_token);
      setIsLoginModalOpen(false);
    },
    onError: (error, variable, context) => {
      console.log("error", error);
    },
  });

  return (
    <img src={ googleLogo } onClick={() => getAuthCode()}></img>
  )
}