import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { isLoginModalOpen } from "../redux/login_slice";
import ticketIntro from "../assets/image/ticket_intro.png";
import ticketIntro2 from "../assets/image/ticket_intro2.png";
import { interviewType } from "../redux/interview_slice";
import ChattingSolveProblem from "../components/interview/solve_problem/chatting_solve_problem";
import Agreement from "./agreement";
import landingImage from "../assets/image/landing-image.jpg";

export default function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.login.isLogin);

  const startInterview = (type: "Ticket" | "Video" | "Chatting") => {
    if (!isLogin) {
      dispatch(isLoginModalOpen(true));
      return;
    }
    dispatch(interviewType(type));
    navigate("/interview-setting", {state: type});
    // navigate("/problem-solve");
  };

  return (
    <Wrapper>
      <LandingSection image={landingImage}>
        <div className="carousel-caption">
          <Title className="animated slideInDown">IT 면접에 자신감을 가지고 싶나요? <span className="highlight">이제는 준비할 때입니다.</span></Title>
          <SubTitle className="intro-text animated slideInUp">다양한 카테고리별 예상 질문과 문제풀이로 당신을 돕습니다. TInterview와 함께 더 나은 미래를 준비해보세요!</SubTitle>
          <InterviewButton onClick={() => startInterview("Ticket")}>시작하기</InterviewButton>
        </div>
      </LandingSection>
    </Wrapper> 
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Title = styled.div`
  font-size: 4.5rem;
  color: white;
  font-weight: 500;
  & span {
    color: #ffd43b;
  }
`;
const SubTitle = styled.p`
  font-size: 1.9rem;
  font-weight: 500;
  color: #adb5bd;
`;
const LandingSection = styled.section<{image}>`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(20, 20, 20, 0.75);
  }
`;
const InterviewButton = styled.button`
  width: 5vw;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #dee2e6;
  color: #dee2e6;
  border-radius: 30px;
  cursor: pointer;
`;