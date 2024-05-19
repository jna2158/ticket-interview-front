import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { deleteAccount, kakaoLogin } from "../../../services/login_service";
import { HOME_URL } from "../../../shared/api_constant";
import SuccessDeleteAccount from "../../success_delete_account";

export default function KakaoOauthRedirect() {
  const authCode: string = new URL(window.location.href).searchParams.get("code")!;
  const isReqDeleteAccount = sessionStorage.getItem("isDeleteAccountPage");
  const [successDelAccount, setSuccessDelAccount] = useState(false);

  const loginMutation = useMutation(kakaoLogin, {
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
    onError: (error) => {
      console.log(error);
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
      <SuccessDeleteAccount />
    ) : null
  ) 
}