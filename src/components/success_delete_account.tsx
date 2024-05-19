import React from "react";
import { styled } from "styled-components";
import logo from "../assets/image/logo/app_logo_with_name.png";

export default function SuccessDeleteAccount() {
  return (
    <Container>
      <Logo src={logo} alt="TInterview logo" width={300} />
      <Message>회원탈퇴가 완료되었습니다.</Message>
      <SubMessage>TInterview를 이용해주셔서 감사합니다.</SubMessage>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(33, 41, 66);
`;
const Logo = styled.img`
  margin-bottom: 10%;
`;
const Message = styled.p`
  font-size: 2.3rem;
  color: #a1a4ad
`;
const SubMessage = styled.p`
  font-size: 1.5rem;
  color: #a1a4ad
`;