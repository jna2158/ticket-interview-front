import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/image/logo.svg";
import LoginModal from "./loginModal";

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLogged = localStorage.getItem("username");

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
              ? <a>{ localStorage.getItem("username") }</a>
              : <button type="button" className="btn btn-outline-light" onClick={() => setIsLoginModalOpen(true)}>로그인</button>
            }
          </LoginButtonContainer>
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