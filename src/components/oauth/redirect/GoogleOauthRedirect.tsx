import React, { useEffect } from "react";
// react-query
import { useMutation } from "react-query";
// oauth
import { googleLogin } from "../../../services/LoginService";
import { HOME_URL } from "../../../shared/ApiConstant";

export default function GoogleOauthRedirect() {
  const authCode: string = new URL(window.location.href).searchParams.get("code")!;

  const loginMutation = useMutation(googleLogin, {
    onSuccess: ({ data }) => {
      localStorage.setItem("ACCESS_TOKEN", data.access_token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", data.email);
      window.location.href = HOME_URL;
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