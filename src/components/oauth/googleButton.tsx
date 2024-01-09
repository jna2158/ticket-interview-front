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
  const getAuthCode = useGoogleLogin({
    onSuccess: (codeResponse: Omit<CodeResponse, "codeResponse">) => {
      loginMutation.mutate(codeResponse.code)
    },
    flow: 'auth-code',
    redirect_uri: `${API_HOST}/api/accounts/googlelogin`
  });

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