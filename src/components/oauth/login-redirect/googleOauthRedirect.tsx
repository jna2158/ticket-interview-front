import React, { useEffect } from "react";
// react-query
import { useMutation } from "react-query";
// oauth
import { googleLogin } from "../../../services/login.service";

export default function GoogleOauthRedirect() {
  const authCode: string = new URL(window.location.href).searchParams.get("code")!;

  const loginMutation = useMutation(googleLogin, {
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
      localStorage.setItem("ACCESS_TOKEN", data.data.access_token);
    },
    onError: (error, variable, context) => {
      console.log("error", error);
    },
  });

  useEffect(() => {
    if (!authCode) {
      return;
    }
    loginMutation.mutate(authCode);
  }, []);

  return (
    <div>...</div>
  )
    
}