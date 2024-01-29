import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import logo from "../assets/image/logo.svg";

export default function Navbar() {
  /** state */
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLogged = localStorage.getItem("username");

  return (
    <>
      <nav className="navbar-custom top-nav-collapse" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header pull-left">
            <a className="navbar-brand page-scroll" href="#page-top">
              <span className="brand-logo"><img src={logo} alt="logo" title="logo" className="img-responsive"></img></span>
            </a>
          </div>
          <LoginButtonContainer className="main-nav pull-right">
            <i className="bi bi-box-arrow-in-left" onClick={() => setIsLoginModalOpen(true)}></i>
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
`;