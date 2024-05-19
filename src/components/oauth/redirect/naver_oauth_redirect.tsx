import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { deleteAccount, naverLogin } from "../../../services/login_service";
import { HOME_URL } from "../../../shared/api_constant";
import SuccessDeleteAccount from "../../success_delete_account";

export default function NaverOauthRedirect() {
  const authCode: string = new URL(window.location.href).searchParams.get("code")!;
  const state: string = new URL(window.location.href).searchParams.get("state")!;
  const isReqDeleteAccount = sessionStorage.getItem("isDeleteAccountPage");
  const [successDelAccount, setSuccessDelAccount] = useState(false);

  const loginMutation = useMutation(naverLogin, {
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
    loginMutation.mutate({authCode: authCode, state: state});
  }, []);

  return (
    isReqDeleteAccount && successDelAccount ? (
      <SuccessDeleteAccount />
    ) : null
  )  
}