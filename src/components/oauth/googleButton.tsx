import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

import googleLogo from "../../assets/image/btn_google.svg";

export default function GoogleButton() {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log('access_token', tokenResponse),
    
  });
  return (
    <img src={ googleLogo } onClick={() => login()}></img>
  )
}