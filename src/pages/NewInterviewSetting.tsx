import React, { useState } from "react";
import styled from "styled-components";
import SubjectCard from "../components/subjectCard";

export default function NewInterviewSetting() {
  return (
    <Wrapper>
      <InterviewSection>
        <Title>문제 선택하기</Title>
        <SubTitle>로그인을 하면 한 카테고리 당 최대 10개의 문제를 풀 수 있습니다.</SubTitle>
        <SubjectCard />
        <button>다음</button>
      </InterviewSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #171717;
  width: 100vw;
  height: 100vh;
`;
const InterviewSection = styled.div`
  width: 100vw;
  padding: 5% 2% 2%;
`;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #ffd43b;
  font-family: "Gowun Dodum", sans-serif;
`
const SubTitle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  color: #fff4e6;
`;