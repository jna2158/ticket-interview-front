import React from "react";
import googleLogo from "../../../assets/image/login/google.svg";

export default function GoogleButton() {

  /** google authorization server에 로그인 요청을 해서 authcode를 응답받는다. */
  const getAuthCode = () => {
    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_OAUTH_REDIRECT_URI}&response_type=code&scope=${"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"}`;
    window.location.href = googleOAuthUrl;
  }

  return (
    <img src={ googleLogo } onClick={() => getAuthCode()}></img>
  )
}