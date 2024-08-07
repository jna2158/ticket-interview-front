import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/image/logo/app_name.png";
import LoginModal from "./login_modal";
import { logout } from "../services/login_service";
import { useDispatch, useSelector } from "react-redux";
import { isLoginModalOpen } from "../redux/login_slice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [clickProfile, setClickProfile] = useState(false);
  const isModalOpen = useSelector((state: any) => state.login.isLoginModalOpen);
  const isLogin = useSelector((state: any) => state.login.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* 로그아웃 버튼 클릭했을 때 */
  const handleClickLogoutBtn = async () => {
    await logout().then(res => {
      localStorage.clear();
      setClickProfile(false);
      navigate("/");
      window.location.reload();
    })
      .catch(err => {
        console.log(err);
      });
  }

  /** 마이페이지로 이동 */
  const handleClickMypageBtn = () => {
    navigate("/mypage");
  };

  return (
    <>
      <nav className="navbar-custom navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header pull-left">
            <a className="navbar-brand page-scroll" href="/">
              <span className="brand-logo"><img src={logo} alt="logo" title="logo" width={220} className="img-responsive"></img></span>
            </a>
          </div>
          <LoginButtonContainer className="main-nav pull-right">
            {
              isLogin
                ? <a onClick={() => setClickProfile(!clickProfile)}>{localStorage.getItem("username")}</a>
                : <button className="btn btn-outline-light" onClick={() => dispatch(isLoginModalOpen(true))}>로그인</button>
            }
          </LoginButtonContainer>
          {
            clickProfile ? (
              <Profile className="profile_dropdown_section">
                <li onClick={handleClickMypageBtn}>마이페이지</li>
                <li onClick={handleClickLogoutBtn}>로그아웃</li>
              </Profile>
            ) : <></>
          }
        </div>
      </nav>
      {
        isModalOpen ? <LoginModal /> : null
      }
    </>
  );
}

const LoginButtonContainer = styled.div`
  color: white;
  cursor: pointer;
  line-height: normal;
  & a {
    font-size: 25px;
  }
  & button {
    font-size: 18px;
    height: 5vh !important;
  }
  & button:focus {
    color: white;
  }
`;
const Profile = styled.section`
  position: absolute;
  background-color: rgb(97, 96, 96);
  border-radius: 5px;
  top: 8vh;
  right: 1%;
  width: 150px;
  font-size: 18px;
  & li {
    list-style-type: none;
    cursor: pointer;
    color: var(--white);
    padding: 5%;
    padding-left: 18px;
  }
  & li:hover {
    background-color: rgb(72, 72, 72);
    border-radius: 5px;
  }
`;