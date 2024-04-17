import React from "react";
import googleLogo from "../../../assets/image/btn_google.svg";

export default function GoogleButton() {

  /** google authorization server에 로그인 요청을 해서 authcode를 응답받는다. */
  const getAuthCode = () => {
    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${"758811372465-9ckc0kr58s5s6t55u4hdqqdpubsdnl7m.apps.googleusercontent.com"}&redirect_uri=${"http://localhost:8080/accounts/google/login/"}&response_type=code&scope=${"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"}`;
    window.location.href = googleOAuthUrl;
  }

  return (
    <img src={ googleLogo } onClick={() => getAuthCode()}></img>
  )
}