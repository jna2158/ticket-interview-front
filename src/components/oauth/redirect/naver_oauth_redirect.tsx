import React, { useEffect } from "react";
// react-query
import { useMutation } from "react-query";
// oauth
import { naverLogin } from "../../../services/login_service";
import { HOME_URL } from "../../../shared/api_constant";

export default function NaverOauthRedirect() {
  const authCode: string = new URL(window.location.href).searchParams.get("code")!;
  const state: string = new URL(window.location.href).searchParams.get("state")!;
  const loginMutation = useMutation(naverLogin, {
    onSuccess: ({ data }) => {
      localStorage.setItem("ACCESS_TOKEN", data.access_token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", data.email);
      window.location.href = HOME_URL;
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (!authCode) {
      return;
    }
    loginMutation.mutate({authCode: authCode, state: state});
  }, []);

  return (
    null
  )
    
}