import React, { useEffect } from "react"
import { styled } from "styled-components";
import { result } from "../../services/interview_service";

export default function InterviewResultList() {

  useEffect(() => {
    result().then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
  return (
    <Wrapper>
      <CardWrapper>
        <Card><div>2024-01-02 15:03</div></Card>
        <Card><div></div></Card>
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
  background: #868e96;

  & div {
    border-radius: 7px 7px 1px 1px;
    width: 65vw;
    height: 4vh;
    background-color: #ced4da;
  }
`;