import React from "react";
import { styled } from "styled-components";

export default function SuccessDeleteAccount() {
  return (
    <Container>
      <MessageBox>
        <Message>회원탈퇴가 완료되었습니다. TInterview를 이용해주셔서 감사합니다.</Message>
      </MessageBox>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff;
`;

const MessageBox = styled.div`
  text-align: center;
  padding: 20px 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Message = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;