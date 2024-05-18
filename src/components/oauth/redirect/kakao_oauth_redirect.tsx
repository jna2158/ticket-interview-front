import React, { useEffect } from "react";
// react-query
import { useMutation } from "react-query";
// oauth
import { deleteAccount, kakaoLogin } from "../../../services/login_service";
import { HOME_URL } from "../../../shared/api_constant";

export default function KakaoOauthRedirect() {
  const authCode: string = new URL(window.location.href).searchParams.get("code")!;
  const isReqDeleteAccount = sessionStorage.getItem("isDeleteAccountPage");

  const loginMutation = useMutation(kakaoLogin, {
    onSuccess: ({ data }) => {
      if (isReqDeleteAccount === "true") {
        deleteAccount().then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        localStorage.setItem("ACCESS_TOKEN", data.access_token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        window.location.href = HOME_URL;
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (!authCode) {
      return;
    }
    loginMutation.mutate(authCode);
  }, []);

  return (
    null
  )
    
}