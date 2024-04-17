import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Score from "../components/interview/score";
import clap from "../assets/image/clap.png";

export default function InterviewScore() {
  const { state: data } = useLocation();
  const correctAnswer = data.result.filter(el => el.score !== 0);
  return (
    <Wrapper>
      <ResultBox>
        <Header>
          <Title>INTERVIEW 결과</Title>
        </Header>
        <Hr />
        <ResultTitle>
          {data.result.length}문제중 {correctAnswer.length}문제 맞췄어요 <Clap src={clap} alt="clap image" width={25}/>
        </ResultTitle>
        <DescBox>
          <SubTitle>이름: 유지원</SubTitle> <br />
          <SubTitle>점수: {Math.round((correctAnswer.length / data.result.length) * 100)}점</SubTitle> <br />
          <SubTitle>소요시간: {data.time}</SubTitle> <br />
        </DescBox>
        <Result>
          {data.result.map((el: any, idx: number) => {
            return (
              <Score key={idx} data={el} idx={idx}/>
            );
          })}
        </Result>
      </ResultBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #181818f6;
`;
const ResultBox = styled.div`
  background-color: #2a2a2acc;
  border: 2px solid #373534;
  width: 90%;
  height: 80%;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Header = styled.div`
  padding-top: 2%;
`;
const Hr = styled.hr`
  height: 1.5px;
  width: 90%;
  margin-left: 5%;
  background-color: #e5e5e5;
`;
const ResultTitle = styled.div`
  font-size: 2.1rem;
  font-weight: 600;
  margin-left: 5%;
  color: #32b4d4;
`;
const Clap = styled.img`
  margin-bottom: .3%;
`;
const DescBox = styled.div`
  background-color: #343a40;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  border-radius: 3px;
  width: 90%;
  height: 15vh;
  margin-left: 5%;
  margin-top: 1%;
  padding: .8%;
  line-height: 30px;
`;
const Result = styled.div`
  width: 90%;
  margin: 2% 0 0 5%;
  max-height: 43vh;
  overflow-y: auto;
`;
const SubTitle = styled.span`
  font-size: 1.9rem;
  color: #fff;
`;
const Title = styled.span`
  font-size: 20px;
  margin-left: 5%;
  font-weight: 600;
  color: #e5e5e5;
`; 
const Username = styled.span`
  font-size: 10px;
  color: #568BDF;
`;