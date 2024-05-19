import React, { useState } from "react";
import { scoringProblem } from "../../../services/interview_service";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Timer from "../timer";
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux";

export default function TicketSolveProblem({data, subject, nextProblem, isLast, totalLength, currentIndex}: any) {
  const [userAnswer, setUserAnswer] = useState("");
  const navigate = useNavigate();
  const btnName = isLast ? "제출하기" : "다음";
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);
  const requestedProblem = useSelector((state: any) => state.interview.requestedProblem);

  /* 답 입력 후 다음 버튼 클릭했을 때 */
  const handleClickNextBtn = async () => {
    const index = subject.indexOf('-');
    const param: any = {
      question: data,
      user_answer: userAnswer,
      last_problem: isLast ? totalLength : 0,
      subject: subject.slice(0, index).trim()
    }
    
    if (isLast) {
      setLoading(true);
      param.numberOfQuestion = totalLength;
      param.subjects = requestedProblem;
    }
    await scoringProblem(param)
    .then(res => {
      setLoading(false);
      res.data.time = time;
      if(isLast) {
        navigate("/interview-score", { state: res.data});
      }
    })
    .catch(err => {
      setLoading(false);
      console.log(err);
    });

    if (!isLast) {
      setUserAnswer("");
      nextProblem(); 
    }
  }

  return (
    <Wrapper>
      <ProblemSection>
        <SubWrapper>
          <Badge className="badge-info"><strong>{totalLength}</strong>개 중 <strong>{currentIndex + 1}</strong>번째 문제</Badge>
          <Timer setTime={setTime} />
        </SubWrapper>
        <ProblemTitle>{ data }</ProblemTitle>
        <TextArea className="form-control" name="message" placeholder="여기에 답을 입력하세요." value={userAnswer} onChange={e => setUserAnswer(e.target.value)}></TextArea>
        <SubmitBtn type="button" className="btn" onClick={handleClickNextBtn}>{ btnName }</SubmitBtn>
      </ProblemSection>
      <Overlay loading={loading}>
        <CircularProgress />
      </Overlay>
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
  margin-top: 7vh;
`;
const Badge = styled.span`
  padding: 10px;
  height: 5vh;
  border-radius: 18px;
  margin-right: 2%;
  align-content: center;
  background-color: #176ab8;
`;
const ProblemTitle = styled.div`
  font-size: 30px;
  padding: 1% 0% 2% 0%;
  font-weight: 600;
  color: #E1E2E8;
`;
const TextArea = styled.textarea`
  width: 65vw;
  height: 50vh !important;
  border: 2px solid #495057;
  line-height: 3vh;
  font-size: 2rem;
  color: #cbc8c8 !important;
  background-color: #1F2325;
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
const Overlay = styled.div<{loading: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => (props.loading ? "flex" : "none")}; /* 변경 */
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 추가 */
`;