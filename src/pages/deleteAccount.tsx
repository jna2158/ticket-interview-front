import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/image/logo/app_logo_with_name.png";
import GoogleButton from "../components/oauth/oauth_login_button/google_button";
import KakaoButton from "../components/oauth/oauth_login_button/kakao_button";
import NaverButton from "../components/oauth/oauth_login_button/naver_button";
import { deleteAccount, login } from "../services/login_service";
import SuccessDeleteAccount from "../components/success_delete_account";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successDelAccount, setSuccessDelAccount] = useState(false);
  const [errors, setErrors] = useState<any>({ email: "", password: "" });


  useEffect(() => {
    sessionStorage.setItem("isDeleteAccountPage", "true");
  }, []);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: " " }));
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: " " }));
  };

  const handleConfirm = () => {
    const newErrors = { email: "", username: "", password: "" };
    if (!email) newErrors.email = "이메일을 입력해주세요.";
    if (!password) newErrors.password = "비밀번호를 입력해주세요.";
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    login({ email, password }).then(res => {
      localStorage.setItem("ACCESS_TOKEN", res.data.access_token);
      delAccount();
    })
      .catch(err => {
        setErrors((prev) => ({ ...prev, password: "이메일 또는 비밀번호가 잘못되었습니다." }));
      });
  };

  /** 회원탈퇴 */
  const delAccount = () => {
    deleteAccount().then(res => {
      setSuccessDelAccount(true);
      setSuccessDelAccount(true);
    })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <LoginModalOverlay>
      {!successDelAccount && (
        <Modal>
          <div className="animated bounceInDown">
            <span className="error animated tada" id="msg"></span>
            <Form name="form1" className="box">
              <img src={logo} alt="TInterview logo" width={370} />
              <h5>회원탈퇴</h5>
              <InputWrapper>
                <div>
                  <TextInput
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => handleChangeEmail(e)}
                    style={{ width: "100%" }}
                  />
                  {errors.email && <Validate>{errors.email}</Validate>}
                </div>
                <div>
                  <PasswordInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => handleChangePassword(e)}
                    style={{ width: "100%" }}
                  />
                  {errors.password && <Validate>{errors.password}</Validate>}
                </div>
                <ButtonWrapper>
                  <ConfirmButton type="button" onClick={handleConfirm}>확인</ConfirmButton>
                </ButtonWrapper>
              </InputWrapper>
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
      )}
      {successDelAccount && <SuccessDeleteAccount />}
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
    background-color: ${({ theme }) => theme.colors.gray9};
  }
`;
const Modal = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.gray9};
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
  background-color: ${({ theme }) => theme.colors.gray7};
`;
const SocialLoginInfo = styled.div`
  text-align: center;
  font-size: 23px;
  color: ${({ theme }) => theme.colors.gray5};
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
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10%;
`;

const TextInput = styled.input`
  height: 40px;
  padding: 0 10px;
  background-color: rgb(44, 52, 76);
  border: 1px solid ${({ theme }) => theme.colors.gray7};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray2};
  font-size: 14px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const PasswordInput = styled(TextInput)``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ConfirmButton = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: #5c6bc0;
  margin: 0;
`;

const Validate = styled.div`
  color: red;
  text-align: left;
  margin-top: 5px;
  font-size: 12px;
`;
