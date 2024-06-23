import React, { useState } from "react";
import styled from "styled-components";
import GoogleButton from "./oauth/oauth_login_button/google_button";
import KakaoButton from "./oauth/oauth_login_button/kakao_button";
import NaverButton from "./oauth/oauth_login_button/naver_button";
import logo from "../assets/image/logo/app_logo_with_name.png";
import { useDispatch } from "react-redux";
import { isLoginModalOpen } from "../redux/login_slice";
import { emailCheck, emailValid, emailValidCheck, signup, login } from "../services/login_service";
import { HOME_URL } from "../shared/api_constant";

export default function LoginModal() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true); // Changed to true to show login form initially
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const [errors, setErrors] = useState<any>({ email: "", username: "", password: "" });
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [verificationErrors, setVerificationErrors] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  /** 로그인<->회원가입 */
  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  /** 이메일 중복체크 */
  const checkEmailDuplication = () => {
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "이메일을 입력해주세요." }));
      return;
    }

    emailCheck(email)
      .then((res) => {
        if (res.data.duplicated) {
          setEmailChecked(false);
          setErrors((prev) => ({ ...prev, email: "중복된 이메일입니다." }));
        } else {
          setEmailChecked(true);
          setErrors((prev) => ({ ...prev, email: "사용할 수 있는 이메일입니다. 이메일 인증을 해주세요." }));
        }
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, email: "이메일 중복 확인 중 오류가 발생했습니다." }));
        console.error(err);
      });
  };

  /** 이메일 인증코드 발송 */
  const sendVerificationCode = () => {
    emailValid(email)
      .then((res) => setIsCodeSent(true))
      .catch((err) => {
        setErrors((prev) => ({ ...prev, email: "이메일 인증에 실패했습니다. 이메일 형식을 확인해주세요." }));
      });
  };

  /** 이메일 인증코드 확인 */
  const verifyCode = () => {
    emailValidCheck(email, verificationCode)
      .then((res) => {
        setIsCodeVerified(true);
        setVerificationErrors("");
        setErrors((prev) => ({ ...prev, email: "이메일 인증이 완료되었습니다." }));
        setIsCodeSent(false);
      })
      .catch((err) => {
        setVerificationErrors("잘못된 인증코드입니다.");
      });
  };

  /** 회원가입 */
  const handleClickSignupBtn = () => {
    const newErrors = { email: "", username: "", password: "" };
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])(?=.{8,32})/;

    if (!isCodeVerified) newErrors.email = "사용할 수 있는 이메일입니다. 이메일 인증을 해주세요.";
    if (!emailChecked) newErrors.email = "이메일 중복체크를 해주세요.";
    if (!email) newErrors.email = "이메일을 입력해주세요.";
    if (!username) newErrors.username = "사용자 이름을 입력해주세요.";
    if (!password) newErrors.password = "비밀번호를 입력해주세요.";
    if (password && !passwordPattern.test(password)) {
      newErrors.password = "영문 대소문자, 특수문자 포함 8자 이상 32자 이하이어야 합니다.";
    }

    if (newErrors.email || newErrors.username || newErrors.password || !isCodeVerified) {
      setErrors(newErrors);
      return;
    }

    const param = {
      name: username,
      email,
      code: verificationCode,
      password,
      privacy_policy: true,
      terms_of_service: true,
    };

    signup(param)
      .then((res) => {
        console.log("회원가입 성공");
        setLoginSuccess(true);
        setTimeout(() => {
          toggleView();
        }, 2000);
      })
      .catch((err) => {
        console.log("회원가입 실패");
      });
  };

  /** 로그인 */
  const handleClickLoginBtn = () => {
    const newErrors = { email: "", password: "" };

    if (!email) newErrors.email = "이메일을 입력해주세요.";
    if (!password) newErrors.password = "비밀번호를 입력해주세요.";

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    const param = {
      email,
      password,
    };

    login(param)
      .then((res) => {
        console.log(res);
        localStorage.setItem("ACCESS_TOKEN", res.data.access_token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("email", res.data.email);
        dispatch(isLoginModalOpen(false));
        window.location.href = HOME_URL;
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, password: "이메일 또는 비밀번호가 잘못되었습니다." }));
      });
  };

  /** email input */
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: " " }));
    setEmailChecked(false);
  };

  /** username input */
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    setErrors((prev) => ({ ...prev, username: " " }));
  };

  /** password input */
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: " " }));
  };

  /** verification code input */
  const handleChangeVerificationCode = (e) => {
    setVerificationCode(e.target.value);
  };

  return (
    <LoginModalOverlay>
      <Modal>
        <SpanBox>
          <i className="fa-solid fa-circle-xmark" onClick={() => dispatch(isLoginModalOpen(false))}></i>
        </SpanBox>
        <div className="animated bounceInDown">
          <span className="error animated tada" id="msg"></span>
          <Form name="form1" className="box">
            <img src={logo} alt="TInterview logo" width={170} />
            {isLogin ? (
              <>
                <h5>
                  간편 로그인을 통해 당신의 면접 실력을
                  <br /> 향상시킬 AI 면접 파트너를 만나봐요.
                </h5>
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
                    <LoginButton type="button" onClick={handleClickLoginBtn}>
                      로그인
                    </LoginButton>
                  </ButtonWrapper>
                </InputWrapper>
                <ToggleText>
                  아직 계정이 없으신가요? <a onClick={toggleView}>회원가입</a>
                </ToggleText>
              </>
            ) : (
              <>
                <h5>회원가입을 통해 AI 면접 파트너를 만나보세요.</h5>
                <InputWrapper>
                  <div>
                    <EmailWrapper>
                      <TextInput
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => handleChangeEmail(e)}
                        style={{ width: "40%" }}
                      />
                      <CheckButtonWrapper>
                        <CheckButton
                          type="button"
                          onClick={checkEmailDuplication}
                          disabled={!email || emailChecked}
                        >
                          중복체크
                        </CheckButton>
                        <VerifyButton
                          type="button"
                          onClick={sendVerificationCode}
                          disabled={!email || !emailChecked}
                        >
                          인증코드 발송
                        </VerifyButton>
                      </CheckButtonWrapper>
                    </EmailWrapper>
                    {errors.email && <Validate>{errors.email}</Validate>}
                  </div>
                  {isCodeSent && (
                    <div>
                      <CodeSentWrapper>
                        <TextInput
                          type="text"
                          placeholder="Verification Code"
                          value={verificationCode}
                          onChange={(e) => handleChangeVerificationCode(e)}
                          style={{ width: "73%" }}
                        />
                        <VerifyButton type="button" onClick={verifyCode}>
                          인증확인
                        </VerifyButton>
                      </CodeSentWrapper>
                      {verificationErrors && <Validate>{verificationErrors}</Validate>}
                    </div>
                  )}
                  <div>
                    <TextInput
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => handleChangeUsername(e)}
                      style={{ width: "100%" }}
                    />
                    {errors.username && <Validate>{errors.username}</Validate>}
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
                    <SignupButton type="button" onClick={handleClickSignupBtn}>
                      회원가입
                    </SignupButton>
                  </ButtonWrapper>
                </InputWrapper>
                <ToggleText>
                  이미 계정이 있으신가요? <a onClick={toggleView}>로그인</a>
                </ToggleText>
                {loginSuccess && <SuccessText>회원가입에 성공했습니다 로그인 후 서비스를 이용해주세요.</SuccessText>}
              </>
            )}
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
`;

const Modal = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.gray9};
  border-radius: 1.3rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  width: auto;
  min-height: 60vh;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgb(33, 41, 66);
  border-radius: 12px;
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
    margin-top: 40px;
    margin-bottom: 10%;
  }
`;

const SpanBox = styled.span`
  display: flex;
  justify-content: flex-end;
  i.fa-solid.fa-circle-xmark {
    font-size: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray4};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10%;
`;

const EmailWrapper = styled.div`
  display: flex;
  margin: 0;
  justify-content: space-between;
`;

const Validate = styled.div`
  color: red;
  text-align: left;
  margin-top: 5px;
  font-size: 12px;
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

const CheckButtonWrapper = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CodeSentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  height: 40px;
  width: 100%;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;

const LoginButton = styled(Button)`
  background-color: #3b5998;
  margin: 0;
`;

const SignupButton = styled(Button)`
  background-color: #5c6bc0;
  margin: 0;
`;

const ToggleText = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray5};
  & a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const SuccessText = styled.p`
  margin-top: 5%;
  font-weight: 500;
  color: #ffe066;
`;

const Hr = styled.hr`
  border: none;
  height: 1px;
  margin-top: 4vh;
  background-color: ${({ theme }) => theme.colors.gray7};
`;

const SocialLoginInfo = styled.div`
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray5};
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

const CheckButton = styled(Button)`
  background-color: #3b5998;
  width: auto;
  padding: 0 15px;
  &:disabled {
    background-color: #8d9099;
  }
`;

const VerifyButton = styled(Button)`
  background-color: #ffa500;
  width: auto;
  padding: 0 15px;
  &:disabled {
    background-color: #8d9099;
  }
`;
