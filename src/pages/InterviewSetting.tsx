import React from "react"
import styled from "styled-components"

export default function InterviewSetting() {
  interface Subject {
    readonly id: number;
    title: string;
    checked: boolean;
    problems: number;
  };


  return (
    <Wrapper>
      <SettingTitle>Setting</SettingTitle>
      <SectionWrapper>
        <LeftSection>왼쪽 영역</LeftSection>
        <RightSection>오른쪽 영역</RightSection>
      </SectionWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;

const SettingTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  align-items: center;
  padding: 1%;
  font-family: 'Gowun Dodum';
`;

const SectionWrapper = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  background-color: ivory;
  width: 50%;
  height: 100vh;
`;

const RightSection = styled.div`
  background-color: skyblue;
  width: 50%;
  height: 100vh
`;