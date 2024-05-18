import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { deleteAccount, googleLogin } from "../../../services/login_service";
import { HOME_URL } from "../../../shared/api_constant";

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
      <div>회원 탈퇴가 완료되었습니다.</div>
    ) : null
  )
    
}