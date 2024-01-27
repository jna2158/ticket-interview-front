import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "../assets/images/cover-one.jpg";

export default function IntroPage() {
  return (
    <header id="intro-carousel" className="carousel slide">
      <div className="carorrusel-inner">
        <div className="item active">
        <img className="fill" src={background}></img>
          <div className="carousel-caption">
            <h1 className="animated slideInDown">Taking your business to <span className="highlight">new heights</span></h1>
            <p className="intro-text animated slideInUp">Hallooou is designed and aimed at creative teams that want to showcase their products and services in a new, creative way.</p>
            <Link to="/interview-setting">
              <a className="btn btn-default btn-lg">시작하기</a>
            </Link>
          </div>
          <div className="overlay-detail"></div>
        </div>
      </div>
      <div className="mouse"></div>
    </header>
  );
}