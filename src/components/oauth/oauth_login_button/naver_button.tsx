import React from "react";
import naverLogo from "../../../assets/image/login/naver.svg";

export default function NaverButton() {
  /** naver authorization server에 로그인 요청을 해서 authcode를 응답받는다. */
  const getAuthCode = () => {
    const state = Math.random().toString(36).substring(3, 14);
    const naverOAuthURI = `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.NAVER_OAUTH_CLIENT_ID}&redirect_uri=${process.env.NAVER_OAUTH_REDIRECT_URI}&response_type=code&state=${state}`;    
    window.location.href = naverOAuthURI;
  }

  return (
    <img src={ naverLogo } onClick={() => getAuthCode()}></img>
  )
}