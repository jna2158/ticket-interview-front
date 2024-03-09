import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/image/logo.svg";
import LoginModal from "./loginModal";
import { logout } from "../services/LoginService";

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLogged = localStorage.getItem("username");
  const [clickProfile, setClickProfile] = useState(false);

  const handleClickLogoutBtn = async () => {
    await logout().then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <>
      <nav className="navbar-custom navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header pull-left">
            <a className="navbar-brand page-scroll" href="#page-top">
              <span className="brand-logo"><img src={logo} alt="logo" title="logo" className="img-responsive"></img></span>
            </a>   
          </div>
          <LoginButtonContainer className="main-nav pull-right">
            {
              isLogged
              ? <a onClick={() => setClickProfile(!clickProfile)}>{ localStorage.getItem("username")}</a>
              : <button type="button" className="btn btn-outline-light" onClick={() => setIsLoginModalOpen(true)}>로그인</button>
            }
          </LoginButtonContainer>
          {
            clickProfile ? (
              <Profile className="profile_dropdown_section">
                  <li>마이페이지</li>
                  <li onClick={handleClickLogoutBtn}>로그아웃</li>
              </Profile>
            ) : <></>
          }
        </div>
      </nav>
      {
        isLoginModalOpen ? <LoginModal setIsLoginModalOpen={setIsLoginModalOpen}/> : null
      }
    </>
  );
}

/** Style */
const LoginButtonContainer = styled.div`
  color: white;
  font-size: 35px;
  cursor: pointer;
  line-height: normal;
  & a {
    font-size: 25px;
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
  }
`;