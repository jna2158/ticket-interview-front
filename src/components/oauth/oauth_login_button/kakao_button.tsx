import React from "react";
import kakaoLogo from "../../../assets/image/btn_kakao.svg";

export default function KakaoButton() {

  /** kakao authorization server에 로그인 요청을 해서 authcode를 응답받는다. */
  const getAuthCode = () => {
    const kakaoOAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_OAUTH_CLIENT_ID}&redirect_uri=${process.env.KAKAO_OAUTH_REDIRECT_URI}&response_type=code`;    
    window.location.href = kakaoOAuthUrl;
  }

  return (
    <img src={ kakaoLogo } onClick={() => getAuthCode()}></img>
  )
}