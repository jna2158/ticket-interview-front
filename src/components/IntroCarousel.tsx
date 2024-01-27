import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/images/cover-one.jpg";

export default function IntroCarousel() {
  return (
    <header id="intro-carousel" className="carousel slide">
      <div className="carousel-inner">
        <div className="item active">
        <img className="fill" src={background}></img>
          <div className="carousel-caption">
            <h1 className="animated slideInDown">Taking your business to <span className="highlight">new heights</span></h1>
            <p className="intro-text animated slideInUp">Hallooou is designed and aimed at creative teams that want to showcase their products and services in a new, creative way.</p>
            <a className="btn btn-default btn-lg">Download theme</a>
          </div>
          <div className="overlay-detail"></div>
        </div>
      </div>
      <div className="mouse"></div>
    </header>
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