import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/images/cover-one.jpg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { isLoginModalOpen } from "../redux/loginSlice";

export default function IntroPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.login.isLogin);

  const startInterview = (type: "Ticket" | "Video" | "Chatting") => {
    if (!isLogin) {
      dispatch(isLoginModalOpen(true));
      return;
    }
    navigate("/interview-setting", {state: type});
  };

  return (
    // <header id="intro-carousel" className="carousel slide">
    //   <div className="carorrusel-inner">
    //     {/* <div className="item active"> */}
    //     <BackgroundImage className="fill"></BackgroundImage>
    //       <div className="carousel-caption">
    //         <Section>Ticket</Section>
    //         <Section>Video</Section>
    //         <Section>Chatting</Section>
    //         {/* <Title className="animated slideInDown">IT 면접에 자신감을 가지고 싶나요? <span className="highlight">이제는 준비할 때입니다.</span></Title>
    //         <p className="intro-text animated slideInUp">다양한 카테고리별 예상 질문과 문제풀이로 당신을 돕습니다. Ticket Interview와 함께 더 나은 미래를 준비해보세요!</p>
    //         <button className="btn btn-default btn-lg" onClick={startInterview}>면접 시작하기</button> */}
    //       </div>
    //       <div className="overlay-detail"></div>
    //     {/* </div> */}
    //   </div>
    // </header>
    <Wrapper>
      <CategorySelectWrapper>
        <TicketSection onClick={() => startInterview("Ticket")}>Ticket</TicketSection>
        <VideoSection onClick={() => startInterview("Video")}>Video</VideoSection>
        <ChatSection onClick={() => startInterview("Chatting")}>Chatting</ChatSection>
      </CategorySelectWrapper>
    </Wrapper>
  );
}

const BackgroundImage = styled.img`
  background-color: #181818f6;
  opacity: 0.85;
`;
const Title = styled.div`
  font-size: 4rem;
`;

const Wrapper = styled.div`
  background-color: #181818f6;
  height: 100vh;
  width: 100vw;
`;
const CategorySelectWrapper = styled.div`
  display: flex;
`;
const TicketSection = styled.section`
  border: .1px solid white;
  height: 100vh;
  width: 33.3vw;
  &:hover {
    background-color: red;
    transform: scale(1.02);
    transition: transform .5s;
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


// object-fit:cover;
//   transform:scale(1.0);        
//   transition: transform .5s; 
