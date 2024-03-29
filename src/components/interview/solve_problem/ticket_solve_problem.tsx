import React, { useState } from "react";
import { scoringProblem } from "../../../services/interview_service";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Timer from "../timer";

export default function Problem({data, nextProblem, isLast, totalLength, currentIndex}: any) {
  const [userAnswer, setUserAnswer] = useState("");
  const navigate = useNavigate();
  const btnName = isLast ? "제출하기" : "다음";
  const [time, setTime] = useState('');

  /* 답 입력 후 다음 버튼 클릭했을 때 */
  const handleClickNextBtn = () => {
    const param = {
      question: data,
      user_answer: userAnswer,
      last_problem: isLast ? 1 : 0
    }

    scoringProblem(param)
    .then(res => {
      console.log(res);
      res.data.time = time;
      if(isLast) {
        navigate("/interview-score", { state: res.data});
      }
    })
    .catch(err => {
      console.log(err);
    })
    if (!isLast) {
      setUserAnswer("");
      nextProblem(); 
    }
  }

  return (
    <Wrapper>
      <ProblemSection>
        <SubWrapper>
          <Badge className="badge-info">{totalLength}개 중 {currentIndex + 1}번째 문제</Badge>
          <Timer setTime={setTime}/>
        </SubWrapper>
        <ProblemTitle>{ data }</ProblemTitle>
        <TextArea className="form-control" name="message" placeholder="여기에 답을 입력하세요." value={userAnswer} onChange={e => setUserAnswer(e.target.value)}></TextArea>
        <SubmitBtn type="button" className="btn" onClick={handleClickNextBtn}>{ btnName }</SubmitBtn>
      </ProblemSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #171717;
  width: 100vw;
  height: auto;
  min-height: 100vh;
`;
const ProblemSection = styled.div`
  width: 100vw;
  padding: 2% 2% 2% 4%;
`;
const SubWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
const Badge = styled.span`
  padding: 5px;
  border-radius: 10px;
  margin-right: 2%;
`;
const ProblemTitle = styled.div`
  font-size: 30px;
  padding: 1% 0% 2% 0%;
  color: #E1E2E8;
`;
const TextArea = styled.textarea`
  width: 65vw;
  height: 50vh !important;
  background-color: #1F2325;
  border: 2px solid #495057;
  color: #cbc8c8 !important;
  line-height: 3vh;
  &:hover {
    background-color: #1F2325;
  }
  &:focus {
    background-color: #1F2325;
  }
`;
const SubmitBtn = styled.button`
  width: 65vw;
  margin-top: 5vh;
  border: none;
  background-color: #1864ab;
  color: #cbc8c8;
  &:hover {
    color: #cbc8c8;
    background-color: #1864ab;
  }
  &:focus {
    color: #cbc8c8;
    background-color: #1864ab;
  }
`;