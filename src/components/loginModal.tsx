import React from "react";
import styled from "styled-components";
import mainLogo from "../assets/image/account_baby.png";
// oauth
import GoogleButton from "./oauth/login/googleButton";
import KakaoButton from "./oauth/login/kakaoButton";
import NaverButton from "./oauth/login/naverButton";

export default function LoginModal({setIsLoginModalOpen}: {setIsLoginModalOpen: any}) {

  return(
    <LoginModalOverlay>
      <Modal>
        <SpanBox><i className="fa-solid fa-circle-xmark" onClick={() => setIsLoginModalOpen(false)}></i></SpanBox>
        <Header>Ticket Interview</Header>
        <Title>지금 로그인하여<br /><span>Ticket Interview에서</span> 당신의 면접을<br />더욱 효과적으로 준비하세요.</Title>
        <MainLogo>
          <img src={ mainLogo }></img>
        </MainLogo>
        <Hr />

        <SocialLoginInfo>간편하게 SNS 로그인</SocialLoginInfo>
        <SocialLoginSection>
          <GoogleButton />
          <KakaoButton />
          <NaverButton />
        </SocialLoginSection>
      </Modal>
    </LoginModalOverlay>
  )
}

/** Style */
const LoginModalOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  padding: 2rem;
  background-color: ${({theme}) => theme.colors.gray9};
  border-radius: 1.3rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 50%;
  left: 50%;
  width: 28vw;
  height: auto;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

const Header = styled.div`
  font-family: 'Nano Sans Korean';
  text-align: center;
  font-size: 1.2rem;
  color: ${({theme}) => theme.colors.gray5};
`;

const Title = styled.div`
  font-family: 'Nano Sans Korean';
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 2.8rem;
  margin-top: 1%;
  color: ${({theme}) => theme.colors.white};
    & span {
      font-weight: 700;
      color: #ff922b;
    }
`;

const MainLogo = styled.div`
    text-align: center;
    & img {
      width: 40%;
    }
`;

const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({theme}) => theme.colors.gray7};
`;

const SocialLoginInfo = styled.div`
    font-family: 'Nano Sans Korean';
    text-align: center;
    font-size: .7rem;
    color: ${({theme}) => theme.colors.gray5};
`

const SocialLoginSection = styled.div`
    height: 5vh;
    display: flex;
    gap: 3%;
    justify-content: center;
    margin-top: 1%;
    & img {
      width: 3vw;
      cursor: pointer;
    }
`;
