import React from "react";
import styled from "styled-components";
import SubjectCard from "../components/subjectCard";

export default function NewInterviewSetting() {
  return (
    <Wrapper>
      <InterviewSection>
        <Title>문제 선택하기</Title>
        <SubTitle>로그인을 하면 한 카테고리 당 최대 10개의 문제를 풀 수 있습니다.</SubTitle>
        <SubjectCard />
      </InterviewSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #EAEAEA;
  width: 100vw;
  height: 100vh;
`;
const InterviewSection = styled.div`
  width: 100vw;
  height: 92vh;
  margin-top: 8vh;
  padding: 2%;
`;
const Title = styled.div``;
const SubTitle = styled.div``;