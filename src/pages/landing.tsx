import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { isLoginModalOpen } from "../redux/login_slice";
import landingImage from "../assets/image/landing-image.jpg";

export default function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.login.isLogin);

  const handleClickStartBtn = () => {
    if (!isLogin) {
      dispatch(isLoginModalOpen(true));
      return;
    }
    navigate("/select-category");
    // navigate("/interview-score");

  };

  return (
    <Wrapper>
      <LandingSection image={landingImage}>
        <div className="carousel-caption">
          <Title className="animated slideInDown">IT 면접에 자신감을 가지고 싶나요? <span className="highlight">이제는 준비할 때입니다.</span></Title>
          <SubTitle className="intro-text animated slideInUp">다양한 카테고리별 예상 질문과 문제풀이로 당신을 돕습니다. TInterview와 함께 더 나은 미래를 준비해보세요!</SubTitle>
          <InterviewButton onClick={handleClickStartBtn}>시작하기</InterviewButton>
        </div>
      </LandingSection>
    </Wrapper>
  );
}

const ChartContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: '20px 0';
`;

const ChartFill = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background-color: #76c7c0;
  height: 30px;
  border-radius: '5px 0 0 5px'
`

const Title1 = styled.div`
  display: flex;
  align-items: center;
  width: 65vw;
  height: 4vh;
  border-radius: 5px;
  margin-bottom: 3px;
  font-size: 15px;
  padding-left: 3%;
  color: white;
  background-color: #2A1693;
`;
const Card = styled.div`
  display: flex;
  width: 65vw;
  height: 15vh;
  margin-bottom: 5%;
  border-radius: 5px;
  background: #262729;
`;
const ResultCnt = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px dotted #7b7b7b;
  padding: 30px;
  margin-right: 10px;
`;
const SubjectList = styled.div`
  display: flex;
  width: 55vw;
  gap: 20px;
  flex-direction: column;
  padding: 2%;
`;
const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Badge = styled.span`
  padding: 10px;
  height: 3vh;
  border-radius: 18px;
  margin-right: 2%;
  align-content: center;
  background-color: #176ab8;
`;










const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Title = styled.div`
  font-size: 4rem;
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
const LandingSection = styled.section<{ image }>`
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