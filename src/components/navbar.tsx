import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import logo from "../assets/images/logo.svg";

import coverone from "../assets/images/cover-one.jpg";
import covertwo from "../src/assets/images/cover-two.jpg";
import coverthree from "../src/assets/images/cover-three.jpg";

export default function Navbar() {
  /** state */
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLogged = localStorage.getItem("username");

  return (
    // <section>
    //   <Nav className="navbar">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         <img src={logo} alt="Logo" width="36" height="36" className="d-inline-block align-text-top" /> Ticket Interview
    //       </a>
    //       {
    //         isLogged
    //         ? <span className="navbar-brand mb-0 h1">{localStorage.getItem("username")} 님</span>
    //         : <button className="btn btn-outline-secondary" type="button" onClick={() => setIsLoginModalOpen(true)}>Login</button>
    //       }
    //     </div>
    //   </Nav>
    //   {
    //     isLoginModalOpen ? <LoginModal setIsLoginModalOpen={setIsLoginModalOpen}/> : null
    //   }
    // </section>
    <nav className="navbar-custom top-nav-collapse" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header pull-left">
          <a className="navbar-brand page-scroll" href="#page-top">
            <span className="brand-logo"><img src={logo} alt="logo" title="logo" className="img-responsive"></img></span>
          </a>
        </div>
        <LoginButtonContainer className="main-nav pull-right">
          <i className="bi bi-box-arrow-in-left"></i>
        </LoginButtonContainer>
      </div>
    </nav>
  );
}

/** Style */
const Nav = styled.nav`
  height: 8.5vh;
  background-color: #f3fbff;;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  font-family: "Gowun Dodum";
  font-weight: 600;
`;

const LoginButtonContainer = styled.div`
  color: white;
  font-size: 35px;
  cursor: pointer;
  border: 1px solid black;
`;