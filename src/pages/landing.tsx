import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { isLoginModalOpen } from "../redux/login_slice";
import ticketIntro from "../assets/image/ticket_intro.png";
import ticketIntro2 from "../assets/image/ticket_intro2.png";
import { interviewType } from "../redux/interview_slice";

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
  };

  return (
    <Wrapper>
      <CategorySelectWrapper>
        <TicketSection onClick={() => startInterview("Ticket")} image={ticketIntro} image2={ticketIntro2} />
        {/* <VideoSection onClick={() => startInterview("Video")}>Video</VideoSection> */}
        {/* <ChatSection onClick={() => startInterview("Chatting")}>Chatting</ChatSection> */}
      </CategorySelectWrapper>
      <div className="carousel-caption">
        <Title className="animated slideInDown">IT 면접에 자신감을 가지고 싶나요? <span className="highlight">이제는 준비할 때입니다.</span></Title>
        <p className="intro-text animated slideInUp">다양한 카테고리별 예상 질문과 문제풀이로 당신을 돕습니다. TInterview와 함께 더 나은 미래를 준비해보세요!</p>
      </div>
    </Wrapper>
  );
}

const Title = styled.div`
  font-size: 4rem;
  & span {
    color: #fcdb59;
  }
`;
const Wrapper = styled.div`
  background-color: #181818f6;
  height: 100vh;
  width: 100vw;
`;
const CategorySelectWrapper = styled.div`
  display: flex;
`;
const TicketSection = styled.section<{image, image2}>`
  height: 100vh;
  width: 33.3vw;
  background-image: url(${props => props.image}),url(${props => props.image2});
  background-size: contain;
  background-position: 15px 55vh, 15px 67px;
  background-repeat: no-repeat;
  opacity: 0.4;
  &:hover {
    transform: scale(1.02);
    transition: transform .5s;
    opacity: 0.8;
    transition: .4s ease-out;
    cursor: pointer;
  }
`;
const VideoSection = styled.section`
  border: .1px solid white;
  height: 100vh;
  width: 33.3vw;
  &:hover {
    background-color: red;
    transform: scale(1.02);
    transition: transform .5s;
  }
`;
const ChatSection = styled.section`
  border: .1px solid white;
  height: 100vh;
  width: 33.3vw;
  &:hover {
    background-color: red;
    transform: scale(1.02);
    transition: transform .5s;
  }
`;
