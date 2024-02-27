import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Score from "../components/Interview/score";

export default function InterviewScore() {
  const { state: data } = useLocation();
  
  return (
    <Wrapper>
      <ResultBox>
        <Header>
          <Title>INTERVIEW</Title>
          <Username>{localStorage.getItem("username")}</Username>
        </Header>
        <Hr />
        <DescBox>
          <SubTitle>인터뷰 결과</SubTitle>
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
  background-color: #568BDF;
`;

const ResultBox = styled.div`
  background-color: #fff;
  width: 90%;
  height: 90%;
`;

const Header = styled.div`
  padding-top: 2%;
`;
const Hr = styled.hr`
  height: 1.5px;
  width: 90%;
  margin-left: 5%;
  background-color: #568BDF;
`;
const DescBox = styled.div`
  background-color: #F6F9FE;
  width: 90%;
  height: 15vh;
  margin-left: 5%;
`;
const Result = styled.div`
  width: 90%;
  margin: 2% 0 0 5%;
  max-height: 50vh;
  overflow-y: auto; /* 세로 스크롤 적용 */
`;
const SubTitle = styled.span`

`;
const Title = styled.span`
  font-size: 20px;
  margin-left: 5%;
  font-weight: 600;
  color: #568BDF;
`; 
const Username = styled.span`
  font-size: 10px;
  color: #568BDF;
`;