import React from "react";
import styled from "styled-components";

// oauth
import GoogleButton from "./oauth/login/GoogleButton";
import KakaoButton from "./oauth/login/KakaoButton";
import NaverButton from "./oauth/login/NaverButton";
import logo from "../assets/image/app_logo_with_name.png";
import { useDispatch } from "react-redux";
import { isOpen } from "../redux/loginSlice";

export default function LoginModal() {
  const dispatch = useDispatch();
  return(
    <LoginModalOverlay>
      <Modal>
        <SpanBox><i className="fa-solid fa-circle-xmark" onClick={() => dispatch(isOpen(false))}></i></SpanBox>
        <div className="animated bounceInDown">
            <span className="error animated tada" id="msg"></span>
              <Form name="form1" className="box">
                <img src={logo} alt="TInterview logo" width={170}/>
                <h5>간편 로그인을 통해 당신의 면접 실력을<br/> 향상시킬 AI 면접 파트너를 만나봐요.</h5>
                <Hr />
                <SocialLoginInfo>간편하게 SNS 로그인</SocialLoginInfo>
                <SocialLoginSection>
                  <GoogleButton />
                  <KakaoButton />
                  <NaverButton />
                </SocialLoginSection>
              </Form>
          </div>
      </Modal>
    </LoginModalOverlay>
  )
}

const LoginModalOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
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
  min-height: 50vh;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgb( 33, 41, 66 );
  border-radius: 9px;
  transform: translateX(-50%);
  border-top: 10px solid #79a6fe;
  border-bottom: 10px solid #8BD17C;
  text-align: center;
  margin: 0;
`;
const Form = styled.form`
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
    font-size: 16px;
    color: #a1a4ad;
    letter-spacing: 1.5px;
    margin-top: 15px;
    margin-bottom: 10%;
  }
`;
const SpanBox = styled.span`
  i.fa-solid.fa-circle-xmark {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    cursor: pointer;
    color: ${({theme}) => theme.colors.gray4};
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
  font-size: 13px;
  color: ${({theme}) => theme.colors.gray5};
`;
const SocialLoginSection = styled.div`
  height: 5vh;
  display: flex;
  gap: 3%;
  justify-content: center;
  margin-top: 2vh;
  & img {
    width: 3vw;
    cursor: pointer;
  }
`;
