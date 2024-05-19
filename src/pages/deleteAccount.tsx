import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/image/logo/app_logo_with_name.png";
import GoogleButton from "../components/oauth/oauth_login_button/google_button";
import KakaoButton from "../components/oauth/oauth_login_button/kakao_button";
import NaverButton from "../components/oauth/oauth_login_button/naver_button";

export default function LoginModal() {
  useEffect(() => {
    sessionStorage.setItem("isDeleteAccountPage", "true");
  }, []);

  return (
    <LoginModalOverlay>
      <Modal>
        <div className="animated bounceInDown">
          <span className="error animated tada" id="msg"></span>
          <Form name="form1" className="box">
            <img src={logo} alt="TInterview logo" width={370} />
            <h5>회원탈퇴</h5>
            <Hr />
            <SocialLoginInfo>로그인 계정 찾기</SocialLoginInfo>
            <SocialLoginSection>
              <GoogleButton />
              <KakaoButton />
              <NaverButton />
            </SocialLoginSection>
          </Form>
        </div>
      </Modal>
    </LoginModalOverlay>
  );
}

const LoginModalOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  @media (max-width: 768px) {
    position: relative;
    background-color: ${({theme}) => theme.colors.gray9};
  }
`;
const Modal = styled.div`
  padding: 2rem;
  background-color: ${({theme}) => theme.colors.gray9};
  border-radius: 1.3rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 25%;
  left: 50%;
  width: 20vw;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgb(33, 41, 66);
  border-radius: 9px;
  border-top: 10px solid #79a6fe;
  border-bottom: 10px solid #8BD17C;
  text-align: center;
  margin: 0;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: none;
    border-radius: 0;
    border-top: none;
    border-bottom: none;
  }
`;
const Form = styled.form`
  padding: 25%;
  & h4 {
    color: #5c6bc0; 
    font-size: 25px;
    margin-top: 5%;
  }
  & span {
    color: #dfdeee;
    font-weight: lighter;
  }
  & h5 {
    font-size: 30px;
    color: #a1a4ad;
    letter-spacing: 1.5px;
    margin-top: 15px;
    margin-bottom: 10%;
  }
`;
const Hr = styled.hr`
  border: none;
  height: 1px;
  margin-top: 8vh;
  background-color: ${({theme}) => theme.colors.gray7};
`;
const SocialLoginInfo = styled.div`
  text-align: center;
  font-size: 23px;
  color: ${({theme}) => theme.colors.gray5};
`;
const SocialLoginSection = styled.div`
  height: 5vh;
  display: flex;
  gap: 10%;
  justify-content: center;
  margin-top: 18%;
  & img {
    width: 10vw;
    cursor: pointer;
  }
`;