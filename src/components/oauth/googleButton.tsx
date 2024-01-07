import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

import googleLogo from "../../assets/image/btn_google.svg";

export default function GoogleButton() {

  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
    redirect_uri: "https://ticket-interview.com/accounts/google/login/"
  });
  return (
    <img src={ googleLogo } onClick={() => login()}></img>
  )
}