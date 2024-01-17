import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import logo from "../../src/assets/image/account_baby.png";

export default function Navbar() {
  /** state */
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLogged = localStorage.getItem("username");

  return (
    <section>
      <Nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="36" height="36" className="d-inline-block align-text-top" /> Ticket Interview
          </a>
          {
            isLogged
            ? <span className="navbar-brand mb-0 h1">{localStorage.getItem("username")} 님</span>
            : <button className="btn btn-outline-secondary" type="button" onClick={() => setIsLoginModalOpen(true)}>Login</button>
          }
        </div>
      </Nav>
      {
        isLoginModalOpen ? <LoginModal setIsLoginModalOpen={setIsLoginModalOpen}/> : null
      }
    </section>
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