import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/images/cover-one.jpg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { isOpen } from "../redux/loginSlice";

export default function IntroPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startInterview = () => {
    if (localStorage.getItem("username")) {
      navigate("/interview-setting");
    } else {
      dispatch(isOpen(true));
      return;
    }
  };

  return (
    <header id="intro-carousel" className="carousel slide">
      <div className="carorrusel-inner">
        <div className="item active">
        <BackgroundImage className="fill" src={background}></BackgroundImage>
          <div className="carousel-caption">
            <Title className="animated slideInDown">IT 면접에 자신감을 가지고 싶나요? <span className="highlight">이제는 준비할 때입니다.</span></Title>
            <p className="intro-text animated slideInUp">다양한 카테고리별 예상 질문과 문제풀이로 당신을 돕습니다. Ticket Interview와 함께 더 나은 미래를 준비해보세요!</p>
            <button className="btn btn-default btn-lg" onClick={startInterview}>면접 시작하기</button>
          </div>
          <div className="overlay-detail"></div>
        </div>
      </div>
    </header>
  );
}

const BackgroundImage = styled.img`
  opacity: 0.85;
`;
const Title = styled.div`
  font-size: 4rem;
`;