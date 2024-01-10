import React from "react";
// react-query
import { useMutation } from "react-query";
// oauth
import { googleLogin } from "../../services/login.service";
import { CodeResponse, useGoogleLogin } from "@react-oauth/google";
import googleLogo from "../../assets/image/btn_google.svg";
import { API_HOST } from "../../shared/constant";

export default function GoogleButton({setIsLoginModalOpen}: {setIsLoginModalOpen: any}) {

  /** google authorization server에 로그인 요청을 해서 authcode를 응답받는다. */
  const getAuthCode = () => {
    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_OAUTH_REDIRECT_URI}&response_type=code&scope=${process.env.GOOGLE_OAUTH_SCOPE}`;
    window.location.href = googleOAuthUrl;
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