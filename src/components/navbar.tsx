import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";

export default function Navbar() {
  /** state */
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLogged = localStorage.getItem("username");

  return(
    <section>
      <Header>
        <Nav>
          <Logo/> 로고
          {
            isLogged
            ? <Profile><strong>{localStorage.getItem("username")}</strong> 님</Profile>
            : <Login onClick={() => setIsLoginModalOpen(true)}>로그인</Login>
          }
        </Nav>
      </Header>
      {
        isLoginModalOpen ? <LoginModal setIsLoginModalOpen={setIsLoginModalOpen}/> : null
      }
    </section>
  )
}

/** Style */
const Header = styled.header`
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
`;

const Nav = styled.nav`
  width: calc(100% - 120px);
  margin: auto;
  line-height: 70px;
`;

const Logo = styled.div`
  float: left;
  width: 130px;
`;

const Login = styled.div`
  float: right;
  cursor: pointer;
  font-size: 1.3rem;
  font-family: 'Nanum Gothic';
`;

const Profile = styled.div`
  float: right;
  cursor: pointer
  font-size: 1.3rem;
  font-family: 'Nanum Gothic';
`