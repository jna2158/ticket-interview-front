import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { deleteAccount, googleLogin } from "../../../services/login_service";
import { HOME_URL } from "../../../shared/api_constant";
import { styled } from "styled-components";

export default function GoogleOauthRedirect() {
  const authCode: string = new URL(window.location.href).searchParams.get("code")!;
  const isReqDeleteAccount = sessionStorage.getItem("isDeleteAccountPage");
  const [successDelAccount, setSuccessDelAccount] = useState(false);

  const loginMutation = useMutation(googleLogin, {
    onSuccess: ({ data }) => {
      if (isReqDeleteAccount === "true") {
        deleteAccount().then(res => {
          setSuccessDelAccount(true);
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        localStorage.setItem("ACCESS_TOKEN", data.access_token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        window.location.href = HOME_URL;
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (!authCode) {
      return;
    }
    loginMutation.mutate(authCode);
  }, []);

  return (
    isReqDeleteAccount && successDelAccount ? (
      <Container>
      <MessageBox>
        <Message>회원탈퇴가 완료되었습니다. TInterview를 이용해주셔서 감사합니다.</Message>
      </MessageBox>
    </Container>
    ) : null
  )
    
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff; /* 부드러운 파란색 배경 */
`;

const MessageBox = styled.div`
  text-align: center;
  padding: 20px 40px;
  background: white; /* 흰색 배경 */
  border-radius: 10px; /* 모서리를 둥글게 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자 */
`;

const Message = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;