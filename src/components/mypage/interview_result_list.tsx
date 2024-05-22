import React from "react"
import { styled } from "styled-components";

export default function InterviewResultList() {
  return (
    <Wrapper>
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 5vh;
  margin-left: 5vw;
`;
const CardWrapper = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc; 
  }
`;
const Card = styled.div` 
  width: 65vw;
  height: 15vh;
  margin-bottom: 5%;
  border-radius: 7px;
  box-shadow: "0px 4px 10px rgba(0, 0, 0, 0.1)";
  background: #072c4f;
`;