import React, { useEffect } from "react";
import { useMutation } from "react-query";
import { deleteAccount, googleLogin } from "../../../services/login_service";
import { HOME_URL } from "../../../shared/api_constant";

export default function GoogleOauthRedirect() {
  const authCode: string = new URL(window.location.href).searchParams.get("code")!;
  // const isReqDeleteAccount = localStorage.getItem("isDeleteAccountPage");
  const isReqDeleteAccount = sessionStorage.getItem("isDeleteAccountPage");

  const loginMutation = useMutation(googleLogin, {
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
    onError: (err) => {
      console.log(err);
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